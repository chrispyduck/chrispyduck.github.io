import { Box, Typography } from "@mui/material";
import { usePageContainerContext } from "../../PageContainer";
import ContactForm from "./ContactForm";

export default function Contact() {
  const pageContainer = usePageContainerContext();
  pageContainer.configurePage("Contact");

  return (
    <Box sx={{ margin: "auto", maxWidth: "560px" }}>
      <Typography variant="h1" sx={{ mb: 1 }}>
        Let's talk
      </Typography>
      <Typography color="text.secondary" sx={{ mb: 3 }}>
        Have a question, an opportunity, or just want to say hi? Drop me a
        line below.
      </Typography>
      <ContactForm />
    </Box>
  );
}
