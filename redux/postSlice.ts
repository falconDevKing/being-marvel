/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { createAsyncThunk, createSlice, type PayloadAction } from "@reduxjs/toolkit";
// import { ErrorHandler } from "helper/Handlers";
import { getUserDetails, updateAuthLoading } from "../services/auth";
import { UserDetails } from "../interfaces/auth";
import { IPostCommentData, IPostCommentRedirect, IPostData } from "../interfaces/post";
import { Post, Comment, Audio } from "../graphql/API";
// import { AboutInterface, PostInterface } from "../interfaces/Post";

interface PostState {
  Post: Omit<Post, "__typename" | "createdAt" | "updatedAt">;
  comments: Omit<Comment, "__typename" | "createdAt" | "updatedAt">[];
  navToComment: IPostCommentRedirect;
  audio: Omit<Audio, "__typename" | "createdAt" | "updatedAt">;
  loading: boolean;
}

const initialState: PostState = {
  Post: { id: "", blogId: "" },
  audio: { id: "", blogId: "", postId: "" },
  comments: [],
  navToComment: {
    comment: "",
    section: "",
    postId: "",
    blogId: "",
    commentId: "",
  },
  loading: false,
};

// Then, handle actions in your reducers:
const PostSlice = createSlice({
  name: "Post",
  initialState,
  reducers: {
    setPostLoading: (
      state,
      action: PayloadAction<{
        data: boolean;
      }>,
    ) => {
      state.loading = action.payload.data;
    },
    setPost: (
      state,
      action: PayloadAction<{
        data: any;
      }>,
    ) => {
      state.Post = action.payload.data;
      state.loading = false;
    },
    setAudio: (
      state,
      action: PayloadAction<{
        data: any;
      }>,
    ) => {
      state.audio = action.payload.data;
    },
    setComments: (
      state,
      action: PayloadAction<{
        data: any;
      }>,
    ) => {
      state.comments = action.payload.data;
    },
    setNavToComment: (
      state,
      action: PayloadAction<{
        data: any;
      }>,
    ) => {
      state.navToComment = action.payload.data;
    },
    clearNavToComment: (state) => {
      state.navToComment = {
        comment: "",
        section: "",
        postId: "",
        blogId: "",
        commentId: "",
      };
    },
  },
  // extraReducers: (builder) => {
  //   builder.addCase(getLoggedInUser.pending, (state) => {
  //     state.loading = true;
  //   });
  //   builder.addCase(getLoggedInUser.fulfilled, (state, action) => {
  //     state.loading = false;
  //   });

  //   builder.addCase(getLoggedInUser.rejected, (state, action) => {
  //     state.loading = false;
  //   });
  // },
});

export const { setPost, setAudio, setComments, setPostLoading, setNavToComment, clearNavToComment } = PostSlice.actions;

export default PostSlice.reducer;
