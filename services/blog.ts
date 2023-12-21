import store from "../redux/store";
import { v4 as uuidV4 } from "uuid";
// import { GraphQLResult } from "@aws-amplify/client-graphql";
import { createBlog } from "../graphql/mutations";
import { generateClient } from "aws-amplify/api";
import { ErrorHandler, SuccessHandler } from "../utils/handlers";
import { getAboutByBlog, getBlog } from "../graphql/queries";
import { setAbout, setBlog, setPostSummary } from "../redux/blogSlice";
import { customFetchPostsByBlog } from "../graphql/customQueries";
import { IPostData } from "../interfaces/post";
import { IPostStats, IPostSummary } from "../interfaces/blog";

const client = generateClient();

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

      const newBlog = await client.graphql({
        query: createBlog,
        variables: {
          input: blogData,
        },
      });

      const newBlogData = newBlog.data?.createBlog;
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
  const blog = await client.graphql({
    query: getBlog,
    variables: { id: blogId },
  });

  const blogData = blog.data?.getBlog;
  store.dispatch(setBlog({ data: blogData }));

  // get about
  const about = await client.graphql({
    query: getAboutByBlog,
    variables: { blogId: blogId },
  });

  const aboutData = about?.data?.getAboutByBlog?.items[0];
  store.dispatch(setAbout({ data: aboutData }));

  let totalPosts = [] as IPostSummary[];

  // get posts
  const getPosts = async (nextToken?: string) => {
    const posts = await client.graphql({
      query: customFetchPostsByBlog,
      variables: { blogId: blogId, nextToken },
    });

    const postsData = posts?.data?.fetchPostsByBlog?.items as IPostSummary[];
    const modifiedPostsData = postsData.filter((postData) => !!postData);
    totalPosts = [...totalPosts, ...(modifiedPostsData as unknown as IPostSummary[])];

    const next = posts?.data?.fetchPostsByBlog?.nextToken as string | null;
    if (next) {
      await getPosts(next);
    }
  };

  await getPosts();

  store.dispatch(setPostSummary({ data: totalPosts }));
};
