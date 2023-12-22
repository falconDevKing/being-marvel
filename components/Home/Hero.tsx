import { Box } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <Box width={"85%"} display={"flex"} justifyContent={"space-between"} mx="auto" flexDirection={{ xs: "column", md: "row" }}>
      <Box width={{ xs: "100%", sm: "90%", md: "60%" }} p={{ xs: 2, md: 6 }} borderRadius={"16px"} mx={{ xs: "auto", md: "0" }}>
        <Image src="/HomePicture.png" alt="Welcome Image" layout="responsive" width={1024} height={775} style={{ borderRadius: "16px" }} />
      </Box>

      <Box width={{ xs: "100%", md: "35%" }} display={"flex"} flexDirection={"column"} justifyContent={"center"} my={{ xs: 4, md: 0 }}>
        <Box fontSize={"1rem"}>Faith, Love, Lifestyle.</Box>

        <Box fontSize={{ xs: "2.5rem", sm: "3.2rem", md: "4rem" }} fontWeight={500}>
          WELCOME!
        </Box>

        <Box pb={2} fontSize={"1rem"}>
          Explore life changing, relatable and inspiring blog posts that might help you see the world around you better, while you laugh a little.
        </Box>

        <Link href="/blog">
          <a
            style={{
              fontSize: "1rem",
              padding: "12px 16px",
              backgroundColor: "#95A8D3",
              width: "max-content",
              borderRadius: "24px",
              color: "#fff",
            }}
          >
            READ MORE
          </a>
        </Link>
      </Box>
    </Box>
  );
};

export default Hero;
