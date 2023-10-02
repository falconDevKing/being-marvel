import { Box } from "@mui/material";
import Image from "next/image";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";
import Link from "next/link";

const Caption = () => {
  return (
    <Box width={"100%"} bgcolor={"#F4F7FD"}>
      <Box width={"85%"} display={"flex"} justifyContent={"space-between"} mx="auto" p={6}>
        <Box width={"50%"} display={"flex"} flexDirection={"column"} justifyContent={"center"} pr={12} py={18}>
          <Box fontSize={"4rem"} fontWeight={500}>
            My Life is a Letter
          </Box>
          <Box py={2} fontSize={"1rem"}>
            Being Marvel is a lifestyle blog exploring faith based conversations and experiences, love and a lifestyle hinged on these. This is a diary about
            the journey to fulfilling purpose, self discovery and finding oneself in GOD.
          </Box>
          <Link href="/about">
            <a
              style={{
                fontSize: "1rem",
                padding: "12px 16px",
                backgroundColor: "#95A8D3",
                width: "max-content",
                borderRadius: "8px",
                color: "#fff",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Box component={"span"} fontWeight={700}>
                READ MORE
              </Box>
              <TrendingFlatIcon fontSize="small" />
            </a>
          </Link>
        </Box>
        <Box width={"50%"} borderRadius={"16px"}>
          <Image src="/HomePicture2.png" alt="Welcome Image" layout="responsive" width={851} height={1053} style={{ borderRadius: "16px" }} />
        </Box>
      </Box>
    </Box>
  );
};

export default Caption;
