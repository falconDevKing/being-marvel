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
import { sampleText } from "../utils/helper";

const About: NextPage = () => {
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
        <Image src={"/AboutPicture.png"} alt="about picture" width={402} height={402} layout="responsive" style={{ borderRadius: "50%" }} />
      </Box>
      <Box fontFamily={"Tomatoes"} textAlign={"center"} fontSize={"3rem"} py={6}>
        Being Marvel
      </Box>

      <Box px={8} textAlign={"center"} py={4} width={"60%"} mx={"auto"} fontSize={"1.25rem"}>
        <p dangerouslySetInnerHTML={{ __html: sampleText }}></p>
      </Box>
      {/* <Box px={8} textAlign={"center"} py={4} width={"60%"} mx={"auto"} fontSize={"1.25rem"}>
        <Box py={1}>If this is your first time here... WELCOME TO THE TRIBE!</Box>
        <Box>
          I'm not certain what brought you here, but every word that this blog is made up of was written with you in mind. Many say there is not so much to
          life. Nothing extraordinary. No greater force. Nothing spiritual. But my life, which I have given in to sharing with you, is an evidence of the
          character of the Extraordinary; the character of God.
        </Box>
        <Box py={1}>Yes. I said it. GOD!</Box>
        <Box>
          I am his RISK and His CHARACTER. And trust me, I've put Him at risk a lot. This might all sound confusing and gibberish-y. But if you'd dare to hold
          my hand and come with me, you'd unravel this mystery really quickly.
        </Box>
        <Box py={1}> May every word that you read here illuminate your life with joy, peace and hope in Jesus' name.</Box>
        <Box textAlign={"right"} fontWeight={700} py={2}>
          I love you,
          <br /> Marvel
        </Box>
      </Box> */}

      <SocialMediaHandles />

      <Footer width={"85%"} />
    </Box>
  );
};

export default About;
