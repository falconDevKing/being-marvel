import { getLoggedInUser, setAuthData, setAuthLoading, setAuthUser, setLogOut, setUnAuthData, setUserData } from "../redux/authSlice";
import store from "../redux/store";
import { Auth } from "aws-amplify";
import { ErrorHandler } from "../utils/handlers";

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
    return currentUser;
  } catch (err: any) {
    console.log({ err });
    ErrorHandler({ message: err });
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
