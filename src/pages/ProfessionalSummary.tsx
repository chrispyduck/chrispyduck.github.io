import { Box, Stack, Typography } from "@mui/material";
import { usePageContainerContext } from "../PageContainer";
import { ReactNode } from "react";
import PersonSearchOutlinedIcon from "@mui/icons-material/PersonSearchOutlined";
import BuildCircleOutlinedIcon from "@mui/icons-material/BuildCircleOutlined";
import EmojiObjectsOutlinedIcon from "@mui/icons-material/EmojiObjectsOutlined";
import { SvgIconComponent } from "@mui/icons-material";

const Section = ({
  icon: Icon,
  title,
  children,
}: {
  icon: SvgIconComponent;
  title: string;
  children: ReactNode;
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        gap: 2,
        alignItems: "flex-start",
      }}
    >
      <Box
        sx={{
          flexShrink: 0,
          width: 44,
          height: 44,
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, rgba(15,155,142,0.14), rgba(245,165,36,0.14))",
          color: "primary.dark",
        }}
      >
        <Icon />
      </Box>
      <Box>
        <Typography variant="h2" sx={{ mt: 0 }}>
          {title}
        </Typography>
        <Typography>{children}</Typography>
      </Box>
    </Box>
  );
};

export default function ProfessionalSummary() {
  const pageContainer = usePageContainerContext();
  pageContainer.configurePage("Summary");

  return (
    <Box>
      <Typography variant="h1" sx={{ mb: 3 }}>
        Professional Summary
      </Typography>
      <Stack spacing={4}>
        <Section icon={PersonSearchOutlinedIcon} title="Background">
          I am a self-taught software engineer and designer, experienced in
          understanding customer needs and firsthand user feedback,
          translating them to processes, flows, and models, and relaying that
          information as actionable tasks for a development team.
        </Section>
        <Section icon={BuildCircleOutlinedIcon} title="Recent Work">
          Since late 2022, I've been a Site Reliability Engineer at{" "}
          <a href="https://www.peopledatalabs.com/">People Data Labs</a>,
          quietly improving platform reliability and developer experience in
          ways most people never have to think about. I designed and built
          an extensible Infrastructure-as-Software deployment framework on
          top of the Pulumi Automation API, then spent roughly a year
          building on top of it: a library of high-level, mixin-based
          components — databases, queues, service routing, event handling,
          observability — so other engineers could compose infrastructure
          instead of hand-rolling one-off resources. It was recognized
          internally as one of the best-planned projects in the company's
          history, and I recently finished migrating our entire
          infrastructure codebase onto it. Along the way, I migrated our
          CI/CD runners and container builds to{" "}
          <a href="https://depot.dev/customers/people-data-labs">
            depot.dev
          </a>
          , cutting CI costs by roughly $36k/year while meaningfully speeding
          up builds and deployments. I've also spent a lot of time on less
          visible but equally important work: making Datadog a genuine
          one-stop shop for observability, tightening our security posture
          with TLS everywhere and least-privilege IAM, and helping establish
          clearer service boundaries and contracts between teams so everyone
          can own, version, and deploy their own services with confidence.
        </Section>
        <Section icon={EmojiObjectsOutlinedIcon} title="What Drives Me">
          What keeps me engaged is the puzzle of complex systems — the places
          where infrastructure, code, and the people using them all interact
          in ways that aren't obvious until something breaks, or until you
          dig into why it's slower than it should be. I like untangling those
          interactions, improving performance and observability along the
          way, and becoming a better engineer so I can build solutions that
          cost less, ship faster, and hold up over time. I also care about
          mentoring and making room for proof of concept work and open-ended
          technical exploration, not just maintaining what already exists. Longer term, I want that work to matter beyond
          the org chart: to solve problems that genuinely improve people's
          everyday lives, and to keep taking on challenges of greater scope
          as I'm able, for my community and the world.
        </Section>
      </Stack>
    </Box>
  );
}
