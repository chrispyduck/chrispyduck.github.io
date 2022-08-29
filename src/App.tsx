import { createTheme, Palette, ThemeOptions, ThemeProvider } from "@mui/material";
import * as colors from "@mui/material/colors";
import { HashRouter } from "react-router-dom";
import { SiteMapRoutes as Routes } from "./SiteMap";
import "./App.scss";

const headingColor = colors.teal[800];

const palette: Partial<Palette> = {
  mode: "light",
  primary: {
    light: colors.teal[200],
    main: colors.teal[400],
    dark: colors.teal[600],
    contrastText: colors.grey[100],
  },
  secondary: {
    light: colors.grey[500],
    main: colors.grey[700],
    dark: colors.grey[900],
    contrastText: colors.grey[100],
  },
  text: {
    primary: colors.grey[900],
    secondary: colors.grey[700],
    disabled: colors.grey[100],
  },
  background: {
    paper: "#ffffff",
    default: colors.grey[200],
  },
};

const themeOptions: ThemeOptions = {
  palette: palette,
};


themeOptions.typography = {
  h1: {
    fontFamily: "Inter",
    fontSize: "2rem",
    fontWeight: 500,
    color: palette.primary?.contrastText,
    letterSpacing: '0'
  },
  h2: {
    fontSize: "1.6rem",
    color: colors.teal[700],
    margin: "0.5em 0 0 0",
    fontFamily: "Poppins",
    fontWeight: 400,
  },
  h3: {
    fontSize: "1.3rem",
    color: colors.teal[900],
    margin: "0.5em 0 0 0",
    fontFamily: "Poppins",
    fontWeight: 300,
    fontVariant: "all-small-caps",
  },

  h6: {
    fontWeight: 500,
    color: headingColor,
    //fontSize: "0.75rem",
  },
  h5: {
    //fontSize: "0.875rem",
    color: headingColor,
    fontWeight: 500,
  },
  h4: {
    //fontSize: "1rem",
    color: headingColor,
    fontWeight: 600,
  },
  
  
  
  subtitle1: {
    //fontSize: "0.875rem",
    fontSize: "1.1rem",
    fontWeight: 500,
    //color: themeOptions.palette?.text?.secondary,
  },
  subtitle2: {
    //fontSize: "0.75rem",
    fontWeight: 400,
    //color: themeOptions.palette?.text?.secondary,
  },
  caption: {
    //fontSize: "0.75rem",
    //color: themeOptions.palette?.text?.secondary,
    fontWeight: 400,
  },
  body1: {
    fontWeight: 400,
    fontSize: "1.1rem",
    lineHeight: "1.334em",
    margin: "0.25em 0 1em 0",
    '&.MuiListItemText-primary': {
      margin: 0
    }
  },
  body2: {
    //letterSpacing: "0em",
    fontWeight: 400,
    lineHeight: "1.5em",
    //color: themeOptions.palette?.text?.primary,
  },
  button: {
    fontSize: "1.1rem",
    textTransform: "uppercase",
    margin: "0 0.5em",
  },
};

const theme = createTheme(themeOptions);

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <HashRouter>
        <Routes/>
      </HashRouter>
    </ThemeProvider>
  );
}
