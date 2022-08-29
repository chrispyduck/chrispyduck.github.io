import Box from "@mui/material/Box";
import {
  useNavigate,
  Link,
  Outlet,
  useOutletContext,
} from "react-router-dom";
import { pages } from "./SiteMap";
import {
  AppBar as MuiAppBar,
  IconButton,
  Toolbar,
  Typography,
  styled,
  useTheme,
  Drawer,
  List,
  Divider,
  ListItem,
  ListItemProps,
  ListItemText,
  ListItemButton,
  Button,
  Paper,
} from "@mui/material";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { ArrowBack } from "@mui/icons-material";
import Footer from "./components/Footer";

const drawerWidth = 240;

interface NavListItemProps extends ListItemProps {
  active?: boolean;
}

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{
  open?: boolean;
}>(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(2),
  },
  [theme.breakpoints.down("xs")]: {
    padding: theme.spacing(1),
  },
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

const TopLevelNavListItem = styled(ListItem, {
  shouldForwardProp: (prop) => prop !== "active",
})<NavListItemProps>(({ theme, active }) => ({
  "& a": {
    textDecoration: "none",
    color: theme.palette.text.primary,
  },
  transition: "ease",
}));

interface PageContainerProps {
  window?: () => Window;
}

export interface PageContainerOutletContext {
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  setMode: React.Dispatch<React.SetStateAction<PageContainerMode>>;

  configurePage: React.Dispatch<string>;
  configureDetailView: React.Dispatch<string>;
}

export function usePageContainerContext(): PageContainerOutletContext {
  return useOutletContext<PageContainerOutletContext>();
}

export enum PageContainerMode {
  PAGE = 1,
  DETAIL = 2,
}

export default function PageContainer({ window }: PageContainerProps) {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("Chris Carlson");
  const [mode, setMode] = useState(PageContainerMode.PAGE);
  const theme = useTheme();
  const navigate = useNavigate();
  const outletContext: PageContainerOutletContext = {
    setTitle,
    setMode,
    configurePage: (title) => {
      setTimeout(() => {
        setTitle(title);
        setMode(PageContainerMode.PAGE);
      }, 0);
    },
    configureDetailView: (title) => {
      setTimeout(() => {
        setTitle(title);
        setMode(PageContainerMode.DETAIL);
      }, 0);
    },
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const toggleDrawer = () => {
    setOpen(!open);
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <Paper
        sx={{
          flexGrow: 0,
          bgcolor: "background.paper",
          display: "flex",
          maxWidth: "1200px",
          flexDirection: "column",
          minHeight: `calc(100vh - ${theme.spacing(2)} - 3em)`,
        }}
        elevation={4}
      >
        <MuiAppBar
          component="div"
          position="relative"
          color={mode === PageContainerMode.PAGE ? "primary" : "secondary"}
          elevation={0}
        >
          <Toolbar>
            {mode === PageContainerMode.PAGE && (
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={toggleDrawer}
                edge="start"
                sx={{
                  mr: 2,
                  [theme.breakpoints.down("sm")]: {
                    mr: 0,
                  },
                  display: { sm: "none" },
                }}
              >
                <MenuIcon />
              </IconButton>
            )}
            {mode === PageContainerMode.DETAIL && (
              <IconButton
                color="inherit"
                aria-label="back"
                onClick={() => navigate(-1)}
                edge="start"
                sx={{
                  mr: 2,
                }}
              >
                <ArrowBack />
              </IconButton>
            )}
            <Typography variant="h1" noWrap sx={{ flexGrow: 1 }}>
              {title}
            </Typography>
            <Box
              sx={{
                display: {
                  xs: "none",
                  sm: mode === PageContainerMode.PAGE ? "block" : "none",
                },
              }}
            >
              {pages.map((page, index) => (
                <Button
                  key={index}
                  sx={{ color: "#fff" }}
                  onClick={() => navigate(page.route)}
                >
                  {page.label}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </MuiAppBar>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
            },
            display: { xs: "block", sm: "none" },
          }}
          container={container}
          variant="temporary"
          anchor="left"
          open={open}
          onClose={toggleDrawer}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          <DrawerHeader>
            <Typography style={{ flexGrow: 1 }}>Chris Carlson</Typography>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "ltr" ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <List>
            {pages.map((page, index) => (
              <TopLevelNavListItem
                key={index}
                disablePadding
                onClick={() => {
                  handleDrawerClose();
                  navigate(page.route);
                }}
              >
                <ListItemButton>
                  <Link to={page.route}>
                    <ListItemText primary={page.label} />
                  </Link>
                </ListItemButton>
              </TopLevelNavListItem>
            ))}
          </List>
        </Drawer>
        <Main>
          <Outlet context={outletContext} />
        </Main>
      </Paper>
      <Footer />
    </>
  );
}
