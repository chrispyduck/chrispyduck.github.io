import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineItemProps,
  TimelineOppositeContent,
  TimelineSeparator,
} from "@mui/lab";
import { Box, Typography, styled, useTheme } from "@mui/material";
import { WorkHistoryItem, history, Logo } from "./data";
import WorkItemDates from "./WorkItemDates";
import WorkItemPreview from "./WorkItemPreview";
import { compareDesc } from "date-fns";
import { useNavigate } from "react-router-dom";
import { usePageContainerContext } from "../../PageContainer";
import { Image } from "mui-image";

interface StyledTimelineItemProps extends TimelineItemProps {
  kind: "logo" | "item"
}
const StyledTimelineItem = styled(TimelineItem, {
  shouldForwardProp: (prop) => prop !== "kind"
})<StyledTimelineItemProps>(({ theme, kind }) => ({
  "& .MuiTimelineContent-root .MuiButtonBase-root": {
    alignItems: "flex-start",
    textAlign: "left",
    ".MuiCardMedia-root": {
      backgroundPosition: "left",
    },
  },
  borderRadius: theme.spacing(2),
  transition: "background-color 150ms ease",
  ...(kind === "item" && {
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "rgba(15, 155, 142, 0.06)",
      "& .MuiTimelineDot-root": {
        transform: "scale(1.15)",
        boxShadow: "0 0 0 4px rgba(15, 155, 142, 0.15)",
      },
    },
  }),

  "& .MuiTimelineDot-root": {
    transition: "transform 150ms ease, box-shadow 150ms ease",
    boxShadow: "none",
  },

  "& .MuiTimelineConnector-root": {
    "&:first": {
      minHeight: 0
    },
    minHeight: theme.spacing(2),
  },
}));

interface TimelineItemsProps {
  history: Array<WorkHistoryItem>;
}
function TimelineItems({ history }: TimelineItemsProps) {
  const pageContainer = usePageContainerContext();
  pageContainer.configurePage("Work History");
  const navigate = useNavigate();
  var lastLogo: Logo | undefined;
  return (
    <>
      {history.map((item, index) => {
        const renderedLogo = (
          <StyledTimelineItem key={item.company.displayName} kind="logo">
            <TimelineOppositeContent />
            <TimelineSeparator>
              <TimelineConnector />
              <Image
                src={`/images/brands/${item.company.logo.imageFile}`}
                alt={item.company.fullName}
                width={300}
                height={100}
                fit="contain"
                easing="linear"
                key={item.company.displayName}
              />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent />
          </StyledTimelineItem>
        );
        const shouldRenderLogo = lastLogo !== item.company.logo;
        lastLogo = item.company.logo;

        const renderedTimelineItem = (
          <StyledTimelineItem key={index} onClick={() => navigate(item.id)} kind="item">
            <TimelineOppositeContent
              sx={{ m: "auto 0" }}
              align="right"
              variant="body2"
              color="text.secondary"
            >
              <WorkItemDates item={item} />
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot color="primary" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent
              sx={{
                py: "12px",
                px: 2,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <WorkItemPreview item={item} suppressCompanyLogo={true} />
            </TimelineContent>
          </StyledTimelineItem>
        );

        return [shouldRenderLogo && renderedLogo, renderedTimelineItem];
      })}
    </>
  );
}

export default function WorkHistoryTimeline() {
  const theme = useTheme();
  return (
    <Box>
      <Typography variant="h1" sx={{ mb: 1 }}>
        Work History
      </Typography>
      <Typography color="text.secondary" sx={{ mb: 2 }}>
        A timeline of where I've been and what I built along the way.
      </Typography>
      <Timeline
        position="right"
        sx={{
          [theme.breakpoints.down("sm")]: {
            margin: "0 -1em",
            padding: 0,
          },
        }}
      >
        <TimelineItems
          history={history.sort((a, b) => compareDesc(a.startDate, b.startDate))}
        />
      </Timeline>
    </Box>
  );
}
