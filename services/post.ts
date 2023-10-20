import store from "../redux/store";
import { v4 as uuidV4 } from "uuid";
import { GraphQLResult } from "@aws-amplify/api-graphql";
import { createBlog, createComment, createPost, updateComment, updatePost, updateUser } from "../graphql/mutations";
import { API } from "aws-amplify";
import { ErrorHandler, SuccessHandler } from "../utils/handlers";
import { fetchCommentsByPost, getAboutByBlog, getBlog, getPost } from "../graphql/queries";
import { setAbout, setBlog, setPostSummary } from "../redux/blogSlice";
import { customFetchCommentsStatsByBlog, customFetchPostsByBlog, customFetchPostsStatsByBlog } from "../graphql/customQueries";
import { IBlogPost, IPostCommentStats, IPostStats } from "../interfaces/blog";
import { IPostCommentData, IPostData } from "../interfaces/post";
import dayjs from "dayjs";
import { setComments } from "../redux/postSlice";
import { getUserDetails } from "./auth";

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

export const addBlogPostLike = async (userEmail: string, id: string, likes: number, userId?: string, userPostLikes?: string[]) => {
  try {
    const updatePostResponse = (await API.graphql({
      query: updatePost,
      variables: { input: { id, likes } },
    })) as GraphQLResult<any>;

    userId &&
      userPostLikes &&
      ((await API.graphql({
        query: updateUser,
        variables: { input: { id: userId, postLikes: Array.from(new Set([...userPostLikes, id])) } },
      })) as GraphQLResult<any>);

    userEmail && (await getUserDetails(userEmail));

    return updatePostResponse.data?.updatePost as IPostData;
  } catch (error: any) {
    console.error("error getting blog post", error?.message);
    console.error("error getting blog post full", error);
    throw error;
  }
};

export const removeBlogPostLike = async (userEmail: string, userId: string, userPostLikes: string[]) => {
  try {
    (await API.graphql({
      query: updateUser,
      variables: { input: { id: userId, postLikes: userPostLikes } },
    })) as GraphQLResult<any>;
    userEmail && (await getUserDetails(userEmail));
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
  let totalPosts = [] as IPostData[];

  // get posts
  const getPosts = async (nextToken?: string) => {
    const posts = (await API.graphql({
      query: customFetchPostsByBlog,
      variables: { blogId: blogId, nextToken },
    })) as GraphQLResult<any>;

    const postsData = posts?.data?.fetchPostsByBlog?.items as IPostData[];
    const modifiedPostsData = postsData.filter((postData) => !!postData);
    totalPosts = [...totalPosts, ...(modifiedPostsData as unknown as IPostData[])];

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
    const posts = (await API.graphql({
      query: customFetchPostsStatsByBlog,
      variables: { blogId: blogId, nextToken },
    })) as GraphQLResult<any>;

    const postsData = posts?.data?.fetchPostsByBlog?.items as IPostStats[];
    const modifiedPostsData = postsData.filter((postData) => !!postData);
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
    const comments = (await API.graphql({
      query: customFetchCommentsStatsByBlog,
      variables: { blogId: blogId, nextToken },
    })) as GraphQLResult<any>;

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

export const createBlogPostComment = async (commentData: IPostCommentData) => {
  try {
    const createPostCommentResponse = (await API.graphql({
      query: createComment,
      variables: { input: commentData },
    })) as GraphQLResult<any>;

    return createPostCommentResponse.data?.createPost;
  } catch (error: any) {
    console.error("error saving blog post", error?.message);
    console.error("error saving blog post full", error);
    throw error;
  }
};

export const fetchPostComments = async (postId: string) => {
  let totalCommentsData = [] as IPostCommentData[];

  // get comments
  const getCommentsData = async (nextToken?: string) => {
    const comments = (await API.graphql({
      query: fetchCommentsByPost,
      variables: { postId, nextToken },
    })) as GraphQLResult<any>;

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

export const addPostCommentLike = async (userEmail: string, id: string, likes: number, userId?: string, userCommentLikes?: string[]) => {
  try {
    const updateCommentResponse = (await API.graphql({
      query: updateComment,
      variables: { input: { id, likes } },
    })) as GraphQLResult<any>;

    userId &&
      userCommentLikes &&
      ((await API.graphql({
        query: updateUser,
        variables: { input: { id: userId, commentLikes: Array.from(new Set([...userCommentLikes, id])) } },
      })) as GraphQLResult<any>);

    userEmail && (await getUserDetails(userEmail));

    return updateCommentResponse.data?.updatePost as IPostData;
  } catch (error: any) {
    console.error("error updating blog comment", error?.message);
    console.error("error updating blog comment full", error);
    throw error;
  }
};

export const removePostCommentLike = async (userEmail: string, userId: string, userCommentLikes: string[]) => {
  try {
    (await API.graphql({
      query: updateUser,
      variables: { input: { id: userId, commentLikes: userCommentLikes } },
    })) as GraphQLResult<any>;
    userEmail && (await getUserDetails(userEmail));
  } catch (error: any) {
    console.error("error getting blog post", error?.message);
    console.error("error getting blog post full", error);
    throw error;
  }
};
