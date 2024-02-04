import React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import { Box } from "@mui/material";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Hero from "../../components/Home/Hero";
import Caption from "../../components/Home/Caption";
import HomeBlogSamples from "../../components/Home/HomeBlogSamples";
import BlogCards from "../../components/Blog/BlogCards";
import AudioCards from "../../components/Blog/AudioCards";

const Blog: NextPage = () => {
  return (
    <Box color="#2c2c2c">
      <Head>
        <title>Being Marvel</title>
        <meta name="description" content="Blog list | A lifestyle Blog" />
        <meta name="image" content="/HomePicture.png" />
        <link rel="icon" href="/BeingMarvelLogo.png" />
      </Head>

      <Header width={"85%"} />

      <BlogCards />

      <AudioCards />

      <Footer width={"85%"} />
    </Box>
  );
};

export default Blog;
