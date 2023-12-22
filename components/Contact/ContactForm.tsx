import React, { useState } from "react";
import { Box } from "@mui/material";
import Image from "next/image";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";
import { useFormik } from "formik";
import ContactFormValidation from "../../utils/validations/ContactFormValidation";
import axios, { isAxiosError } from "axios";
import { DismissHandler, ErrorHandler, LoadingHandler, SuccessHandler } from "../../utils/handlers";
import Input from "../Input";
import TextArea from "../TextArea";
import { contactFormHandler } from "../../services/engagement";

const ContactForm = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      content: "",
    },
    validationSchema: ContactFormValidation,
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: async (values, { resetForm }) => {
      LoadingHandler({ message: "Sending in..." });

      try {
        if (loading) {
          return;
        }
        setLoading(true);

        const { email, name, content } = values;

        await contactFormHandler(name, email, content);

        resetForm();
        setLoading(false);
      } catch (error: any) {
        DismissHandler();

        ErrorHandler({ message: error?.message || "Something went wrong" });
        console.log("error in contact blogger", error?.message, error);

        setLoading(false);
      }
    },
  });

  const { values, errors, handleBlur, handleChange, handleSubmit, touched } = formik;

  return (
    <Box width={"100%"}>
      <Box
        width={{ xs: "95%", md: "85%" }}
        display={"flex"}
        mx="auto"
        px={{ xs: 1, sm: 3, md: 6 }}
        alignItems={"center"}
        pt={8}
        flexDirection={{ xs: "column", md: "row" }}
      >
        <Box width={{ xs: "100%", sm: "80%", md: "50%" }} borderRadius={"16px"} height={"100%"} px={4}>
          <Image src="/ContactPicture2.png" alt="Contact Image" layout="responsive" width={851} height={1053} style={{ borderRadius: "16px" }} />
        </Box>

        <Box width={{ xs: "100%", md: "50%" }} display={"flex"} flexDirection={"column"} justifyContent={"center"} px={4} py={{ xs: 4, md: 0 }}>
          <Box fontSize={{ xs: "1.5rem", md: "2rem" }} fontWeight={700} textAlign={{ xs: "left", md: "center" }}>
            I can't wait to hear from you.
          </Box>

          <Box py={{ xs: 1, md: 2 }} fontSize={{ xs: "0.8rem", md: "1rem" }} fontWeight={700} textAlign={{ xs: "left", md: "center" }}>
            Questions. Feedbacks. Partnerships.
          </Box>

          <Box>
            <Box display={"flex"} py={2}>
              <Input
                type="text"
                id="name"
                placeholder="Name"
                name="name"
                value={values?.name}
                onChange={handleChange}
                onBlur={handleBlur}
                errors={errors}
                touched={touched}
              />
            </Box>
            <Box display={"flex"} py={2}>
              <Input
                id="email"
                type="email"
                placeholder="Email"
                name="email"
                value={values?.email}
                onChange={handleChange}
                onBlur={handleBlur}
                errors={errors}
                touched={touched}
              />
            </Box>
            <Box display={"flex"} py={2}>
              <TextArea
                rows={6}
                name="content"
                id="content"
                placeholder="Message"
                value={values?.content}
                onChange={handleChange}
                onBlur={handleBlur}
                errors={errors}
                touched={touched}
              />
            </Box>
          </Box>
          <Box
            fontSize={"1.25rem"}
            py={1}
            px={2}
            bgcolor={loading ? "#ccc" : "#95A8D3"}
            width={"max-content"}
            borderRadius={"24px"}
            display={"flex"}
            alignItems={"center"}
            fontWeight={700}
            color="#fff"
            sx={{ cursor: "pointer" }}
            onClick={() => {
              handleSubmit();
            }}
          >
            SUBMIT
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ContactForm;
