import type { NextPage } from "next";
import Head from "next/head";
import { Box, Stack } from "@mui/material";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { useEffect, useState } from "react";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BlogCaption from "../../../components/Blog/BlogCaption";
import BlogContent from "../../../components/Blog/BlogContent";
import TrendingBlog from "../../../components/Blog/TrendingBlog";
import FeaturedBlog from "../../../components/Blog/FeaturedBlog";
import Comments from "../../../components/Blog/Comments";
import Comment from "../../../components/Blog/Comment";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "next/link";
import { useRouter } from "next/router";
import { addBlogPostViews, fetchPostComments, getBlogPost, getPostComments } from "../../../services/post";
import { IPostCommentData, IPostData } from "../../../interfaces/post";
import { ErrorHandler } from "../../../utils/handlers";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { useAppSelector } from "../../../redux/hooks";
dayjs.extend(relativeTime);

const BlogPost = () => {
  const [postData, setPostData] = useState<IPostData>();

  const router = useRouter();
  const postId = router.query.id;

  useEffect(() => {
    const getPostDetails = async (postId: string) => {
      try {
        const postDetails = await getBlogPost(postId);

        setPostData(postDetails);
      } catch (error: any) {
        ErrorHandler({ message: error?.message || "Unable to get post" });
        console.log("error getting post", error);
      }
    };

    if (postId) {
      getPostDetails(postId as string);
      getPostComments(postId as string);
    }
  }, [postId]);

  return (
    <Box color="#2c2c2c">
      <Head>
        <title>Being Marvel</title>
        <meta name="description" content="A lifestyle Blog" />
        <link rel="icon" href="/BeingMarvelLogo.png" />
      </Head>

      <Header width={"85%"} />

      <Box display={"flex"} width={"85%"} mx={"auto"} mt={4} py={1}>
        <Breadcrumbs aria-label="breadcrumb">
          <Link href="/">HOME</Link>
          <Link href="/blog">BLOG</Link>
          <Box color="black" fontWeight={600}>
            {postData?.title}
          </Box>
        </Breadcrumbs>
      </Box>

      {postData?.captionImage && <BlogCaption captionText={postData?.captionText as string} captionImage={postData?.captionImage as string} />}

      <Box width={"85%"} mx={"auto"} pb={postData?.captionImage ? 4 : 2}>
        <Box display="flex" alignItems={"center"} color={"#C0C0C0"}>
          <Box display="flex" alignItems={"center"}>
            <AccessTimeIcon /> <Box px={1}>{dayjs(postData?.createdAt).fromNow()}</Box>
          </Box>
          <Box display="flex" alignItems={"center"} px={1}>
            <FavoriteBorderIcon /> <Box px={1}>{postData?.likes} likes</Box>
          </Box>
        </Box>
        <Box fontSize={"1.5rem"} fontWeight={700} color="#000">
          {postData?.title}
        </Box>
      </Box>

      <Box display={"flex"} width="85%" mx={"auto"} py={1} justifyContent={"space-between"}>
        <Box width={"65%"}>
          <BlogContent postId={postData?.id as string} content={postData?.content as string} postLikes={postData?.likes as number} preview={true} />
        </Box>
        <Box width="33%">
          <Box>
            <TrendingBlog />
          </Box>
          {/* <Box>
            <FeaturedBlog />
          </Box> */}
        </Box>
      </Box>

      <Footer width={"85%"} />
    </Box>
  );
};

export default BlogPost;
