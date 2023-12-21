/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { createAsyncThunk, createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { getUserDetails, updateAuthLoading } from "../services/auth";
import { AuthUserData, UserDetails } from "../interfaces/auth";
import { AuthUser, fetchUserAttributes, FetchUserAttributesOutput, getCurrentUser } from "aws-amplify/auth";
import { User } from "../graphql/API";

interface AuthState {
  isAuthenticated: boolean;
  authUser: any;
  authData: AuthUser;
  userData: FetchUserAttributesOutput;
  loading: boolean;
  isInitialized: boolean;
  error: any;
  userDetails: Omit<User, "__typename" | "createdAt" | "updatedAt">;
}

const initialState: AuthState = {
  isAuthenticated: false,
  isInitialized: false,
  loading: false,
  userDetails: { id: "" },
  userData: {},
  authUser: {},
  authData: {
    username: "",
    userId: "",
  },
  error: {},
};

export const getLoggedInUser = createAsyncThunk("auth/getLoggedInUser", async () => {
  try {
    updateAuthLoading(true);

    const currentUser = await getCurrentUser();

    const userAttributes = await fetchUserAttributes();

    const userEmail = userAttributes?.email || "";

    if (userEmail) {
      await getUserDetails(userEmail);
    }

    return currentUser;
  } catch (err: any) {
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
    setUserDetails: (
      state,
      action: PayloadAction<{
        data: any;
      }>,
    ) => {
      state.userDetails = action.payload.data;
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
      state.authData = {
        username: "",
        userId: "",
      };
      (state.userDetails = { id: "" }), (state.error = action.payload.data);
    },
    setLogOut: (state) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.authUser = {};
      state.authData = {
        username: "",
        userId: "",
      };
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
      state.authData = {
        username: "",
        userId: "",
      };
      state.error = action.error?.code || action.error;
    });
  },
});

export const { setAuthLoading, setIsAuthenticated, setAuthUser, setAuthData, setUserDetails, setUnAuthData, setUserData, setLogOut } = authSlice.actions;

export default authSlice.reducer;
