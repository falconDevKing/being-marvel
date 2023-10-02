/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { createAsyncThunk, createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { Auth } from "aws-amplify";
// import { ErrorHandler } from "helper/Handlers";
import { updateAuthLoading } from "../services/auth";

interface AuthState {
  isAuthenticated: boolean;
  authUser: any;
  authData: any;
  userData: any;
  loading: boolean;
  isInitialized: boolean;
  error: any;
}

const initialState: AuthState = {
  isAuthenticated: false,
  isInitialized: false,
  loading: false,
  userData: {},
  authUser: {},
  authData: {},
  error: {},
};

export const getLoggedInUser = createAsyncThunk("auth/getLoggedInUser", async () => {
  try {
    updateAuthLoading(true);
    const currentUser = await Auth.currentAuthenticatedUser();
    return currentUser;
  } catch (err: any) {
    // ErrorHandler({ message: err });
    console.log("error", err);
    throw err;
  }
});

// Then, handle actions in your reducers:
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthLoading: (
      state,
      action: PayloadAction<{
        data: boolean;
      }>,
    ) => {
      state.loading = action.payload.data;
    },
    setIsAuthenticated: (
      state,
      action: PayloadAction<{
        data: boolean;
      }>,
    ) => {
      state.isAuthenticated = action.payload.data;
    },
    setAuthUser: (
      state,
      action: PayloadAction<{
        data: any;
      }>,
    ) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.authUser = action.payload.data;
      state.isInitialized = true;
    },
    setAuthData: (
      state,
      action: PayloadAction<{
        data: any;
      }>,
    ) => {
      state.isInitialized = true;
      state.loading = false;
      state.isAuthenticated = true;
      state.authData = action.payload.data;
    },
    setUserData: (
      state,
      action: PayloadAction<{
        data: any;
      }>,
    ) => {
      state.userData = action.payload.data;
    },
    setUnAuthData: (
      state,
      action: PayloadAction<{
        data: any;
      }>,
    ) => {
      state.isInitialized = true;
      state.loading = false;
      state.isAuthenticated = false;
      state.authData = {};
      state.error = action.payload.data;
    },
    setLogOut: (state) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.authUser = {};
      state.authData = {};
      state.userData = {};
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getLoggedInUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getLoggedInUser.fulfilled, (state, action) => {
      state.isInitialized = true;
      state.loading = false;
      state.isAuthenticated = true;
      state.authData = action.payload;
    });

    builder.addCase(getLoggedInUser.rejected, (state, action) => {
      state.isInitialized = true;
      state.loading = false;
      state.isAuthenticated = false;
      state.authData = {};
      state.error = action.error?.code || action.error;
    });
  },
});

export const { setAuthLoading, setIsAuthenticated, setAuthUser, setAuthData, setUnAuthData, setUserData, setLogOut } = authSlice.actions;

export default authSlice.reducer;
