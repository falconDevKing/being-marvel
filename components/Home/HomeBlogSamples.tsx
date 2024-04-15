import { Box, Stack, useMediaQuery } from "@mui/material";
import HomeBlogCard from "./HomeBlogCard";
import Link from "next/link";
import { useAppSelector } from "../../redux/hooks";
import dayjs from "dayjs";

const HomeBlogSamples = () => {
  const { postsSummary } = useAppSelector((state) => state.blog);
  const matches = useMediaQuery("(min-width:900px)");

  const sortedPostSummary = ([...postsSummary] || []).sort((a, b) => {
    const atime = a.publishedAt;
    const btime = b.publishedAt;

    return dayjs(atime).isAfter(btime) ? -1 : 1;
  });

  const latest3PostsSummary = sortedPostSummary.filter((postSummary) => postSummary.status).slice(0, 3);
  const latest4PostsSummary = sortedPostSummary.filter((postSummary) => postSummary.status).slice(0, 4);

  return (
    <Box display={"flex"} flexDirection={"column"} alignItems={"center"} p={{ xs: 4, sm: 8 }}>
      <Box fontFamily={"Tomatoes"} fontSize={{ xs: "2rem", sm: "4rem", md: "6rem" }} color="#2C2C2C" mb={{ xs: -2, sm: -3, md: -4 }}>
        Latest Posts
      </Box>

      <Box fontSize={{ xs: "1rem", md: "1.5rem" }} color="#2C2C2C">
        Trust you'll have a nice time reading through...
      </Box>

      <Stack spacing={1} direction={"row"} py={4} width="100%" flexWrap="wrap" useFlexGap>
        {(matches ? [...latest3PostsSummary] : [...latest4PostsSummary]).map((postSummary, index) => {
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
