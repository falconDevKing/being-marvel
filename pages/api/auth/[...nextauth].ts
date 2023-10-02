import { NextApiRequest, NextApiResponse } from "next";
import NextAuth, { NextAuthOptions } from "next-auth";
import Providers from "next-auth/providers";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import bcrypt from "bcryptjs";
import { queryTable, putInTable } from "../../../utils/dynamodb";

// import jwt from 'jsonwebtoken'
import SaveOAuth from "../../../utils/saveOAuth";
import LatestSession from "../../../utils/latestSession";
import { getUserByEmail } from "../../../graphql/queries";
import { GraphQLResult } from "@aws-amplify/api-graphql";
import { Amplify, API, withSSRContext } from "aws-amplify";

const googleClientId = process.env.GOOGLE_CLIENT_ID as string;
const googleClientSecret = process.env.GOOGLE_CLIENT_SECRET as string;

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
    maxAge: 4 * 60 * 60,
  },
  providers: [
    GoogleProvider({
      clientId: googleClientId,
      clientSecret: googleClientSecret,
    }),
    CredentialsProvider({
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "sample@example.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const email = credentials?.email as string;
        const password = credentials?.password as string;

        if (!email.trim()) {
          return null;
        }

        const existingUserData = (await API.graphql({
          query: getUserByEmail,
          variables: {
            email: email,
          },
        })) as GraphQLResult<any>;

        const existingUsers = existingUserData.data?.getUserByEmail?.items;
        console.log("login", { data: existingUserData.data?.getUserByEmail, existingUsers });

        if (existingUsers?.length > 1) {
          return null;
        }

        const user: any = existingUsers[0];
        if (!user) {
          throw new Error("No user found!");
        }

        const result = await bcrypt.compare(password, user.password);
        if (!result) {
          throw new Error("Incorrect credentials!");
        }

        return user;
      },
    }),
  ],
  pages: {
    signIn: "/blog",
    signOut: "/blog",
    error: "/404", // Error code passed in query string as ?error=
    // verifyRequest: '/auth/verify-request', // (used for check email message)
    // newUser: '/auth/new-user' // New users will be directed here on first sign in (leave the property out if not of interest)
  },
  callbacks: {
    async jwt({ token, user, account, profile, trigger }) {
      console.log("user", user);
      console.log("token", token);
      // console.log("account", account);
      // console.log("profile", profile);

      if (trigger === "update") {
        const latestSession = await LatestSession(token?.email as string);
        token.id = latestSession?.id;
        token.name = latestSession?.name;
        token.image = latestSession?.image;
        token.blogger = latestSession?.blogger;
      }

      if (user && account?.provider) {
        console.log("save called");
        const savedOAuthId = await SaveOAuth(user, account);
        if (savedOAuthId) {
          token.id = savedOAuthId?.id;
          token.name = savedOAuthId?.name;
          token.image = savedOAuthId?.image;
          token.blogger = savedOAuthId?.blogger;
        }

        console.log("save done", savedOAuthId);
      }

      return token;
    },
    async session({ session, token, user }) {
      // Send properties to the client, like an access_token and user id from a provider.
      // console.log('token', token)
      const updatedSession = {
        ...session,
        user: { ...session.user, id: token.id, name: token.name, image: token.image as string, blogger: token.blogger as boolean },
      };

      console.log("session", updatedSession);
      return updatedSession;
    },
  },
};

export default NextAuth(authOptions);
