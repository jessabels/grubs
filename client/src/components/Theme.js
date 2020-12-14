import React from "react";
import { ThemeProvider, createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#795",
    },
    secondary: {
      main: "#dcb14e",
    },
  },
  typography: {
    fontFamily: "Cormorant Garamond",
  },
});

const Theme = (props) => {
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
};

export default Theme;
