import { Email, GitHub, LinkedIn } from "@mui/icons-material";
import { Theme, Button, Box } from "@mui/material";
import { makeStyles, createStyles } from "@mui/styles";
import { useNavigate } from "react-router-dom";

const useLocalStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      margin: theme.spacing(2),
      display: "flex",
      justifyContent: "center",
      flexDirection: "row",
    },
    links: {
    }
  })
);

export default function Footer() {
  const classes = useLocalStyles();
  const navigate = useNavigate();

  return (
    <Box className={classes.root}>
    <Box className={classes.links}>
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
