import type { NextPage } from "next";
import Head from "next/head";
import { Box, Stack, Typography } from "@mui/material";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";
import { SiInstagram, SiTwitter } from "react-icons/si";
import { RiLinkedinFill } from "react-icons/ri";
import { AiOutlineMail } from "react-icons/ai";
import SocialMediaHandles from "../components/About/SocialMediaHandles";
import { useAppSelector } from "../redux/hooks";

const About: NextPage = () => {
  const { title, logo, twitter, linkedIn, instagram, email, content } = useAppSelector((state) => state.blog.about);

  return (
    <Box color="#2c2c2c">
      <Head>
        <title>Being Marvel</title>
        <meta name="description" content="A lifestyle Blog" />
        <link rel="icon" href="/BeingMarvelLogo.png" />
      </Head>

      <Header width={"85%"} />

      <Box height={"240px"} bgcolor={"#F4F7FD"} maxWidth={"100%"} />
      <Box width={"300px"} height={"300px"} mx={"auto"} mt={"-150px"}>
        <Image src={logo as string} alt="about picture" width={402} height={402} layout="responsive" style={{ borderRadius: "50%" }} />
      </Box>
      <Box fontFamily={"Tomatoes"} textAlign={"center"} fontSize={{ xs: "2rem", sm: "2.5rem", md: "3rem" }} py={{ xs: 3, sm: 4, md: 6 }}>
        {title}
      </Box>

      <Box
        px={{ xs: 2, sm: 4, md: 8 }}
        textAlign={"center"}
        py={{ xs: 2, sm: 3, md: 4 }}
        width={{ xs: "90%", sm: "80%", md: "60%" }}
        mx={"auto"}
        fontSize={"1.25rem"}
      >
        <div dangerouslySetInnerHTML={{ __html: content as string }}></div>
      </Box>

      <SocialMediaHandles twitter={twitter as string} email={email as string} linkedIn={linkedIn as string} instagram={instagram as string} />

      <Footer width={"85%"} />
    </Box>
  );
};

export default About;
