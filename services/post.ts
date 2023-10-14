import store from "../redux/store";
import { v4 as uuidV4 } from "uuid";
import { GraphQLResult } from "@aws-amplify/api-graphql";
import { createBlog, createPost, updatePost } from "../graphql/mutations";
import { API } from "aws-amplify";
import { ErrorHandler, SuccessHandler } from "../utils/handlers";
import { getAboutByBlog, getBlog, getPost } from "../graphql/queries";
import { setAbout, setBlog, setPostSummary } from "../redux/blogSlice";
import { customFetchPostsByBlog, customFetchPostsStatsByBlog } from "../graphql/customQueries";
import { IBlogPost, IPostStats } from "../interfaces/blog";
import { IPostData } from "../interfaces/post";
import dayjs from "dayjs";

// TODO:  work on edit post
// TODO: Work on preview post

export const createBlogPost = async (postData: IBlogPost) => {
  try {
    console.log("services", { postData });
    const createPostResponse = (await API.graphql({
      query: createPost,
      variables: { input: postData },
    })) as GraphQLResult<any>;

    return createPostResponse.data?.createPost;
  } catch (error: any) {
    console.error("error saving blog post", error?.message);
    console.error("error saving blog post full", error);
    throw error;
  }
};

export const updateBlogPost = async (postData: IBlogPost) => {
  try {
    const updatePostResponse = (await API.graphql({
      query: updatePost,
      variables: { input: postData },
    })) as GraphQLResult<any>;

    return updatePostResponse.data?.updatePost as IPostData;
  } catch (error: any) {
    console.error("error getting blog post", error?.message);
    console.error("error getting blog post full", error);
    throw error;
  }
};

export const getBlogPost = async (postId: string) => {
  try {
    const getPostResponse = (await API.graphql({
      query: getPost,
      variables: { id: postId },
    })) as GraphQLResult<any>;

    return getPostResponse.data?.getPost as IPostData;
  } catch (error: any) {
    console.error("error getting blog post", error?.message);
    console.error("error getting blog post full", error);
    throw error;
  }
};

export const addBlogPostLike = async (id: string, likes: number) => {
  try {
    const updatePostResponse = (await API.graphql({
      query: updatePost,
      variables: { input: { id, likes } },
    })) as GraphQLResult<any>;

    return updatePostResponse.data?.updatePost as IPostData;
  } catch (error: any) {
    console.error("error getting blog post", error?.message);
    console.error("error getting blog post full", error);
    throw error;
  }
};

export const addBlogPostViews = async (id: string, views: number) => {
  try {
    const updatePostResponse = (await API.graphql({
      query: updatePost,
      variables: { input: { id, views } },
    })) as GraphQLResult<any>;

    return updatePostResponse.data?.updatePost as IPostData;
  } catch (error: any) {
    console.error("error getting blog post", error?.message);
    console.error("error getting blog post full", error);
    throw error;
  }
};

export const publishPost = async (id: string, blogId: string) => {
  try {
    const updatePostResponse = (await API.graphql({
      query: updatePost,
      variables: { input: { id, status: true, publishedAt: dayjs().format(), expireAt: 1171734022 } },
    })) as GraphQLResult<any>;

    await updatedBlogPostData(blogId);

    return updatePostResponse.data?.updatePost as IPostData;
  } catch (error: any) {
    console.error("error getting blog post", error?.message);
    console.error("error getting blog post full", error);
    throw error;
  }
};

export const unPublishPost = async (id: string, blogId: string) => {
  try {
    const updatePostResponse = (await API.graphql({
      query: updatePost,
      variables: { input: { id, status: false, publishedAt: "", expireAt: 1171734022 } },
    })) as GraphQLResult<any>;

    await updatedBlogPostData(blogId);

    return updatePostResponse.data?.updatePost as IPostData;
  } catch (error: any) {
    console.error("error getting blog post", error?.message);
    console.error("error getting blog post full", error);
    throw error;
  }
};

export const deletePost = async (id: string, blogId: string) => {
  try {
    const updatePostResponse = (await API.graphql({
      query: updatePost,
      variables: { input: { id, status: false, expireAt: dayjs().add(7, "days").unix() } },
    })) as GraphQLResult<any>;

    await updatedBlogPostData(blogId);

    return updatePostResponse.data?.updatePost as IPostData;
  } catch (error: any) {
    console.error("error getting blog post", error?.message);
    console.error("error getting blog post full", error);
    throw error;
  }
};

export const updatedBlogPostData = async (blogId: string) => {
  // get posts
  const posts = (await API.graphql({
    query: customFetchPostsByBlog,
    variables: { blogId: blogId },
  })) as GraphQLResult<any>;

  const postsData = posts?.data?.fetchPostsByBlog?.items;
  store.dispatch(setPostSummary({ data: postsData }));
};

export const fetchBlogPostsStats = async (blogId: string) => {
  // get posts
  const posts = (await API.graphql({
    query: customFetchPostsStatsByBlog,
    variables: { blogId: blogId },
  })) as GraphQLResult<any>;

  const postsData = posts?.data?.fetchPostsByBlog?.items as IPostStats[];
  return postsData;
};
