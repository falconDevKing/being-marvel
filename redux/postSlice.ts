/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { createAsyncThunk, createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { Auth } from "aws-amplify";
// import { ErrorHandler } from "helper/Handlers";
import { getUserDetails, updateAuthLoading } from "../services/auth";
import { UserDetails } from "../interfaces/auth";
import { IPostCommentData, IPostData } from "../interfaces/post";
// import { AboutInterface, PostInterface } from "../interfaces/Post";

interface PostState {
  Post: IPostData;
  comments: IPostCommentData[];
  audio: any;
  loading: boolean;
}

const initialState: PostState = {
  Post: {},
  comments: [],
  audio: {},
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

export const { setPost, setAudio, setComments, setPostLoading } = PostSlice.actions;

export default PostSlice.reducer;
