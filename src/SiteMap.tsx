import About from "./pages/About";
import ProfessionalSummary from "./pages/ProfessionalSummary";
import WorkHistory from "./pages/WorkHistory";
import { Route, Routes } from "react-router-dom";
import PageContainer from "./PageContainer";
import Contact from "./pages/Contact/Contact";

export interface PageInfo {
  title: string;
  label: string;
  route: string;
}

export const pages: Array<PageInfo> = [
  {
    title: "About",
    label: "About",
    route: "/",
  },
  {
    title: "Summary",
    label: "Summary",
    route: "/summary",
  },
  {
    title: "History",
    label: "History",
    route: "/history",
  },
  {
    label: "Contact",
    title: "Contact",
    route: "/contact"
  }
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