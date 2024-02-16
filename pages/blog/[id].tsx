import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import { Box, Stack } from "@mui/material";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useEffect, useState } from "react";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import VisibilityIcon from "@mui/icons-material/Visibility";
import BlogCaption from "../../components/Blog/BlogCaption";
import BlogContent from "../../components/Blog/BlogContent";
import TrendingBlog from "../../components/Blog/TrendingBlog";
import FeaturedBlog from "../../components/Blog/FeaturedBlog";
import Comments from "../../components/Blog/Comments";
import Comment from "../../components/Blog/Comment";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "next/link";
import { useRouter } from "next/router";
import { addBlogPostViews, correctPostId, fetchPostComments, getBlogPost, getPostComments } from "../../services/post";
import { IPostCommentData, IPostData } from "../../interfaces/post";
import { ErrorHandler } from "../../utils/handlers";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { useAppSelector } from "../../redux/hooks";
import { About, FetchPostByTitleLinkQuery, GetAboutByBlogQuery, GetPostQuery, Post } from "../../graphql/API";
import { runWithAmplifyServerContext, reqResBasedClient } from "../../utils/amplifyServerUtils";
import { GraphQLResult } from "aws-amplify/api";
import { fetchPostByTitleLink, getAboutByBlog, getPost } from "../../graphql/queries";
dayjs.extend(relativeTime);

interface BlogPostProps {
  postData: Post;
}

const BlogPost = ({ postData }: BlogPostProps) => {
  return (
    <Box color="#2c2c2c">
      <Head>
        <title>{postData.title || "Blog"} | Being Marvel Blog</title>
        <meta property="og:title" content={`${postData.title || "Blog"} | Being Marvel Blog`} />

        <meta
          name="description"
          content={
            `${postData.description}` ||
            "A lifestyle Blog. Explore life changing, relatable and inspiring blog posts that might help you see the world around you better, while you laugh a little."
          }
        />
        <meta
          property="og:description"
          content={
            `${postData.description}` ||
            "A lifestyle Blog. Explore life changing, relatable and inspiring blog posts that might help you see the world around you better, while you laugh a little."
          }
        />

        <meta name="image" content={`${postData.descriptionImage}` || "/HomePicture.png"} />
        <meta property="og:image" content="/HomePicture.png" />

        <link rel="icon" href="/BeingMarvelLogo.png" />
      </Head>

      <Header width={"85%"} />

      <Box display={"flex"} width={{ xs: "90%", md: "85%" }} mx={"auto"} mt={4} py={1}>
        <Breadcrumbs aria-label="breadcrumb">
          <Link href="/">HOME</Link>
          <Link href="/blog">BLOG</Link>
          <Box color="black" fontWeight={600}>
            {postData?.title}
          </Box>
        </Breadcrumbs>
      </Box>

      {postData?.captionImage && <BlogCaption captionText={postData?.captionText as string} captionImage={postData?.captionImage as string} />}

      <Box width={{ xs: "90%", md: "85%" }} mx={"auto"} pb={postData?.captionImage ? 4 : 2}>
        <Box display="flex" alignItems={"center"} color={"#C0C0C0"}>
          <Box display="flex" alignItems={"center"}>
            <AccessTimeIcon /> <Box px={1}>{dayjs(postData?.publishedAt).fromNow()}</Box>
          </Box>

          <Box display="flex" alignItems={"center"} px={1}>
            <VisibilityIcon /> <Box px={1}>{postData?.views} views</Box>
          </Box>

          <Box display="flex" alignItems={"center"} px={1}>
            <FavoriteBorderIcon /> <Box px={1}>{postData?.likes} likes</Box>
          </Box>
        </Box>

        <Box fontSize={postData?.captionImage ? "1.5rem" : "2rem"} fontWeight={700} color="#000" mt={postData?.captionImage ? 0 : 4}>
          {postData?.title}
        </Box>
      </Box>

      <Box display={"flex"} width={{ xs: "90%", md: "85%" }} mx={"auto"} py={1} justifyContent={"space-between"} flexDirection={{ xs: "column", md: "row" }}>
        <Box width={{ xs: "100%", md: "65%" }}>
          <BlogContent
            postId={postData?.id as string}
            content={postData?.content as string}
            postLikes={postData?.likes as number}
            preview={false}
            customLink={postData?.customLink as string}
          />
        </Box>
        <Box width={{ xs: "100%", md: "33%" }}>
          <Box>
            <TrendingBlog postId={postData?.id as string} />
          </Box>
          {/* <Box>
            <FeaturedBlog />
          </Box> */}
        </Box>
      </Box>

      <Box id="#comment">
        <Comment postId={postData?.id as string} blogId={postData?.blogId as string} />
      </Box>

      <Box id="#comments">
        <Comments postId={postData?.id as string} blogId={postData?.blogId as string} />
      </Box>

      <Footer width={"85%"} />
    </Box>
  );
};

export default BlogPost;

export const getServerSideProps: GetServerSideProps = async ({ req, res, query }) => {
  try {
    const { id } = query;

    let correctedPostId = id;

    if (id?.includes("_")) {
      const posts = (await runWithAmplifyServerContext({
        nextServerContext: { request: req, response: res },
        operation: async (contextSpec: any) =>
          reqResBasedClient.graphql(contextSpec, {
            query: fetchPostByTitleLink,
            variables: { customLink: id },
          }),
      })) as GraphQLResult<FetchPostByTitleLinkQuery>;

      if (posts?.data?.fetchPostByTitleLink?.items?.length) {
        const postId = posts?.data?.fetchPostByTitleLink?.items[0]?.id;
        correctedPostId = postId;
      } else {
        correctedPostId = "returnHome";
      }
    }

    if (!correctedPostId || correctedPostId === "returnHome") {
      return {
        redirect: {
          destination: "/",
          permanent: false,
        },
      };
    }

    if (correctedPostId !== id) {
      return {
        redirect: {
          destination: "/blog/" + correctedPostId,
          permanent: false,
        },
      };
    }

    const post = (await runWithAmplifyServerContext({
      nextServerContext: { request: req, response: res },
      operation: async (contextSpec: any) =>
        reqResBasedClient.graphql(contextSpec, {
          query: getPost,
          variables: { id: correctedPostId },
        }),
    })) as GraphQLResult<GetPostQuery>;

    const postData = post?.data?.getPost as Post;

    return {
      props: { postData },
    };
  } catch (error) {
    return {
      redirect: {
        destination: "/blog",
        permanent: false,
      },
    };
  }
};
