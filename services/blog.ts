import store from "../redux/store";
import { v4 as uuidV4 } from "uuid";
import { GraphQLResult } from "@aws-amplify/api-graphql";
import { createBlog } from "../graphql/mutations";
import { API } from "aws-amplify";
import { ErrorHandler, SuccessHandler } from "../utils/handlers";
import { getAboutByBlog, getBlog } from "../graphql/queries";
import { setAbout, setBlog, setPostSummary } from "../redux/blogSlice";
import { customFetchPostsByBlog } from "../graphql/customQueries";

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

export const getBlogDetails = async (blogId: string) => {
  // get blog
  const blog = (await API.graphql({
    query: getBlog,
    variables: { id: blogId },
  })) as GraphQLResult<any>;

  const blogData = blog.data?.getBlog;
  store.dispatch(setBlog({ data: blogData }));

  // get about
  const about = (await API.graphql({
    query: getAboutByBlog,
    variables: { blogId: blogId },
  })) as GraphQLResult<any>;

  const aboutData = about?.data?.getAboutByBlog?.items[0];
  store.dispatch(setAbout({ data: aboutData }));

  // get posts
  const posts = (await API.graphql({
    query: customFetchPostsByBlog,
    variables: { blogId: blogId },
  })) as GraphQLResult<any>;

  const postsData = posts?.data?.fetchPostsByBlog?.items;
  store.dispatch(setPostSummary({ data: postsData }));
};
