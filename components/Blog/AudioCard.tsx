import { Box } from "@mui/material";
import Image from "next/image";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import PlayCircleFilledRoundedIcon from "@mui/icons-material/PlayCircleFilledRounded";
import { useRouter } from "next/router";

interface AudioCardProps {
  name: string;
}

const AudioCard = ({ name }: AudioCardProps) => {
  const router = useRouter();

  const navToBlogPost = () => {
    router.push("/blog/1");
  };

  return (
    <Box display={"flex"} p={2} bgcolor="#F4F7FD" borderRadius="24px" width={{ xs: "90%", sm: "45%", md: "31%" }} mx="auto" my={2} alignItems={"center"}>
      <Box width="25%" borderRadius={"50%"} boxShadow={"1px 1px 1px 1px  #f4f7fd"}>
        <Image src="/AudioPicture1.png" alt="Audio Picture" layout="responsive" height={148} width={148} style={{ borderRadius: "50%", cursor: "pointer" }} />
      </Box>
      <Box pl={2}>
        <Box fontWeight={700} color="#2C2C2C" lineHeight={"1.5rem"} fontSize={"1.3rem"}>
          {name}
        </Box>

        <Box display={"flex"} alignItems={"center"} py={2} sx={{ cursor: "pointer" }}>
          <PlayArrowRoundedIcon sx={{ color: "#95A8D3", bgcolor: "#fff", borderRadius: "50%" }} />
          <Box component={"span"} px={1} fontWeight={700} fontSize={"0.8rem"}>
            Listen now
          </Box>
          <Box color="#B6B9C0" component="span">
            4 minutes
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default AudioCard;
