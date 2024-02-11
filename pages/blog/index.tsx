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
        <title>Blog | Being Marvel</title>
        <meta property="og:title" content="Blog | Being Marvel" />
        <meta
          name="description"
          content="A lifestyle Blog. Explore life changing, relatable and inspiring blog posts that might help you see the world around you better, while you laugh a little."
        />
        <meta
          property="og:description"
          content="A lifestyle Blog. Explore life changing, relatable and inspiring blog posts that might help you see the world around you better, while you laugh a little."
        />
        <meta name="image" content="/HomePicture.png" />
        <meta property="og:image" content="/HomePicture.png" />
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
