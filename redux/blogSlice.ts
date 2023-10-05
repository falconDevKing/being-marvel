/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { createAsyncThunk, createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { Auth } from "aws-amplify";
// import { ErrorHandler } from "helper/Handlers";
import { getUserDetails, updateAuthLoading } from "../services/auth";
import { UserDetails } from "../interfaces/auth";
import { AboutInterface, BlogInterface } from "../interfaces/blog";

interface BlogState {
  blog: BlogInterface;
  about: AboutInterface;
  postsSummary: any;
  loading: boolean;
}

const initialState: BlogState = {
  blog: {},
  about: {},
  postsSummary: {},
  loading: false,
};

// Then, handle actions in your reducers:
const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    setBlogLoading: (
      state,
      action: PayloadAction<{
        data: boolean;
      }>,
    ) => {
      state.loading = action.payload.data;
    },
    setBlog: (
      state,
      action: PayloadAction<{
        data: any;
      }>,
    ) => {
      state.blog = action.payload.data;
      state.loading = false;
    },
    setAbout: (
      state,
      action: PayloadAction<{
        data: any;
      }>,
    ) => {
      state.about = action.payload.data;
      state.loading = false;
    },
    setPostSummary: (
      state,
      action: PayloadAction<{
        data: any;
      }>,
    ) => {
      state.postsSummary = action.payload.data;
      state.loading = false;
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

export const { setBlog, setAbout, setPostSummary, setBlogLoading } = blogSlice.actions;

export default blogSlice.reducer;
