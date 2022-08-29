import { default as WorkHistoryTimeline } from "./WorkHistoryTimeline";
import { WorkItemDetailFromRoute } from "./WorkItemDetail";
import { Route, Routes } from "react-router-dom";

export default function WorkHistory() {
  return (
    <Routes>
      <Route index element={<WorkHistoryTimeline />}/>
      <Route path="/:id" element={<WorkItemDetailFromRoute/>}/>
    </Routes>
  );
}
