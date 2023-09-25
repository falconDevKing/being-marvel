import { createTheme } from "@mui/material/styles";

const lightTheme = createTheme({
  palette: {
    primary: {
      main: "#101988",
      // light: "#FBA34B",
      // contrastText: "#3D1E01",
    },
    neutral: {
      main: "#F2F4F6",
      light: "#FEFEFE",
      // contrastText: "#fff",
    },
    secondary: {
      main: "#44CDE0",
      // contrastText: "#8083A3",
    },
    blue: {
      main: "#44CDE0",
      // contrastText: "#3E7EFF",
    },
    error: {
      main: "#E22828",
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
      main: "#509F58",
      // light: "#F5FBF7",
      // dark: "#42975E",
      // contrastText: "#42975E",
    },
  },

  typography: {
    allVariants: {
      fontFamily: "Catamaran, sans-serif",
      textTransform: "none",
    },
    button: {
      textTransform: "none",
    },
  },
});

declare module "@mui/material/styles" {
  interface Palette {
    neutral: Palette["primary"];
    blue: Palette["primary"];
  }
  interface PaletteOptions {
    neutral: PaletteOptions["primary"];
    blue: PaletteOptions["primary"];
  }
}

export default lightTheme;
