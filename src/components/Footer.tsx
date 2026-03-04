import { Email, GitHub, LinkedIn } from "@mui/icons-material";
import { Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();

  return (
    <Box sx={{ 
      m: 2, 
      display: "flex", 
      justifyContent: "center", 
      flexDirection: "row" 
    }}>
      <Box>
      <Button
        onClick={() =>
          window.location.replace("https://github.com/chrispyduck")
        }
      >
        <GitHub />
      </Button>
      <Button
        onClick={() =>
          window.location.replace("https://linkedin.com/in/chrispyduck")
        }
      >
        <LinkedIn />
      </Button>
      <Button onClick={() => navigate("/contact")}>
        <Email />
      </Button>
    </Box>
    </Box>
  );
}
