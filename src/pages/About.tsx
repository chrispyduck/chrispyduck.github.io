import { Grid, Typography } from "@mui/material";
import Image from "mui-image";
import { usePageContainerContext } from "../PageContainer";

export default function About() {
  const pageContainer = usePageContainerContext();
  pageContainer.configurePage("About Chris");

  return (
    <Grid container spacing={2}>
      <Grid size={{ xs: 12, sm: 8, md: 9 }}>
        <Typography>
          Hello! I'm{" "}
          <span itemProp="name">
            <span itemProp="givenName">Chris</span>{" "}
            <span itemProp="familyName">Carlson</span>
          </span>
          , my pronouns are they/them, and I'm a{" "}
          <span itemProp="jobTitle">Software Architect</span> by day. In my
          spare time I'm a soapmaker, landscaper, pianist, tinkerer, and herder
          of tiny, whiny bio-terrorists.
        </Typography>
        <Typography>
          I have been using computers for as long as I can remember. I have fond
          memories of bedtime stories from{" "}
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
          Since then, I have done a little of everything in IT. I have worked in
          the <a href="#/history/2003-ehs-contractor">education</a>,{" "}
          <a href="#/history/2009-npr-developer">news</a>,{" "}
          <a href="#/history/2017-panth-developer">health</a>,{" "}
          <a href="#/history/2015-sytech-developer">law enforcement</a>, and{" "}
          <a href="#/history/2019-ids-architect">defense</a> industries. My past
          employers include NPR and Fairfax County Public Schools.
        </Typography>
      </Grid>
      <Grid
        size={{ xs: 12, sm: 4, md: 3 }}
        container
        justifyContent="center"
        alignItems="center"
        sx={{ textAlign: "center" }}
      >
        <Image
          alt="Chris Carlson"
          src="/images/bitmoji-round.png"
          height={250}
          width={250}
          easing="ease"
        />
      </Grid>
    </Grid>
  );
}
