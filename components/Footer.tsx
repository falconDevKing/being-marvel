import { Box } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { ErrorHandler, SuccessHandler } from "../utils/handlers";

import { createBlogHandler } from "../services/blog";
import { useAppSelector } from "../redux/hooks";
import { logout } from "../services/auth";
import Link from "next/link";
import { handleNewSubscriber } from "../services/engagement";

type FooterProps = {
  width: string;
};

const Footer = ({ width }: FooterProps) => {
  const router = useRouter();

  const navToDashboard = () => {
    router.push("/blogger");
  };

  const { userDetails } = useAppSelector((state) => state.auth);
  const id = userDetails?.id || "";
  const email = userDetails?.email || "";

  const { name: blogName, logo, darkLogo, id: blogId, interimBloggers } = useAppSelector((state) => state.blog.blog);
  const [loading, setLoading] = useState<boolean>(false);
  const [subscriberMail, setSubscriberMail] = useState<string>("");

  const subscribe = async () => {
    try {
      if (loading) {
        return;
      }
      setLoading(true);

      if (subscriberMail) {
        await handleNewSubscriber(subscriberMail, blogId);

        setSubscriberMail("");
      } else {
        ErrorHandler({ message: "Kindly fill in your email" });
      }
    } catch (error: any) {
      console.log("err in footer subscription", error);
      ErrorHandler({ message: error?.message || "Error Subscribing, please try again later" });
    }
    setLoading(false);
  };

  const createBlogFunction = async () => {
    // await createBlogHandler(id as string);
    navToDashboard();
  };

  return (
    <Box bgcolor={"#222"} width={"100%"} py={6} color="#fff">
      <Box bgcolor={"#222"} width={width} mx={"auto"} fontSize={"1.25rem"}>
        <Box justifyContent={"space-between"} display={"flex"} flexDirection={{ xs: "column", md: "row" }}>
          <Box>
            <Link href={"/"}>
              <Image src={darkLogo as string} alt={`${blogName} logo`} width={100} height={50} style={{ cursor: "pointer" }} />
            </Link>
            <Box py={2}>
              <Box py={1}>Lagos, Nigeria</Box>
              <Box py={1}>beingmarvelblog@gmail.com</Box>
              {interimBloggers?.includes(email as string) && (
                <Box py={1} onClick={createBlogFunction} style={{ cursor: "pointer" }}>
                  Become a blogger
                </Box>
              )}
            </Box>
          </Box>
          <Box width={{ xs: "100%", md: "40%" }} mt={{ xs: 6, md: 0 }}>
            <Box py={1}>Sign Up for Our Newsletter</Box>
            <Box py={1}>Be the first to hear when our newsletter is up!</Box>
            <Box display={"flex"} py={2} maxWidth={"400px"}>
              <input
                id="subscribeEmail"
                placeholder="Enter email here"
                value={subscriberMail}
                onChange={(e) => {
                  setSubscriberMail(e.target.value);
                }}
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

              <Box
                sx={{
                  borderRadius: "0px 4px 4px 0px",
                  bgcolor: loading ? "#ccc" : "#95A8D3",
                  height: "52px",
                  padding: "6px 16px",
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                }}
                onClick={subscribe}
              >
                Subscribe
              </Box>
            </Box>
          </Box>
        </Box>

        <Box textAlign={"center"} pt={12} pb={2} onClick={logout}>
          © 2023 beingMarvel. All Rights Reserved
          <Box display={"flex"} justifyContent={"center"} py={1}>
            <Link href={"/terms-and-conditions"}>
              <Box sx={{ cursor: "pointer" }}>Terms and Conditions</Box>
            </Link>
            &nbsp; | &nbsp;
            <Link href={"/privacy-policy"}>
              <Box sx={{ cursor: "pointer" }}>Privacy Policy</Box>
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
