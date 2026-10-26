import About from "./pages/About";
import ProfessionalSummary from "./pages/ProfessionalSummary";
import WorkHistory from "./pages/WorkHistory";
import { Route, Routes } from "react-router-dom";
import PageContainer from "./PageContainer";
import Contact from "./pages/Contact/Contact";
import PersonOutlineRoundedIcon from "@mui/icons-material/PersonOutlineRounded";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import HistoryEduOutlinedIcon from "@mui/icons-material/HistoryEduOutlined";
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";
import { SvgIconComponent } from "@mui/icons-material";

export interface PageInfo {
  title: string;
  label: string;
  route: string;
  icon: SvgIconComponent;
}

export const pages: Array<PageInfo> = [
  {
    title: "About",
    label: "About",
    route: "/",
    icon: PersonOutlineRoundedIcon,
  },
  {
    title: "Summary",
    label: "Summary",
    route: "/summary",
    icon: ArticleOutlinedIcon,
  },
  {
    title: "History",
    label: "History",
    route: "/history",
    icon: HistoryEduOutlinedIcon,
  },
  {
    label: "Contact",
    title: "Contact",
    route: "/contact",
    icon: MailOutlineRoundedIcon,
  },
];


export function SiteMapRoutes() {
  return (
    <Routes>
      <Route path="/" element={<PageContainer/>}>
        <Route index element={<About/>}/>
        <Route path="summary" element={<ProfessionalSummary/>}/>
        <Route path="history/*" element={<WorkHistory/>}/>
        <Route path="contact" element={<Contact/>}/>
      </Route>
    </Routes>
  );
}
