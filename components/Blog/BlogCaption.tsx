import { Box } from "@mui/material";
import Image from "next/image";

const BlogCaption = () => {
  return (
    <Box
      width={"100%"}
      height={"60vh"}
      display={"flex"}
      justifyContent={"space-between"}
      mx="auto"
      // sx={{ backgroundImage: `url('/ContactPicture1.png')`, backgroundSize: 'cover' }}
      sx={{
        backgroundImage: `url('https://beingmarvelblogs381553-dev.s3.eu-west-1.amazonaws.com/public/7a197560-7f01-4baa-a84a-6423a0f2f536/Dummy.PNG')`,
        backgroundSize: "cover",
      }}
    >
      <Box width={"80%"} display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"} mx="auto" color={"#fff"} fontSize={"2.8rem"}>
        <Box>Lorem ipsum dolor sit, amet consectetur</Box>
        <Box>adipisicing elit. Obcaecati adipisci ipsa tenetur,</Box>
        <Box>aliquam excepturi impedit fugit </Box>
      </Box>
    </Box>
  );
};

export default BlogCaption;
