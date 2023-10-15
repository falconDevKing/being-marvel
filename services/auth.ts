import { getLoggedInUser, setAuthData, setAuthLoading, setAuthUser, setLogOut, setUnAuthData, setUserData, setUserDetails } from "../redux/authSlice";
import store from "../redux/store";
import { API, Auth } from "aws-amplify";
import { ErrorHandler } from "../utils/handlers";
import { getUserByEmail } from "../graphql/queries";
import { GraphQLResult } from "@aws-amplify/api-graphql";

export const updateAuthLoading = (loading: boolean) => {
  store.dispatch(setAuthLoading({ data: loading }));
};

export const saveAuthUser = async (authUser: any) => {
  store.dispatch(setAuthUser({ data: authUser }));
  store.dispatch(getLoggedInUser());
};

export const getLoggedInUserFunction = async () => {
  try {
    updateAuthLoading(true);
    const currentUser = await Auth.currentAuthenticatedUser();
    store.dispatch(setAuthData({ data: currentUser }));
    store.dispatch(setUserData({ data: currentUser.attributes }));
    await getUserDetails(currentUser?.attributes?.email);
    return currentUser;
  } catch (err: any) {
    console.log({ err });
    store.dispatch(setUnAuthData({ data: err }));
  }
};

export const logout = async () => {
  console.log("Log out called");
  await Auth.signOut({ global: true });
};

export const setLogout = () => {
  console.log("set Log out called");
  store.dispatch(setLogOut());
};

export const getUserDetails = async (userEmail: string) => {
  try {
    if (userEmail) {
      const userData = (await API.graphql({
        query: getUserByEmail,
        variables: { email: userEmail },
      })) as GraphQLResult<any>;

      const user = userData?.data?.getUserByEmail?.items[0];
      store.dispatch(setUserDetails({ data: user }));
    }
  } catch (error: any) {
    console.log("Unable to get user details", error);
    ErrorHandler({ message: error?.message || "Unable to get user details" });
  }
};
