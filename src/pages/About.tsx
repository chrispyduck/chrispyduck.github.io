import { Box, Button, Stack, Typography } from "@mui/material";
import Image from "mui-image";
import { useNavigate } from "react-router-dom";
import { usePageContainerContext } from "../PageContainer";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";

export default function About() {
  const pageContainer = usePageContainerContext();
  pageContainer.configurePage("About Chris");
  const navigate = useNavigate();

  return (
    <Box>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 3, sm: 5 }}
        alignItems="center"
        sx={{ mb: { xs: 4, sm: 6 } }}
      >
        <Box
          sx={{
            position: "relative",
            flexShrink: 0,
            "&::before": {
              content: '""',
              position: "absolute",
              inset: -10,
              borderRadius: "50%",
              background:
                "linear-gradient(135deg, rgba(15,155,142,0.25), rgba(245,165,36,0.25))",
              filter: "blur(18px)",
              zIndex: 0,
            },
          }}
        >
          <Image
            alt="Chris Carlson"
            src="/images/bitmoji-round.png"
            height={180}
            width={180}
            easing="ease"
            style={{
              position: "relative",
              zIndex: 1,
              borderRadius: "50%",
              boxShadow: "0 8px 30px rgba(28, 35, 33, 0.12)",
            }}
          />
        </Box>
        <Box sx={{ textAlign: { xs: "center", sm: "left" } }}>
          <Typography
            variant="caption"
            sx={{
              color: "secondary.dark",
              bgcolor: "rgba(245, 165, 36, 0.15)",
              px: 1.5,
              py: 0.5,
              borderRadius: 999,
              fontWeight: 600,
              display: "inline-block",
              mb: 1.5,
            }}
          >
            👋 Hey there
          </Typography>
          <Typography variant="h1" sx={{ mb: 1 }}>
            I'm Chris Carlson
          </Typography>
          <Typography variant="h5" sx={{ color: "text.secondary", fontWeight: 500, mb: 2 }}>
            Software Engineer, Soapmaker, Tinkerer
          </Typography>
          <Stack
            direction="row"
            spacing={1.5}
            justifyContent={{ xs: "center", sm: "flex-start" }}
          >
            <Button
              variant="contained"
              startIcon={<ArticleOutlinedIcon />}
              onClick={() => navigate("/summary")}
            >
              Read my summary
            </Button>
            <Button
              variant="outlined"
              startIcon={<MailOutlineRoundedIcon />}
              onClick={() => navigate("/contact")}
            >
              Say hello
            </Button>
          </Stack>
        </Box>
      </Stack>

      <Stack spacing={2.5} sx={{ maxWidth: "640px" }}>
        <Typography>
          Hello! I'm{" "}
          <span itemProp="name">
            <span itemProp="givenName">Chris</span>{" "}
            <span itemProp="familyName">Carlson</span>
          </span>
          , my pronouns are they/them, and I'm a{" "}
          <span itemProp="jobTitle">Software Engineer</span> by day. In my
          spare time I'm a soapmaker, landscaper, pianist, tinkerer, and herder
          of tiny, whiny bio-terrorists.
        </Typography>
        <Typography>
          I have been using computers for as long as I can remember. I have
          fond memories of bedtime stories from{" "}
          <a
            href="https://en.wikipedia.org/wiki/Bulletin_board_system"
            target="_new"
          >
            BBS
          </a>
          ', fixing computers with pencil erasers, and power toggle switches
          larger than some space bars. DOS was a big deal.
        </Typography>
        <Typography>
          Since then, I have done a little of everything in IT. I have worked
          in the <a href="#/history/2003-ehs-contractor">education</a>,{" "}
          <a href="#/history/2009-npr-developer">news</a>,{" "}
          <a href="#/history/2017-panth-developer">health</a>,{" "}
          <a href="#/history/2015-sytech-developer">law enforcement</a>, {" "}
          <a href="#/history/2019-ids-architect">defense</a> industries. My
          past employers include NPR and Fairfax County Public Schools.
        </Typography>
      </Stack>
    </Box>
  );
}
