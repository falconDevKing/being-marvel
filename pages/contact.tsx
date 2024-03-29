import type { NextPage } from "next";
import Head from "next/head";
import { Box, Stack } from "@mui/material";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Home/Hero";
import Caption from "../components/Home/Caption";
import HomeBlogSamples from "../components/Home/HomeBlogSamples";
import Image from "next/image";
import { SiInstagram, SiTwitter } from "react-icons/si";
import { RiLinkedinFill } from "react-icons/ri";
import { AiOutlineMail } from "react-icons/ai";
import ContactCaption from "../components/Contact/ContactCaption";
import ContactForm from "../components/Contact/ContactForm";
import Modal from "../components/Modal";
import { useState } from "react";

const Contact: NextPage = () => {
  return (
    <Box color="#2c2c2c">
      <Head>
        <title>Contact | Being Marvel</title>
        <meta property="og:title" content="Contact | Being Marvel" />
        <meta name="description" content="Hearing back from you often is a constant hope that I dream of every day. I can't wait to hear from you." />
        <meta property="og:description" content="Hearing back from you often is a constant hope that I dream of every day. I can't wait to hear from you." />
        <meta name="image" content="/ContactPicture2.png" />
        <meta property="og:image" content="/ContactPicture2.png" />
        <link rel="icon" href="/BeingMarvelLogo.png" />
      </Head>

      <Header width={"85%"} />

      <ContactCaption />
      <ContactForm />

      <Box
        width={"100%"}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        py={8}
        bgcolor={"#F4F7FD"}
        my={{ xs: 6, md: 16 }}
      >
        <Box fontWeight={700} fontSize={{ xs: "2rem", sm: "2.5rem", md: "3rem" }}>
          Let&apos;s Connect.
        </Box>

        <Box fontWeight={700} fontSize={{ xs: "1rem", sm: "1.2rem", md: "1.5rem" }}>
          Follow & Interact with me on social media.
        </Box>

        <Stack direction={"row"} spacing={1} width={"max-content"} py={4} px={12}>
          <a href="mailto:adedayomoyo04@gmail.com">
            <Box borderRadius={"50%"} border={"1px solid #6289E0"} width={"40px"} display={"flex"} p={1} justifyContent={"center"} alignItems={"center"}>
              <AiOutlineMail fontSize={"24px"} color={"#6289E0"} />
            </Box>
          </a>

          <a href="https://www.linkedin.com/in/moyo-marv-adedayo/" target="_blank" rel="noopener noreferrer ">
            <Box borderRadius={"50%"} border={"1px solid #6289E0"} width={"40px"} display={"flex"} p={1} justifyContent={"center"} alignItems={"center"}>
              <RiLinkedinFill fontSize={"24px"} color={"#6289E0"} />
            </Box>
          </a>

          <a href="https://twitter.com/the_mmaa/" target="_blank" rel="noopener noreferrer ">
            <Box borderRadius={"50%"} border={"1px solid #6289E0"} width={"40px"} display={"flex"} p={1} justifyContent={"center"} alignItems={"center"}>
              <SiTwitter fontSize={"24px"} color={"#6289E0"} />
            </Box>
          </a>

          <a href="https://www.instagram.com/being.marvel_/" target="_blank" rel="noopener noreferrer ">
            <Box borderRadius={"50%"} border={"1px solid #6289E0"} width={"40px"} display={"flex"} p={1} justifyContent={"center"} alignItems={"center"}>
              <SiInstagram fontSize={"24px"} color={"#6289E0"} />
            </Box>
          </a>
        </Stack>
      </Box>

      <Footer width={"85%"} />
    </Box>
  );
};

export default Contact;
