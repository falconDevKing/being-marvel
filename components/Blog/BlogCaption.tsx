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
      height={"60vh"}
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
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        textAlign={"center"}
        mx="auto"
        color={"#fff"}
        fontSize={"2.8rem"}
      >
        {captionText}
      </Box>
    </Box>
  );
};

export default BlogCaption;
