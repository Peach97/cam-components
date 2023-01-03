import { createTheme } from "@mui/material";
import { ThemeProvider } from "@mui/system";

const customLight = (mode) => ({
  palette: {
    mode,
    primary: {
      ...(mode === "light" && {
        main: "#121212",
        secondary: "#8A00FF",
        tertiary: "#088F8F",
        transparent: "#f4faff80",
        divider: "#FFFFFF",
        text: {
          primary: "#ffffff",
          secondary: "#3C434A",
          hint: "#219DFD",
        },
      }),
    },
    background: {
      default: "#16161d",
    },
  },
});

export default function Toggler({ children, toggle }) {
  const theme = createTheme(customLight("light"));

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
