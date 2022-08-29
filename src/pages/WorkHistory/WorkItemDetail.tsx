import { Alert, Box, Typography, useTheme } from "@mui/material";
import ReactMarkdown from "react-markdown";
import { useParams } from "react-router-dom";
import {
  usePageContainerContext,
} from "../../PageContainer";
import { history, WorkHistoryItem } from "./data";
import { format } from "date-fns";
import Grid from "@mui/material/Unstable_Grid2";

export interface WorkItemDetailProps {
  item: WorkHistoryItem;
}

export function WorkItemDetailFromRoute() {
  const { id } = useParams();
  if (!id) {
    return <Alert severity="error">No given ID parameter</Alert>;
  }
  const item = history.find((historyItem) => historyItem.id === id);
  if (!item) {
    return (
      <Alert severity="error">No matching work history item with ID {id}</Alert>
    );
  }
  return <WorkItemDetail item={item} />;
}

export default function WorkItemDetail({ item }: WorkItemDetailProps) {
  const pageContainer = usePageContainerContext();
  pageContainer.configureDetailView("Work History");
  const theme = useTheme();

  return (
    <Box>
      <Typography id="modal-title" variant="h2" component="h2">
        {item.position} at {item.company.displayName}
      </Typography>
      <Typography variant="subtitle1">
        {`${format(item.startDate, "MMMM yyyy")} to ${
          item.endDate === null ? "Present" : format(item.endDate, "MMMM yyyy")
        }`}
      </Typography>
      <Grid container>
        <Grid sm={6} sx={{ paddingRight: theme.spacing(2) }}>
          <Typography variant="h3">Highlights</Typography>
          <ul>
            {item.highlights.map((highlight, index) => (
              <li key={index}>
                <ReactMarkdown>{highlight}</ReactMarkdown>
              </li>
            ))}
          </ul>
        </Grid>
        <Grid sm={6} sx={{ paddingLeft: theme.spacing(2) }}>
          <Typography variant="h3">Skills</Typography>
          <Typography>{item.skills.join(", ")}</Typography>
        </Grid>
        <Typography id="modal-description" sx={{ mt: 2 }}></Typography>
      </Grid>
    </Box>
  );
}
