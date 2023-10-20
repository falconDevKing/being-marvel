import { Box } from "@mui/material";
import Image from "next/image";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";
import Link from "next/link";
import { IPostSummary } from "../../interfaces/blog";

interface HomeBlogCardProps {
  postSummary: IPostSummary;
}

const HomeBlogCard = ({ postSummary }: HomeBlogCardProps) => {
  const { id, title, description, descriptionImage, category } = postSummary;

  return (
    <Box border={"1px solid #F4F7FD"} pb={4} borderRadius={"16px"} boxShadow={"0 1px 1px 1px  #f4f7fd"} mx={2} width={"30%"}>
      <Box width={"100%"} borderRadius={"16px"}>
        <Image src={descriptionImage} alt={`${title} Image`} layout="responsive" width={454} height={340} style={{ borderRadius: "16px 16px 0px 0px " }} />
      </Box>
      <Box p={2}>
        <Box fontSize={"1.25rem"} textTransform={"uppercase"}>
          {category}
        </Box>
        <Box fontSize={"2rem"} fontWeight={500}>
          {title}
        </Box>
        <Box py={1}>{description}</Box>
        <Link href={`/blog/${id}`}>
          <a>
            <Box
              fontSize={"1rem"}
              py={1}
              width={"max-content"}
              display={"flex"}
              alignItems={"center"}
              borderBottom={1}
              borderColor={"#6e6f72b9"}
              sx={{ cursor: " pointer" }}
            >
              <Box component={"span"} fontWeight={700} color="#282828">
                READ MORE
              </Box>
              <TrendingFlatIcon fontSize="small" />
            </Box>
          </a>
        </Link>
      </Box>
    </Box>
  );
};

export default HomeBlogCard;
