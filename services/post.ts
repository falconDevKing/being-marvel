import store from "../redux/store";
import { v4 as uuidV4 } from "uuid";
import { GraphQLResult } from "@aws-amplify/api-graphql";
import { createBlog, createComment, createPost, updateComment, updatePost, updateUser } from "../graphql/mutations";

import { ErrorHandler, SuccessHandler } from "../utils/handlers";
import { fetchCommentsByPost, getAboutByBlog, getBlog, getPost } from "../graphql/queries";
import { setAbout, setBlog, setPostSummary } from "../redux/blogSlice";
import { customFetchCommentsStatsByBlog, customFetchPostsByBlog, customFetchPostsStatsByBlog } from "../graphql/customQueries";
import { IBlogPost, IPostCommentStats, IPostStats, IPostSummary } from "../interfaces/blog";
import { IPostCommentData, IPostCommentRedirect, IPostData } from "../interfaces/post";
import dayjs from "dayjs";
import { clearNavToComment, setComments, setNavToComment } from "../redux/postSlice";
import { getUserDetails } from "./auth";
import { generateClient } from "aws-amplify/api";

const client = generateClient();

export const createBlogPost = async (postData: IBlogPost) => {
  try {
    console.log("services", { postData });
    const createPostResponse = await client.graphql({
      query: createPost,
      variables: { input: postData },
    });

    return createPostResponse.data?.createPost;
  } catch (error: any) {
    console.error("error saving blog post", error?.message);
    console.error("error saving blog post full", error);
    throw error;
  }
};

export const updateBlogPost = async (postData: IBlogPost) => {
  try {
    const updatePostResponse = await client.graphql({
      query: updatePost,
      variables: { input: postData },
    });

    return updatePostResponse.data?.updatePost;
  } catch (error: any) {
    console.error("error getting blog post", error?.message);
    console.error("error getting blog post full", error);
    throw error;
  }
};

export const getBlogPost = async (postId: string) => {
  try {
    const getPostResponse = await client.graphql({
      query: getPost,
      variables: { id: postId },
    });

    return getPostResponse.data?.getPost;
  } catch (error: any) {
    console.error("error getting blog post", error?.message);
    console.error("error getting blog post full", error);
    throw error;
  }
};

export const addBlogPostLike = async (userEmail: string, id: string, likes: number, userId?: string, userPostLikes?: string[]) => {
  try {
    const updatePostResponse = await client.graphql({
      query: updatePost,
      variables: { input: { id, likes } },
    });

    userId &&
      userPostLikes &&
      (await client.graphql({
        query: updateUser,
        variables: { input: { id: userId, postLikes: Array.from(new Set([...userPostLikes, id])) } },
      }));

    userEmail && (await getUserDetails(userEmail));

    return updatePostResponse.data?.updatePost;
  } catch (error: any) {
    console.error("error getting blog post", error?.message);
    console.error("error getting blog post full", error);
    throw error;
  }
};

export const removeBlogPostLike = async (userEmail: string, userId: string, userPostLikes: string[]) => {
  try {
    await client.graphql({
      query: updateUser,
      variables: { input: { id: userId, postLikes: userPostLikes } },
    });
    userEmail && (await getUserDetails(userEmail));
  } catch (error: any) {
    console.error("error getting blog post", error?.message);
    console.error("error getting blog post full", error);
    throw error;
  }
};

export const addBlogPostViews = async (id: string, views: number) => {
  try {
    const updatePostResponse = await client.graphql({
      query: updatePost,
      variables: { input: { id, views } },
    });

    return updatePostResponse.data?.updatePost;
  } catch (error: any) {
    console.error("error getting blog post", error?.message);
    console.error("error getting blog post full", error);
    throw error;
  }
};

export const publishPost = async (id: string, blogId: string) => {
  try {
    const updatePostResponse = await client.graphql({
      query: updatePost,
      variables: { input: { id, status: true, publishedAt: dayjs().format(), expireAt: 1171734022 } },
    });

    await updatedBlogPostData(blogId);

    return updatePostResponse.data?.updatePost;
  } catch (error: any) {
    console.error("error getting blog post", error?.message);
    console.error("error getting blog post full", error);
    throw error;
  }
};

export const unPublishPost = async (id: string, blogId: string) => {
  try {
    const updatePostResponse = await client.graphql({
      query: updatePost,
      variables: { input: { id, status: false, publishedAt: "", expireAt: 1171734022 } },
    });

    await updatedBlogPostData(blogId);

    return updatePostResponse.data?.updatePost;
  } catch (error: any) {
    console.error("error getting blog post", error?.message);
    console.error("error getting blog post full", error);
    throw error;
  }
};

