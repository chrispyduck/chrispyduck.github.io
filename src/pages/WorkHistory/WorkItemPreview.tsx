import {
  ButtonBase,
  ButtonBaseProps,
  Typography,
  styled
} from "@mui/material";
import { WorkHistoryItem } from "./data";
import Image from "mui-image";

export interface WorkItemPreviewProps {
  item: WorkHistoryItem;
  suppressCompanyLogo: boolean;
}

const WorkHistoryButton = styled(ButtonBase)<ButtonBaseProps>(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  padding: "1em",
  [theme.breakpoints.down("sm")]: {
    '& h2': {
      lineHeight: 1.1,
      margin: theme.spacing(0, 0, 1, 0)
    }
  }
}));

export default function WorkItemPreview({
  item,
  suppressCompanyLogo,
}: WorkItemPreviewProps) {
  return (
    <WorkHistoryButton>
      {!suppressCompanyLogo && (
        <Image
          src={`/images/brands/${item.company.logo}`}
          alt={item.company.fullName}
          width={300}
          height={100}
          fit="contain"
          easing="ease"
        />
      )}
      <Typography variant="subtitle1" component="h2">
        {item.company.displayName}: {item.position}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {item.summary}
      </Typography>
    </WorkHistoryButton>
  );
}
