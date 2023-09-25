import { createTheme } from '@mui/material/styles'

const lightTheme = createTheme({
  palette: {
    primary: {
      main: '#101988',
      // light: "#FBA34B",
      // contrastText: "#3D1E01",
    },
    secondary: {
      main: '#44CDE0',
      // contrastText: "#8083A3",
    },
    error: {
      main: '#E22828',
      // light: "#FDF4F4",
      // dark: "#E22828",
      // contrastText: "#A73636",
    },
    // warning: {
    //   main: "#FFFAF1",
    //   light: "#FDD6AF",
    //   dark: "#E77A0C",
    //   contrastText: "#996A13",
    // },
    // info: {
    //   main: "#D6E0FF",
    //   light: "#FDF4F4",
    //   dark: "#3366FF",
    //   contrastText: "#2952CC",
    // },
    success: {
      main: '#509F58',
      // light: "#F5FBF7",
      // dark: "#42975E",
      // contrastText: "#42975E",
    },
  },

  typography: {
    allVariants: {
      fontFamily: 'Cormorant Garamond',
      textTransform: 'none',
    },
    button: {
      textTransform: 'none',
    },
  },
})


export default lightTheme
