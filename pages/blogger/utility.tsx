import { Box } from "@mui/material";
import React from "react";
import { IPostSummary } from "../../interfaces/blog";
import { useAppSelector } from "../../redux/hooks";
import UpdatePostDetails from "../../components/utils/UpdatePostDetails";
import Layout from "../../components/blogger/BloggerLayout";
import { Blog } from "../../graphql/API";
import UpdatePostComments from "../../components/utils/UpdatePostComments";

const Utility = () => {
  const postsSummary: IPostSummary[] = useAppSelector((state) => state.blog.postsSummary);
  const blogData: Omit<Blog, "__typename" | "createdAt" | "updatedAt"> = useAppSelector((state) => state.blog.blog);

  return (
    <Layout>
      <Box bgcolor={"#fff"} m={2} display={"flex"} justifyContent={"space-between"}>
        <Box p={3} m={1} width={"30%"}>
          <Box>Update Post Details</Box>
          <UpdatePostDetails postsSummary={postsSummary} blogId={blogData?.id} />
        </Box>
        <Box p={3} m={1} width={"65%"}>
          <Box>Add Post Comments</Box>
          <UpdatePostComments postsSummary={postsSummary} blogId={blogData?.id} />
        </Box>
      </Box>
    </Layout>
  );
};

export default Utility;
