import { Email, GitHub, LinkedIn } from "@mui/icons-material";
import { Box, IconButton, Typography, styled } from "@mui/material";
import { useNavigate } from "react-router-dom";

const SocialButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.text.secondary,
  transition: "transform 150ms ease, color 150ms ease",
  "&:hover": {
    color: theme.palette.primary.main,
    transform: "translateY(-2px)",
    backgroundColor: "rgba(15, 155, 142, 0.08)",
  },
}));

export default function Footer() {
  const navigate = useNavigate();
  const year = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        borderTop: "1px solid",
        borderColor: "divider",
        py: 3,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 1,
      }}
    >
      <Box sx={{ display: "flex", gap: 1 }}>
        <SocialButton
          aria-label="GitHub"
          onClick={() => window.location.replace("https://github.com/chrispyduck")}
        >
          <GitHub />
        </SocialButton>
        <SocialButton
          aria-label="LinkedIn"
          onClick={() => window.location.replace("https://linkedin.com/in/chrispyduck")}
        >
          <LinkedIn />
        </SocialButton>
        <SocialButton aria-label="Contact" onClick={() => navigate("/contact")}>
          <Email />
        </SocialButton>
      </Box>
      <Typography variant="caption" color="text.secondary">
        © {year} Chris Carlson · built with React, MUI, and a little whimsy
      </Typography>
    </Box>
  );
}
