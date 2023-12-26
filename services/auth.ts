import { getLoggedInUser, setAuthData, setAuthLoading, setAuthUser, setLogOut, setUnAuthData, setUserData, setUserDetails } from "../redux/authSlice";
import store from "../redux/store";
import { ErrorHandler } from "../utils/handlers";
import { getUserByEmail } from "../graphql/queries";
import { generateClient } from "aws-amplify/api";
import { signOut, getCurrentUser, fetchUserAttributes } from "aws-amplify/auth";
import { User } from "../graphql/API";

const client = generateClient();

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
    const currentUser = await getCurrentUser();

    console.log({ currentUser });
    store.dispatch(setAuthData({ data: currentUser }));

    const userAttributes = await fetchUserAttributes();
    console.log({ userAttributes });
    store.dispatch(setUserData({ data: userAttributes }));
    await getUserDetails(userAttributes?.email);
    return currentUser;
  } catch (err: any) {
    console.log({ err });
    store.dispatch(setUnAuthData({ data: err }));
  }
};

export const logout = async () => {
  console.log("Log out called");
  await signOut({ global: true });
};

export const setLogout = () => {
  console.log("set Log out called");
  store.dispatch(setLogOut());
};

export const getUserDetails = async (userEmail?: string) => {
  try {
    if (userEmail) {
      const userData = await client.graphql({
        query: getUserByEmail,
        variables: { email: userEmail },
      });

      const user = userData?.data?.getUserByEmail?.items[0] as User;
      store.dispatch(setUserDetails({ data: user }));
    }
  } catch (error: any) {
    console.log("Unable to get user details", error);
    ErrorHandler({ message: error?.message || "Unable to get user details" });
  }
};
