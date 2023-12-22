import { Box } from "@mui/material";
import Image from "next/image";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";
import Link from "next/link";

const Caption = () => {
  return (
    <Box width={"100%"} bgcolor={"#F4F7FD"}>
      <Box width={{ xs: "100%", md: "85%" }} display={"flex"} justifyContent={"space-between"} mx="auto" p={6} flexDirection={{ xs: "column", md: "row" }}>
        <Box
          width={{ xs: "100%", sm: "90%", md: "50%" }}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          pr={{ xs: 2, md: 12 }}
          py={{ xs: 2, md: 18 }}
        >
          <Box fontSize={{ xs: "2.5rem", sm: "3.2rem", md: "4rem" }} fontWeight={500}>
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

        <Box width={{ xs: "100%", sm: "70%", md: "50%" }} borderRadius={"16px"} mt={{ xs: 6, md: 0 }} mx={{ xs: "auto", md: 0 }}>
          <Image src="/HomePicture2.png" alt="Welcome Image" layout="responsive" width={851} height={1053} style={{ borderRadius: "16px" }} />
        </Box>
      </Box>
    </Box>
  );
};

export default Caption;
