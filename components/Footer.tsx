import { Box } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";

type FooterProps = {
  width: string;
};

const Footer = ({ width }: FooterProps) => {
  const router = useRouter();

  const navToDashboard = () => {
    router.push("/blogger/dashboard");
  };

  return (
    <Box bgcolor={"#222"} width={"100%"} py={6} color="#fff">
      <Box bgcolor={"#222"} width={width} mx={"auto"} fontSize={"1.25rem"}>
        <Box justifyContent={"space-between"} display={"flex"}>
          <Box>
            <Image src="/BeingMarvelLogoPurple.png" alt="being marvel logo" width={100} height={50} onClick={navToDashboard} style={{ cursor: "pointer" }} />
            <Box py={2}>
              <Box py={1}>Lagos State, Nigeria</Box>
              <Box py={1}>beingmarvelblog@gmail.com</Box>
            </Box>
          </Box>
          <Box width={"30%"}>
            <Box py={1}>Sign Up for Our Newsletter</Box>
            <Box py={1}>Be this first to hear it when our newsletter is finally up!</Box>
            <Box display={"flex"} py={2}>
              <input
                id="subscribeEmail"
                placeholder="Enter email here"
                style={{
                  color: "#C0C0C0",
                  padding: "4px 8px",
                  height: "52px",
                  borderRadius: "4px 0px 0px 4px",
                  outline: "none",
                  border: "none",
                  width: "100%",
                  fontSize: "1.25rem",
                  fontFamily: "Cormorant Garamond",
                }}
              />

              <Box sx={{ borderRadius: "0px 4px 4px 0px", bgcolor: "#95A8D3", height: "52px", padding: "6px 16px", display: "flex", alignItems: "center" }}>
                Subscribe
              </Box>
            </Box>
          </Box>
        </Box>
        <Box textAlign={"center"} pt={12} pb={2}>
          © 2023 beingMarvel. All Rights Reserved
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
