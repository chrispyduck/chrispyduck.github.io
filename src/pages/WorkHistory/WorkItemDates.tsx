import { WorkHistoryItem } from "./data";
import { format } from "date-fns";
import { styled, Typography } from "@mui/material";

export interface WorkItemDatesProps {
  item: WorkHistoryItem;
}

const DatesContainer = styled('div')(({ theme }) => ({
  '& .MuiTypography-root': {
    display: 'inline-block',
    margin: 0,
    padding: 0,
    [theme.breakpoints.down("sm")]: {
      display: "block",
      clear: "both",
    }
  }
}));

export default function WorkItemDates({ item }: WorkItemDatesProps) {
  return (
    <DatesContainer>
      <Typography variant="subtitle1">
        {format(item.startDate, "MMMM yyyy")}
      </Typography>
      <Typography>&nbsp;to&nbsp;</Typography>
      <Typography variant="subtitle1">
        {item.endDate === null
          ? "Present"
          : format(item.endDate, "MMMM yyyy")}
      </Typography>
    </DatesContainer>
  );
}
