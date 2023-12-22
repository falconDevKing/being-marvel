import { Box } from "@mui/material";
import Image from "next/image";

interface BlogCaptionProps {
  captionText: string;
  captionImage: string;
}

const BlogCaption = ({ captionText, captionImage }: BlogCaptionProps) => {
  return (
    <Box
      width={"100%"}
      height={{ xs: "40vh", sm: "50vh", md: "60vh" }}
      display={"flex"}
      justifyContent={"space-between"}
      mx="auto"
      mb={4}
      sx={{
        backgroundImage: `url(${captionImage})`,
        backgroundSize: "cover",
      }}
    >
      <Box
        width={"65%"}
        display={"flex"}
        fontStyle={"italic"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        textAlign={"center"}
        mx="auto"
        color={"#fff"}
        fontSize={{ xs: "1.5rem", sm: "2.2rem", md: "2.8rem" }}
      >
        {captionText}
      </Box>
    </Box>
  );
};

export default BlogCaption;
