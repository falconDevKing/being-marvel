import React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import { Box } from "@mui/material";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Home/Hero";
import Caption from "../components/Home/Caption";
import HomeBlogSamples from "../components/Home/HomeBlogSamples";

const Home: NextPage = () => {
  return (
    <Box color="#2c2c2c">
      <Head>
        <title>Being Marvel</title>
        <meta
          name="description"
          content="A lifestyle Blog. Explore life changing, relatable and inspiring blog posts that might help you see the world around you better, while you laugh a little."
        />
        <meta name="image" content="/HomePicture.png" />
        <link rel="icon" href="/BeingMarvelLogo.png" />
      </Head>

      <Header width={"85%"} />

      <Hero />

      <Caption />

      <HomeBlogSamples />

      <Footer width={"85%"} />
    </Box>
  );
};

export default Home;
