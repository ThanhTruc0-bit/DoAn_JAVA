import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: { main: "#b3002d" },
    background: { default: "#ffffff" },
    text: { primary: "#111", secondary: "#555" },
  },
  typography: {
    fontFamily: "'Playfair Display', 'Roboto', serif",
  },
});

export default theme;
