import * as React from "react";
import type { AppProps } from "next/app";
import { CacheProvider, EmotionCache } from "@emotion/react";
import { ThemeProvider, CssBaseline, createTheme } from "@mui/material";
import type { NextComponentType, NextPageContext } from "next";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import store from "../redux/store";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import createEmotionCache from "../utils/createEmotionCache";
import lightThemeOptions from "../styles/theme/lightThemeOptions";
import "../styles/globals.css";
import { Amplify } from "aws-amplify";
import { Hub } from "aws-amplify/utils";
import amplifyConfig from "../amplifyconfiguration.json";
import AuthProvider from "../components/Auth/AuthProvider";
import { getLoggedInUser } from "../redux/authSlice";
import { saveAuthUser, setLogout } from "../services/auth";
import { setNavToCommentData } from "../services/post";
import { useRouter } from "next/router";
import { IPostCommentRedirect } from "../interfaces/post";

const authEnv = +(process.env.NEXT_PUBLIC_AUTH_ENV as string);

// Assuming you have two redirect URIs, and the first is for localhost and second is for production
const [localRedirectSignIn, devRedirectSignIn, prodRedirectSignIn, altEnvRedirectSignIn] = amplifyConfig.oauth.redirectSignIn.split(",");
const [localRedirectSignOut, devRedirectSignOut, prodRedirectSignOut, altEnvRedirectSignOut] = amplifyConfig.oauth.redirectSignOut.split(",");

const updatedAmplifyConfig = {
  ...amplifyConfig,
  oauth: {
    ...amplifyConfig.oauth,
    redirectSignIn: authEnv === 0 ? localRedirectSignIn : authEnv === 1 ? devRedirectSignIn : authEnv === 2 ? prodRedirectSignIn : altEnvRedirectSignIn,
    redirectSignOut: authEnv === 0 ? localRedirectSignOut : authEnv === 1 ? devRedirectSignOut : authEnv === 2 ? prodRedirectSignOut : altEnvRedirectSignOut,
  },
};

Amplify.configure({ ...updatedAmplifyConfig }, { ssr: true });

type NextAppProps<P = any> = {
  pageProps: P;
} & Omit<AppProps<P>, "pageProps">;

interface MyAppProps extends NextAppProps {
  emotionCache?: EmotionCache;
}

const clientSideEmotionCache = createEmotionCache();

const lightTheme = createTheme(lightThemeOptions);

type CustomAppProps = MyAppProps & {
  Component: NextComponentType<NextPageContext, any, {}> & { auth?: boolean };
};

const MyApp: React.FunctionComponent<CustomAppProps> = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const router = useRouter();

  const navigateToBlogPost = (postId: string) => {
    router.push("/blog/" + postId);
  };

  Hub?.listen("auth", ({ payload }) => {
    console.log("Hub listening ");
    const { event, data } = payload as any;

    console.log("hub event", event);
    console.log("hub data", data);
    console.log("hub payload", payload);
    switch (event) {
      case "signInWithRedirect":
        console.log({ data });
        saveAuthUser(data);
        break;
      case "signInWithRedirect_failure":
        console.log("payload", payload);
        console.log("data", data);
        break;
      case "signedIn":
        console.log({ data });
        saveAuthUser(data);
        break;
      case "customOAuthState":
        console.log("customState", event, data);
        const navData = JSON.parse(data) as IPostCommentRedirect;
        setNavToCommentData(navData);
        console.log("hub", "comment set, about to nav");
        navigateToBlogPost(navData?.postId);
      case "signedOut":
        setLogout();
        break;
    }
  });

  // React.useEffect(() => {
  //   console.log("app loaded");

  //   // dispatch(getLoggedInUser());

  //   // return unsubscribe();
  // }, []);

  return (
    <CacheProvider value={emotionCache}>
      <Provider store={store}>
        <AuthProvider>
          <ThemeProvider theme={lightTheme}>
            <Toaster />
            <CssBaseline />
            <Component {...pageProps} />
          </ThemeProvider>
        </AuthProvider>
      </Provider>
    </CacheProvider>
  );
};

export default MyApp;
