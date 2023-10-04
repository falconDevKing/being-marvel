import store from "../redux/store";
import { v4 as uuidV4 } from "uuid";
import { GraphQLResult } from "@aws-amplify/api-graphql";
import { createBlog } from "../graphql/mutations";
import { API } from "aws-amplify";
import { SuccessHandler } from "../utils/handlers";

export const createBlogHandler = async () => {
  const blogData = {
    id: uuidV4(),
    name: "Being Marvel",
    logo: "https://being-marvel-public-assets.s3.eu-west-1.amazonaws.com/BeingMarvelLogo.png",
    darkLogo: "https://being-marvel-public-assets.s3.eu-west-1.amazonaws.com/BeingMarvelLogoPurple.png",
    userId: "ID!",
    subscriber: [],
  };

  // const newBlog = (await API.graphql({
  //   query: createBlog,
  //   variables: {
  //     input: blogData,
  //   },
  // })) as GraphQLResult<any>;

  // const existingUsers = newBlog.data?.createBlog?.item;
  // console.log({ data: newBlog.data?.createBlog, newBlog });

  SuccessHandler({ message: "Create Blog" });
  console.log({ blogData });
};
