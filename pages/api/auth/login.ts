import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcryptjs";
import { v4 as uuidv4 } from "uuid";
import { errorResponseCreator, successResponseCreator } from "../../../utils/responseFormat";
import { queryTable, putInTable } from "../../../utils/dynamodb";
import { GraphQLResult } from "@aws-amplify/api-graphql";
import { Amplify, API, withSSRContext, Auth } from "aws-amplify";
import awsExports from "../../../aws-exports";
import { createUser, updateUser } from "../../../graphql/mutations";
import { getUserByEmail } from "../../../graphql/queries";

type Data = {
  statusCode: number;
  message: string;
  data?: any;
  error?: any;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.method !== "POST") {
    const errorResponse = errorResponseCreator(500, "", {});
    return res.status(errorResponse.statusCode).json(errorResponse);
  }

  try {
    const { email, password } = req.body;

    const existingUserData = (await API.graphql({
      query: getUserByEmail,
      variables: {
        email: email,
      },
    })) as GraphQLResult<any>;

    const existingUser = existingUserData.data?.getUserByEmail?.items[0];

    if (!existingUser) {
      const errorResponse = errorResponseCreator(422, "No user found", {});
      return res.status(errorResponse.statusCode).json(errorResponse);
    }

    const username = email;
    const user = await Auth.signIn(username, password);

    console.log(user);

    // const hashedPass = await bcrypt.hash(password, 12);

    // const user = {
    //   id: uuidv4(),
    //   customId: "",
    //   name: name,
    //   email: email,
    //   password: hashedPass,
    //   image: "",
    //   provider: "",
    //   id_token: "",
    //   access_token: "",
    //   postLikes: [],
    //   commentLikes: [],
    //   blogger: false,
    // };

    // const newUser = (await API.graphql({
    //   query: createUser,
    //   variables: {
    //     input: user,
    //   },
    // })) as GraphQLResult<any>;

    const successResponse = successResponseCreator(201, "Logged in successfully", user);
    return res.status(successResponse.statusCode).json(successResponse);
  } catch (err) {
    const errorResponse = errorResponseCreator(500, "Error creating user", err);
    return res.status(errorResponse.statusCode).json(errorResponse);
  }
}
