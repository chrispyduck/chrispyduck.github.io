import {
  Box,
} from "@mui/material";
import { usePageContainerContext } from "../../PageContainer";
import ContactForm from "./ContactForm";

export default function Contact() {
  const pageContainer = usePageContainerContext();
  pageContainer.configurePage("Contact");

  return (
    <Box sx={{ margin: "auto", maxWidth: "600px" }}>
      <ContactForm />
    </Box>
  );
}
