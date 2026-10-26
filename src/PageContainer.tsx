import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import {
  useNavigate,
  useLocation,
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
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Button,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import Footer from "./components/Footer";

const drawerWidth = 260;

const HeaderBar = styled(MuiAppBar)(({ theme }) => ({
  backgroundColor: "rgba(250, 248, 246, 0.78)",
  backdropFilter: "blur(14px)",
  color: theme.palette.text.primary,
  borderBottom: `1px solid ${theme.palette.divider}`,
}));

const Wordmark = styled(Typography)(({ theme }) => ({
  fontFamily: "Poppins",
  fontWeight: 700,
  fontSize: "1.15rem",
  color: theme.palette.text.primary,
  textDecoration: "none",
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1),
  "&::before": {
    content: '""',
    display: "inline-block",
    width: 10,
    height: 10,
    borderRadius: "50%",
    background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
  },
}));

const DrawerNavItem = styled(ListItemButton)<{ active?: boolean }>(
  ({ theme, active }) => ({
    borderRadius: theme.shape.borderRadius,
    margin: theme.spacing(0.5, 1),
    color: active ? theme.palette.primary.dark : theme.palette.text.primary,
    backgroundColor: active ? "rgba(15, 155, 142, 0.1)" : "transparent",
  })
);

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
  const location = useLocation();

  useEffect(() => {
    document.title =
      title && title !== "Chris Carlson"
        ? `${title} · Chris Carlson`
        : "Chris Carlson";
  }, [title]);

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

  const isActive = (route: string) =>
    route === "/"
      ? location.pathname === "/"
      : location.pathname.startsWith(route);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <HeaderBar position="sticky" elevation={0}>
        <Toolbar sx={{ gap: 1 }}>
          <Box
            component={Link}
            to="/"
            sx={{ textDecoration: "none", flexGrow: 1 }}
          >
            <Wordmark>Chris Carlson</Wordmark>
          </Box>
          <Box sx={{ display: { xs: "none", sm: "flex" }, gap: 0.5 }}>
            {pages.map((page) => {
              const active = isActive(page.route);
              return (
                <Button
                  key={page.route}
                  component={Link}
                  to={page.route}
                  sx={{
                    borderRadius: 999,
                    padding: "6px 16px",
                    fontWeight: 500,
                    color: active ? "primary.dark" : "text.secondary",
                    backgroundColor: active
                      ? "rgba(15, 155, 142, 0.1)"
                      : "transparent",
                    boxShadow: "none",
                    "&:hover": {
                      backgroundColor: "rgba(15, 155, 142, 0.14)",
                      transform: "none",
                    },
                  }}
                >
                  {page.label}
                </Button>
              );
            })}
          </Box>
          <IconButton
            color="inherit"
            aria-label="open navigation"
            onClick={toggleDrawer}
            edge="end"
            sx={{ display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </HeaderBar>
      <Drawer
        sx={{
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            borderTopLeftRadius: 16,
            borderBottomLeftRadius: 16,
          },
          display: { xs: "block", sm: "none" },
        }}
        container={container}
        variant="temporary"
        anchor="right"
        open={open}
        onClose={toggleDrawer}
        ModalProps={{
          keepMounted: true,
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            px: 2,
            py: 1.5,
          }}
        >
          <Wordmark sx={{ fontSize: "1rem" }}>Chris Carlson</Wordmark>
          <IconButton onClick={handleDrawerClose} aria-label="close navigation">
            <CloseIcon />
          </IconButton>
        </Box>
        <Divider />
        <List>
          {pages.map((page) => {
            const Icon = page.icon;
            return (
              <ListItem key={page.route} disablePadding>
                <DrawerNavItem
                  active={isActive(page.route)}
                  onClick={() => {
                    handleDrawerClose();
                    navigate(page.route);
                  }}
                >
                  <ListItemIcon sx={{ minWidth: 36, color: "inherit" }}>
                    <Icon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary={page.label} />
                </DrawerNavItem>
              </ListItem>
            );
          })}
        </List>
      </Drawer>
      <Container
        component="main"
        maxWidth="md"
        sx={{
          flexGrow: 1,
          py: { xs: 4, sm: 6 },
          px: { xs: 2.5, sm: 3 },
        }}
      >
        {mode === PageContainerMode.DETAIL && (
          <Button
            onClick={() => navigate(-1)}
            startIcon={<ArrowBackRoundedIcon />}
            sx={{
              mb: 2,
              color: theme.palette.text.secondary,
              "&:hover": { backgroundColor: "rgba(15, 155, 142, 0.08)" },
            }}
          >
            Back
          </Button>
        )}
        <Outlet context={outletContext} />
      </Container>
      <Footer />
    </Box>
  );
}
