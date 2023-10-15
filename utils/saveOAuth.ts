import { v4 as uuidv4 } from "uuid";
import bcrypt from "bcryptjs";
import { errorResponseCreator, successResponseCreator } from "./responseFormat";
import { GraphQLResult } from "@aws-amplify/api-graphql";
import { Amplify, API, withSSRContext } from "aws-amplify";
import awsExports from "../aws-exports";
import { createUser, updateUser } from "../graphql/mutations";
import { getUserByEmail } from "../graphql/queries";

type userDataType = {
  id?: string | null;
  name?: string | null;
  email?: string | null;
  image?: string | null;
  [x: string]: any;
};

const userTable = (process.env.NEXT_PUBLIC_USERS_TABLE || process.env.USERS_TABLE) as string;

const SaveOAuth = async (userData: userDataType, account: any) => {
  try {
    const { id: customId, name, email, image } = userData;
    const { provider, access_token, id_token } = account;

    const existingUserData = (await API.graphql({
      query: getUserByEmail,
      variables: {
        email: email,
      },
    })) as GraphQLResult<any>;

    const existingUser = existingUserData.data?.getUserByEmail?.items[0];
    console.log({ data: existingUserData.data?.getUserByEmail, existingUser });

    if (!existingUser) {
      console.log("newUserPath");
      const user = {
        id: uuidv4(),
        customId,
        name: name,
        email: email,
        password: "",
        image: image,
        provider: provider,
        id_token: id_token || "",
        access_token: access_token || "",
        postLikes: [],
        commentLikes: [],
        blogger: false,
      };

      (await API.graphql({
        query: createUser,
        variables: {
          input: user,
        },
      })) as GraphQLResult<any>;

      return { id: user.id, name: name, image: image, blogger: false };
    }

    if (existingUser) {
      if (existingUser?.provider) {
        console.log("exsiting provider");
        return { id: existingUser.id, name: name, image: image, blogger: existingUser.blogger };
      }

      const updatedUser = {
        ...existingUser,
        image: image,
        provider: provider,
        access_token: access_token,
      };

      (await API.graphql({
        query: updateUser,
        variables: {
          input: updatedUser,
        },
      })) as GraphQLResult<any>;

      console.log("newProviderPath");

      return { id: existingUser.id, name: existingUser.name, image: existingUser.image, blogger: existingUser.blogger };
    }
  } catch (err) {
    console.log("Error oauth saving user", err);
    return null;
  }
};

export default SaveOAuth;
