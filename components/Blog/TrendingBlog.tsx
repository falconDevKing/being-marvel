import { Box } from "@mui/material";
import Image from "next/image";
import { useAppSelector } from "../../redux/hooks";
import dayjs from "dayjs";

import Link from "next/link";

interface TrendingBlogProps {
  postId: string;
}

const TrendingBlog = ({ postId }: TrendingBlogProps) => {
  const postsSummary = useAppSelector((state) => state.blog.postsSummary);
  const publishedPosts = postsSummary.filter((postSummary) => postSummary.status && postSummary?.id !== postId);
  const toDisplay = [...publishedPosts]?.sort((a, b) => (dayjs(a?.publishedAt).isAfter(b.publishedAt) ? -1 : 1))?.slice(0, 3);

  return (
    <Box bgcolor={"#F4F7FD"} p={2} borderRadius={"16px"} my={2}>
      <Box p={2} color="#1B0F0A" fontSize={"1.5rem"}>
        Trending Post
      </Box>
      {toDisplay.map((post, index) => {
        const { title, category, descriptionImage, id } = post;
        return (
          <Link href={`/blog/${id}`}>
            <a>
              <Box key={index} display={"flex"} alignItems={"center"} borderTop={1} borderColor={"#B6B9C0"} p={2}>
                <Box width="40%" borderRadius={"24px"}>
                  <Image src={descriptionImage} layout="responsive" width="164" height="164" style={{ borderRadius: "24px" }} />
                </Box>
                <Box p={2} width="55%">
                  <Box fontWeight={700} fontSize={"1.5rem"}>
                    {title}
                  </Box>
                  <Box fontSize={"1.2rem"} color="#848484">
                    {category}
                  </Box>
                </Box>
              </Box>
            </a>
          </Link>
        );
      })}
    </Box>
  );
};

export default TrendingBlog;
