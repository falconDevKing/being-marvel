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

        const contactFormResponse = await axios.post("/api/contactForm", values);
        const message = contactFormResponse.data.message;

        DismissHandler();
        SuccessHandler({ message });
        resetForm();
        setLoading(false);
      } catch (error: any) {
        DismissHandler();
        if (isAxiosError(error)) {
          const message = error?.response?.data?.message;
          ErrorHandler({ message });
        } else {
          ErrorHandler({ message: error?.message || "Something went wrong" });
        }
        setLoading(false);
      }
    },
  });

  const { values, errors, handleBlur, handleChange, handleSubmit, touched } = formik;

  return (
    <Box width={"100%"}>
      <Box width={"85%"} display={"flex"} mx="auto" px={6} alignItems={"center"} pt={8}>
        <Box width={"50%"} borderRadius={"16px"} height={"100%"} px={4}>
          <Image src="/ContactPicture2.png" alt="Contact Image" layout="responsive" width={851} height={1053} style={{ borderRadius: "16px" }} />
        </Box>
        <Box width={"50%"} display={"flex"} flexDirection={"column"} justifyContent={"center"} px={4}>
          <Box fontSize={"2rem"} fontWeight={700} textAlign={"center"}>
            I can't wait to hear from you.
          </Box>
          <Box py={2} fontSize={"1rem"} fontWeight={700} textAlign={"center"}>
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
                autoFocus
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
                placeholder="MESSAGE"
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
