import { Person, Email, Phone } from "@mui/icons-material";
import {
  TextField,
  InputAdornment,
  Button,
  useTheme,
  Alert,
} from "@mui/material";
import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { useFormik } from "formik";

const formActionUrl = "https://smartforms.dev/submit/62f991867a195017922f1f5a";

export default function ContactForm() {
  const theme = useTheme();
  const recaptchaRef = React.createRef<ReCAPTCHA>();
  const [isSent, setIsSent] = useState(false);
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
    onSubmit: async (values, { setSubmitting }) => {
      const recaptchaCode = await recaptchaRef.current!.executeAsync();
      const toSubmit = new FormData();
      Object.entries(values).forEach(([key, value]) =>
        toSubmit.set(key, value)
      );
      toSubmit.set("g-recaptcha-response", recaptchaCode!);
      const result = await fetch(formActionUrl, {
        method: "POST",
        body: toSubmit,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/form-data",
        },
      });
      console.log(result);
      setIsSent(true);
      setSubmitting(false);
    },
  });
  return (
    <>
      <form
        action={formActionUrl}
        onSubmit={formik.handleSubmit}
      >
        <TextField
          fullWidth
          required
          label="Name"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
          disabled={formik.isSubmitting || isSent}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Person />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          fullWidth
          required
          label="Email Address"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
          disabled={formik.isSubmitting || isSent}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Email />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          fullWidth
          label="Phone Number"
          name="phone"
          value={formik.values.phone}
          onChange={formik.handleChange}
          error={formik.touched.phone && Boolean(formik.errors.phone)}
          helperText={formik.touched.phone && formik.errors.phone}
          disabled={formik.isSubmitting || isSent}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Phone />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          fullWidth
          required
          label="Message"
          name="message"
          multiline
          rows={5}
          value={formik.values.message}
          onChange={formik.handleChange}
          error={formik.touched.message && Boolean(formik.errors.message)}
          helperText={formik.touched.message && formik.errors.message}
          disabled={formik.isSubmitting || isSent}
        />
        {isSent ? (
          <Alert severity="success">
            Thank you for your message. I'll be in touch soon.
          </Alert>
        ) : (
          <Button
            variant="contained"
            disableElevation
            disabled={formik.isSubmitting || !formik.isValid || isSent}
            type="submit"
            sx={{ m: theme.spacing(1, 0, 0) }}
          >
            Send
          </Button>
        )}
      </form>
      <ReCAPTCHA
        sitekey="6Lf-H7khAAAAANfE2PRobkTnei0op3Pec9Hvn7CG"
        ref={recaptchaRef}
        size="invisible"
      />
    </>
  );
}
