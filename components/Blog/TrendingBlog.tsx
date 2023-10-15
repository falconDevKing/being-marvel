import { Box } from "@mui/material";
import Image from "next/image";
import { useAppSelector } from "../../redux/hooks";
import dayjs from "dayjs";

const TrendingBlog = () => {
  const postsSummary = useAppSelector((state) => state.blog.postsSummary);
  const publishedPosts = postsSummary.filter((postSummary) => postSummary.status);
  const toDisplay = [...publishedPosts]?.sort((a, b) => (dayjs(a?.publishedAt).isAfter(b.publishedAt) ? 1 : -1))?.slice(0, 3);

  return (
    <Box bgcolor={"#F4F7FD"} p={2} borderRadius={"16px"} my={2}>
      <Box p={2} color="#1B0F0A" fontSize={"1.5rem"}>
        Trending Post
      </Box>
      {toDisplay.map((post, index) => {
        const { title, category } = post;
        return (
          <Box key={index} display={"flex"} alignItems={"center"} borderTop={1} borderColor={"#B6B9C0"} p={2}>
            <Box width="45%" borderRadius={"24px"}>
              <Image src="/BlogPicture2.png" layout="responsive" width="164" height="164" style={{ borderRadius: "24px" }} />
            </Box>
            <Box p={2}>
              <Box fontWeight={700} fontSize={"1.5rem"}>
                {title}
              </Box>
              <Box fontSize={"1.2rem"} color="#848484">
                {category}
              </Box>
            </Box>
          </Box>
        );
      })}
    </Box>
  );
};

export default TrendingBlog;
