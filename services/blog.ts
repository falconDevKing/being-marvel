import store from "../redux/store";
import { v4 as uuidV4 } from "uuid";
import { GraphQLResult } from "@aws-amplify/api-graphql";
import { createBlog } from "../graphql/mutations";
import { API } from "aws-amplify";
import { ErrorHandler, SuccessHandler } from "../utils/handlers";

export const createBlogHandler = async (userId: string) => {
  try {
    if (userId) {
      const blogData = {
        id: uuidV4(),
        userId,
        name: "Being Marvel",
        logo: "https://being-marvel-public-assets.s3.eu-west-1.amazonaws.com/BeingMarvelLogo.png",
        darkLogo: "https://being-marvel-public-assets.s3.eu-west-1.amazonaws.com/BeingMarvelLogoPurple.png",
        subscriber: [] as string[],
      };

      const newBlog = (await API.graphql({
        query: createBlog,
        variables: {
          input: blogData,
        },
      })) as GraphQLResult<any>;

      const newBlogData = newBlog.data?.createBlog?.item;
      console.log({ data: newBlog.data?.createBlog, newBlog });

      SuccessHandler({ message: "Create Blog" });
      console.log({ blogData });
    }
  } catch (error: any) {
    console.log("err creating blog", error?.message, error);
    console.log("graphql err", error?.data);
    ErrorHandler({ message: error?.message || "Something went wrong" });
  }
};
