import { Box, Stack } from "@mui/material";
import { AiOutlineMail } from "react-icons/ai";
import { RiLinkedinFill } from "react-icons/ri";
import { SiTwitter, SiInstagram } from "react-icons/si";

interface SocialMediaHandlesProps {
  twitter: string;
  instagram: string;
  linkedIn: string;
  email: string;
}

const SocialMediaHandles = ({ twitter, instagram, linkedIn, email }: SocialMediaHandlesProps) => {
  return (
    <Box width={"100%"} display={"flex"} justifyContent={"center"} py={8}>
      <Stack direction={"row"} spacing={1} borderTop={"1px solid #B6B9C088"} width={"max-content"} py={4} px={12}>
        <a href={email}>
          <Box borderRadius={"50%"} border={"1px solid #B6B9C088"} width={"40px"} display={"flex"} p={1} justifyContent={"center"} alignItems={"center"}>
            <AiOutlineMail fontSize={"24px"} color={"#B6B9C088"} />
          </Box>
        </a>
        <a href={linkedIn} target="_blank" rel="noopener noreferrer ">
          <Box borderRadius={"50%"} border={"1px solid #B6B9C088"} width={"40px"} display={"flex"} p={1} justifyContent={"center"} alignItems={"center"}>
            <RiLinkedinFill fontSize={"24px"} color={"#B6B9C088"} />
          </Box>
        </a>
        <a href={twitter} target="_blank" rel="noopener noreferrer ">
          <Box borderRadius={"50%"} border={"1px solid #B6B9C088"} width={"40px"} display={"flex"} p={1} justifyContent={"center"} alignItems={"center"}>
            <SiTwitter fontSize={"24px"} color={"#B6B9C088"} />
          </Box>
        </a>
        <a href={instagram} target="_blank" rel="noopener noreferrer ">
          <Box borderRadius={"50%"} border={"1px solid #B6B9C088"} width={"40px"} display={"flex"} p={1} justifyContent={"center"} alignItems={"center"}>
            <SiInstagram fontSize={"24px"} color={"#B6B9C088"} />
          </Box>
        </a>
      </Stack>
    </Box>
  );
};

export default SocialMediaHandles;
