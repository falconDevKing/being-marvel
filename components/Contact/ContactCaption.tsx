import { Box } from "@mui/material";
import Image from "next/image";

const ContactCaption = () => {
  return (
    <Box
      width={"100%"}
      height={{ xs: "40vh", sm: "50vh", md: "60vh" }}
      display={"flex"}
      justifyContent={"space-between"}
      mx="auto"
      sx={{ backgroundImage: `url('/ContactPicture1.png')`, backgroundSize: "cover" }}
    >
      <Box
        width={{ xs: "90%", sm: "80%", md: "60%" }}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        mx="auto"
        color={"#fff"}
        fontSize={{ xs: "1.8rem", sm: "2.2rem", md: "2.8rem" }}
      >
        <Box textAlign={"center"}> Hearing back from you often is a constant hope that I dream of every day. </Box>
        <Box width="100%" textAlign={"right"}>
          - Marvel
        </Box>
      </Box>
    </Box>
  );
};

export default ContactCaption;
