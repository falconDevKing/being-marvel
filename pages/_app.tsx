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
import "react-quill/dist/quill.snow.css";
import { Amplify, Hub, withSSRContext } from "aws-amplify";
import awsExports from "../aws-exports";
import AuthProvider from "../components/Auth/AuthProvider";
import { getLoggedInUser } from "../redux/authSlice";
import { saveAuthUser, setLogout } from "../services/auth";

const authEnv = +(process.env.NEXT_PUBLIC_AUTH_ENV as string);

// Assuming you have two redirect URIs, and the first is for localhost and second is for production
const [localRedirectSignIn, devRedirectSignIn, prodRedirectSignIn, altEnvRedirectSignIn] = awsExports.oauth.redirectSignIn.split(",");
const [localRedirectSignOut, devRedirectSignOut, prodRedirectSignOut, altEnvRedirectSignOut] = awsExports.oauth.redirectSignOut.split(",");

const updatedAwsExports = {
  ...awsExports,
  oauth: {
    ...awsExports.oauth,
    redirectSignIn: authEnv === 0 ? localRedirectSignIn : authEnv === 1 ? devRedirectSignIn : authEnv === 2 ? prodRedirectSignIn : altEnvRedirectSignIn,
    redirectSignOut: authEnv === 0 ? localRedirectSignOut : authEnv === 1 ? devRedirectSignOut : authEnv === 2 ? prodRedirectSignOut : altEnvRedirectSignOut,
  },
};

Amplify.configure({ ...updatedAwsExports, ssr: true });

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

  React.useEffect(() => {
    console.log("app loaded");
    const unsubscribe = Hub.listen("auth", ({ payload: { event, data } }) => {
      console.log("hub event", event);
      switch (event) {
        case "autoSignIn":
          saveAuthUser(data);
          break;
        case "signIn":
          saveAuthUser(data);
          break;
        case "signOut":
          setLogout();
          break;
      }
    });

    // dispatch(getLoggedInUser());

    return unsubscribe;
  }, []);

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
