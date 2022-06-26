import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  spacing: 1,
  breakpoints: {
    values: {
      xs: 0,
      sm: 750,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  palette: {
    mode: "light",
    primary: { main: "#179C64", light: "#265B5C", contrastText: "#5C5C5C" },
    secondary: { main: "#11206B", light: "#3555F7", dark: "#031222" },
  },
  typography: {
    fontFamily: [
      '"PT Mono", monospace',
      "'Rubik', sans-serif",
      "Roboto",
      "NueHass",
      "Arial",
      "-apple-system",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    h1: {
      fontFamily: "rubik",
      fontSize: "8rem",
      fontWeight: "bold",

      "@media (max-width: 750px)": {
        fontSize: "4rem",
      },
    },
    h2: {
      fontFamily: "rubik",
      fontSize: "4rem",
      fontWeight: "normal",
      "@media (max-width: 750px)": {
        fontSize: "4rem",
      },
    },

    h3: {
      fontFamily: "NueHass",
      fontSize: "2.4rem",
      fontWeight: 300,
      letterSpacing: "6%",
      "@media (max-width: 750px)": {
        fontSize: "1.8rem",
      },
    },
    h4: { fontFamily: "NueHass", fontSize: "3.4rem", fontWeight: "bold" },
    h5: {
      fontFamily: "rubik",
      fontSize: "3.2rem",
      fontWeight: "normal",
    },

    subtitle1: {
      fontFamily: "NueHass",
      fontSize: "1.8rem",
      fontWeight: 300,
    },
    body1: {
      fontFamily: "NueHass",
      fontSize: "1.4rem",
      color: "#FFF",
    },
    button: {
      fontFamily: "NueHass",
      fontSize: "1.2rem",
      fontWeight: 600,
      padding: "1rem",
    },
  },
});
theme.spacing(1);
export default theme;
