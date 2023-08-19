import * as React from 'react'
import type { AppProps } from 'next/app'
import { CacheProvider, EmotionCache } from '@emotion/react'
import { ThemeProvider, CssBaseline, createTheme } from '@mui/material'
import { SessionProvider } from 'next-auth/react'
import { Session } from 'next-auth'
import type { NextComponentType, NextPageContext } from 'next'

import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

import createEmotionCache from '../utils/createEmotionCache'
import lightThemeOptions from '../styles/theme/lightThemeOptions'
import '../styles/globals.css'
import 'react-quill/dist/quill.snow.css'

type NextAppProps<P = any> = {
  pageProps: P
} & Omit<AppProps<P>, 'pageProps'>

interface MyAppProps extends NextAppProps {
  emotionCache?: EmotionCache
}

const clientSideEmotionCache = createEmotionCache()

const lightTheme = createTheme(lightThemeOptions)

type CustomAppProps = MyAppProps & {
  Component: NextComponentType<NextPageContext, any, {}> & { auth?: boolean; seller?: boolean; session: Session }
}

const MyApp: React.FunctionComponent<CustomAppProps> = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props

  return (
    <CacheProvider value={emotionCache}>
      <SessionProvider session={pageProps.session} refetchInterval={7200} refetchWhenOffline={false}>
        <ThemeProvider theme={lightTheme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </SessionProvider>
    </CacheProvider>
  )
}

export default MyApp
