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
import { styled, useTheme } from "@mui/material";
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
  ...(kind === "item" && {
    cursor: "pointer",
    "&:hover": {
      backgroundColor: theme.palette.grey[100],
      '& .MuiTimelineDot-filled.MuiTimelineDot-filledGrey': {
        backgroundColor: theme.palette.primary.main,
      }
    }
  }),

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
              <TimelineDot />
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
  );
}
