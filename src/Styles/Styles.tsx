import { createTheme } from "@mui/material";
import type {} from "@mui/lab/themeAugmentation";

export const Colors = {
  primary: "#4C4C4C",
  secondary: "rgba(255, 255, 255)",
  grey: "#7C8584",
  border: "#E0E1E9",
  categoryOnHoverColor: "rgb(189, 192, 194)",
};

const theme = createTheme({
  palette: {
    primary: {
      main: Colors.primary,
    },
    secondary: {
      main: Colors.secondary,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        contained: {
          background: Colors.primary,
        },
        root: {},
      },
    },
  },
});

export default theme;
