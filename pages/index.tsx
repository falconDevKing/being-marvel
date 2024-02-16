import React from "react";
import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { Box } from "@mui/material";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Home/Hero";
import Caption from "../components/Home/Caption";
import HomeBlogSamples from "../components/Home/HomeBlogSamples";
import { runWithAmplifyServerContext, reqResBasedClient } from "../utils/amplifyServerUtils";
import { Blog, GetBlogQuery } from "../graphql/API";
import { getBlog } from "../graphql/queries";
import { GraphQLResult } from "aws-amplify/api";
import { customFetchPostsByBlog } from "../graphql/customQueries";
import { IPostSummary } from "../interfaces/blog";

interface HomeProps {
  blog: Blog;
  postsSummary: IPostSummary;
}

const Home: NextPage<HomeProps> = ({ blog, postsSummary }) => {
  return (
    <Box color="#2c2c2c">
      <Head>
        <title>Being Marvel</title>
        <meta property="og:title" content="Being Marvel" />
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

      <Header width={"85%"} propsBlog={blog} />

      <Hero />

      <Caption />

      <HomeBlogSamples summaryPosts={postsSummary} />

      <Footer width={"85%"} propsBlog={blog} />
    </Box>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  try {
    const blogId = process.env.MARVEL_BLOG_ID as string;
    const blogData = (await runWithAmplifyServerContext({
      nextServerContext: null,
      operation: async (contextSpec) =>
        reqResBasedClient.graphql(contextSpec, {
          query: getBlog,
          variables: { blogId },
        }),
    })) as GraphQLResult<GetBlogQuery>;

    const blog = blogData?.data?.getBlog as Blog;

    // get posts
    const getPosts = await runWithAmplifyServerContext({
      nextServerContext: null,
      operation: async (contextSpec) =>
        reqResBasedClient.graphql(contextSpec, {
          query: customFetchPostsByBlog,
          variables: { blogId: blogId },
        }),
    });

    const postsData = getPosts?.data?.fetchPostsByBlog?.items as IPostSummary[];
    const modifiedPostsData = postsData.filter((postData) => !!postData);

    return {
      props: { blog, postsSummary: modifiedPostsData },
    };
  } catch (error) {
    return {
      props: { blog: {} },
    };
  }
};
