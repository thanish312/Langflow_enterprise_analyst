import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#181818",
      paper: "#222222",
    },
    primary: {
      main: "#1976d2",
      contrastText: "#ECECF1",
    },
    text: {
      primary: "#ECECF1",
      secondary: "#b0b0b0",
    },
    divider: "#2e2e2e",
  },
  typography: {
    fontFamily: [
      "Inter",
      "Segoe UI",
      "Arial",
      "sans-serif"
    ].join(","),
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
  },
  shape: {
    borderRadius: 16,
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
        },
      },
    },
  },
});

export default theme;