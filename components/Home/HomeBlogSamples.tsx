import { Box, Stack } from "@mui/material";
import HomeBlogCard from "./HomeBlogCard";
import Link from "next/link";
import { useAppSelector } from "../../redux/hooks";

const HomeBlogSamples = () => {
  const { postsSummary } = useAppSelector((state) => state.blog);

  const latest3PostsSummary = postsSummary.filter((postSummary) => postSummary.status).slice(0, 3);

  return (
    <Box display={"flex"} flexDirection={"column"} alignItems={"center"} p={8}>
      <Box fontFamily={"Tomatoes"} fontSize={"6rem"} color="#2C2C2C" mb={-4}>
        Lorem ip
      </Box>

      <Box fontSize={"1.5rem"} color="#2C2C2C">
        LOREM IPSUM DOLOR SIT, AMET CONSECTETUR
      </Box>

      <Stack spacing={8} direction={"row"} py={4}>
        {latest3PostsSummary.map((postSummary, index) => {
          return <HomeBlogCard key={index} postSummary={postSummary} />;
        })}
      </Stack>

      <Link href="/blog">
        <a
          style={{
            fontSize: "1.5rem",
            padding: "8px 24px",
            backgroundColor: "#95A8D3",
            width: "max-content",
            borderRadius: "24px",
            color: "#fff",
          }}
        >
          SEE MORE
        </a>
      </Link>
    </Box>
  );
};

export default HomeBlogSamples;