export const deletePost = async (id: string, blogId: string) => {
  try {
    const updatePostResponse = await client.graphql({
      query: updatePost,
      variables: { input: { id, status: false, expireAt: dayjs().add(7, "days").unix() } },
    });

    await updatedBlogPostData(blogId);

    return updatePostResponse.data?.updatePost;
  } catch (error: any) {
    console.error("error getting blog post", error?.message);
    console.error("error getting blog post full", error);
    throw error;
  }
};

export const updatedBlogPostData = async (blogId: string) => {
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

export const fetchBlogPostsStats = async (blogId: string) => {
  let totalPostStats = [] as IPostStats[];

  // get posts
  const getPostStats = async (nextToken?: string) => {
    const posts = await client.graphql({
      query: customFetchPostsStatsByBlog,
      variables: { blogId: blogId, nextToken },
    });

    const postsData = posts?.data?.fetchPostsByBlog?.items as IPostStats[];
    const modifiedPostsData = postsData.filter((postData) => !!postData && postData.status);
    totalPostStats = [...totalPostStats, ...(modifiedPostsData as unknown as IPostStats[])];

    const next = posts?.data?.fetchPostsByBlog?.nextToken as string | null;
    if (next) {
      await getPostStats(next);
    }
  };

  await getPostStats();

  return totalPostStats;
};

export const fetchBlogCommentsStats = async (blogId: string) => {
  let totalCommentStats = [] as IPostCommentStats[];

  // get posts

  const getCommentsStats = async (nextToken?: string) => {
    const comments = await client.graphql({
      query: customFetchCommentsStatsByBlog,
      variables: { blogId: blogId, nextToken },
    });

    const commentsData = comments?.data?.fetchCommentsByBlog?.items as IPostCommentStats[];
    const modifiedCommentsData = commentsData.filter((commentData) => !!commentData);
    totalCommentStats = [...totalCommentStats, ...(modifiedCommentsData as unknown as IPostCommentStats[])];

    const next = comments?.data?.fetchCommentsByBlog?.nextToken as string | null;
    if (next) {
      await getCommentsStats(next);
    }
  };

  await getCommentsStats();

  return totalCommentStats;
};

export const fetchPostComments = async (postId: string) => {
  let totalCommentsData = [] as IPostCommentData[];

  // get comments
  const getCommentsData = async (nextToken?: string) => {
    const comments = await client.graphql({
      query: fetchCommentsByPost,
      variables: { postId, nextToken },
    });

    const commentsData = comments?.data?.fetchCommentsByPost?.items as IPostCommentData[];
    const modifiedCommentsData = commentsData.filter((commentData) => !!commentData);
    totalCommentsData = [...totalCommentsData, ...(modifiedCommentsData as unknown as IPostCommentData[])];

    const next = comments?.data?.fetchCommentsByPost?.nextToken as string | null;
    if (next) {
      await getCommentsData(next);
    }
  };

  await getCommentsData();

  return totalCommentsData;
};

export const getPostComments = async (postId: string) => {
  try {
    const postComments = await fetchPostComments(postId);

    store.dispatch(setComments({ data: postComments }));
  } catch (error: any) {
    console.log("error getting comments", error);
    ErrorHandler({ message: error?.message || "Unable to get comments" });
  }
};

export const createBlogPostComment = async (commentData: IPostCommentData) => {
  try {
    const createPostCommentResponse = await client.graphql({
      query: createComment,
      variables: { input: commentData },
    });

    await getPostComments(commentData?.postId);

    return createPostCommentResponse.data?.createComment;
  } catch (error: any) {
    console.error("error saving blog post", error?.message);
    console.error("error saving blog post full", error);
    throw error;
  }
};

export const addPostCommentLike = async (id: string, likes: number, postId: string, userId?: string, userCommentLikes?: string[], userEmail?: string) => {
  try {
    const updateCommentResponse = await client.graphql({
      query: updateComment,
      variables: { input: { id, likes } },
    });

    await getPostComments(postId);

    userId &&
      userCommentLikes &&
      (await client.graphql({
        query: updateUser,
        variables: { input: { id: userId, commentLikes: Array.from(new Set([...userCommentLikes, id])) } },
      }));

    userEmail && (await getUserDetails(userEmail));

    return updateCommentResponse.data?.updateComment;
  } catch (error: any) {
    console.error("error updating blog comment", error?.message);
    console.error("error updating blog comment full", error);
    throw error;
  }
};

export const removePostCommentLike = async (userEmail: string, userId: string, userCommentLikes: string[]) => {
  try {
    await client.graphql({
      query: updateUser,
      variables: { input: { id: userId, commentLikes: userCommentLikes } },
    });
    userEmail && (await getUserDetails(userEmail));
  } catch (error: any) {
    console.error("error getting blog post", error?.message);
    console.error("error getting blog post full", error);
    throw error;
  }
};

export const setNavToCommentData = (data: IPostCommentRedirect) => {
  store.dispatch(setNavToComment({ data }));
};

export const clearNavToCommentData = () => {
  store.dispatch(clearNavToComment());
};
