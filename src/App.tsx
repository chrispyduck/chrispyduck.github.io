import { createTheme, Palette, ThemeOptions, ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { HashRouter } from "react-router-dom";
import { SiteMapRoutes as Routes } from "./SiteMap";
import "./App.scss";

const palette: Partial<Palette> = {
  mode: "light",
  primary: {
    light: "#5FC9BD",
    main: "#0F9B8E",
    dark: "#0A6E64",
    contrastText: "#FFFFFF",
  },
  secondary: {
    light: "#FFD9A0",
    main: "#F5A524",
    dark: "#C9820C",
    contrastText: "#1A1A1A",
  },
  text: {
    primary: "#1C2321",
    secondary: "#5B6664",
    disabled: "rgba(28, 35, 33, 0.38)",
  },
  background: {
    default: "#FAFAF8",
    paper: "#FFFFFF",
  },
  divider: "rgba(28, 35, 33, 0.08)",
};

const themeOptions: ThemeOptions = {
  palette,
  shape: {
    borderRadius: 14,
  },
};

themeOptions.typography = {
  fontFamily: "Inter, -apple-system, BlinkMacSystemFont, sans-serif",
  h1: {
    fontFamily: "Poppins",
    fontSize: "clamp(2rem, 4vw, 2.75rem)",
    fontWeight: 700,
    letterSpacing: "-0.01em",
    color: palette.text?.primary,
  },
  h2: {
    fontFamily: "Poppins",
    fontSize: "1.6rem",
    fontWeight: 600,
    color: palette.primary?.dark,
    margin: "0 0 0.5em 0",
  },
  h3: {
    fontFamily: "Poppins",
    fontSize: "1.2rem",
    fontWeight: 600,
    color: palette.primary?.dark,
    margin: "0 0 0.4em 0",
  },
  h4: {
    fontFamily: "Poppins",
    fontWeight: 600,
    color: palette.primary?.dark,
  },
  h5: {
    fontFamily: "Poppins",
    fontWeight: 600,
    color: palette.primary?.dark,
  },
  h6: {
    fontFamily: "Poppins",
    fontWeight: 600,
    color: palette.primary?.dark,
  },
  subtitle1: {
    fontSize: "1.05rem",
    fontWeight: 500,
  },
  subtitle2: {
    fontWeight: 500,
  },
  caption: {
    fontWeight: 400,
  },
  body1: {
    fontWeight: 400,
    fontSize: "1.05rem",
    lineHeight: 1.7,
    margin: "0.25em 0 1em 0",
    "&.MuiListItemText-primary": {
      margin: 0,
    },
  },
  body2: {
    fontWeight: 400,
    lineHeight: 1.6,
  },
  button: {
    fontFamily: "Inter",
    fontSize: "1rem",
    fontWeight: 500,
    textTransform: "none",
    letterSpacing: "0",
  },
};

themeOptions.components = {
  MuiButton: {
    defaultProps: {
      disableElevation: true,
    },
    styleOverrides: {
      root: {
        borderRadius: 10,
        padding: "8px 20px",
        transition: "transform 150ms ease, box-shadow 150ms ease",
      },
      contained: {
        boxShadow: "0 4px 14px rgba(15, 155, 142, 0.25)",
        "&:hover": {
          transform: "translateY(-1px)",
          boxShadow: "0 6px 18px rgba(15, 155, 142, 0.32)",
        },
      },
      outlined: {
        "&:hover": {
          transform: "translateY(-1px)",
        },
      },
      text: {
        "&:hover": {
          backgroundColor: "rgba(15, 155, 142, 0.08)",
        },
      },
    },
  },
  MuiPaper: {
    styleOverrides: {
      root: {
        backgroundImage: "none",
      },
      rounded: {
        borderRadius: 16,
      },
      elevation1: {
        boxShadow: "0 2px 12px rgba(28, 35, 33, 0.06)",
      },
      elevation4: {
        boxShadow: "0 8px 30px rgba(28, 35, 33, 0.08)",
      },
    },
  },
  MuiChip: {
    styleOverrides: {
      root: {
        fontWeight: 500,
        borderRadius: 999,
      },
    },
  },
  MuiOutlinedInput: {
    styleOverrides: {
      root: {
        borderRadius: 10,
      },
    },
  },
  MuiLink: {
    styleOverrides: {
      root: {
        color: palette.primary?.dark,
        textDecorationColor: "rgba(15, 155, 142, 0.4)",
      },
    },
  },
};

const theme = createTheme(themeOptions);

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <HashRouter>
        <Routes />
      </HashRouter>
    </ThemeProvider>
  );
}
