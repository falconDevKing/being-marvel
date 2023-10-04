import { Box } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { ErrorHandler, SuccessHandler } from "../utils/handlers";
import axios, { isAxiosError } from "axios";
import { createBlogHandler } from "../services/blog";
import { useAppSelector } from "../redux/hooks";

type FooterProps = {
  width: string;
};

const Footer = ({ width }: FooterProps) => {
  const router = useRouter();

  const navToDashboard = () => {
    router.push("/blogger/dashboard");
  };

  const { id } = useAppSelector((state) => state.auth.userDetails);

  const [loading, setLoading] = useState<boolean>(false);
  const [subscriberMail, setSubscriberMail] = useState<string>("");

  const subscribe = async () => {
    try {
      if (loading) {
        return;
      }
      setLoading(true);
      if (subscriberMail) {
        const subscribedResponse = await axios.post("/api/newSubscriber", { subscriberMail });
        const message = subscribedResponse.data.message;
        SuccessHandler({ message });
        setSubscriberMail("");
      } else {
        ErrorHandler({ message: "Kindly fill in your email" });
      }
    } catch (error: any) {
      console.log("err in footer", error);
      if (isAxiosError(error)) {
        const message = error?.response?.data?.message;
        ErrorHandler({ message });
      } else {
        ErrorHandler({ message: error?.message || "Something went wrong, please try again later" });
      }
    }
    setLoading(false);
  };

  const createBlogFunction = async () => {
    await createBlogHandler(id);
    navToDashboard();
  };

  return (
    <Box bgcolor={"#222"} width={"100%"} py={6} color="#fff">
      <Box bgcolor={"#222"} width={width} mx={"auto"} fontSize={"1.25rem"}>
        <Box justifyContent={"space-between"} display={"flex"}>
          <Box>
            <Image src="/BeingMarvelLogoPurple.png" alt="being marvel logo" width={100} height={50} onClick={navToDashboard} style={{ cursor: "pointer" }} />
            <Box py={2}>
              <Box py={1}>Lagos, Nigeria</Box>
              <Box py={1}>beingmarvelblog@gmail.com</Box>
              <Box py={1} onClick={createBlogFunction}>
                Become a blogger
              </Box>
            </Box>
          </Box>
          <Box width={"30%"}>
            <Box py={1}>Sign Up for Our Newsletter</Box>
            <Box py={1}>Be this first to hear it when our newsletter is finally up!</Box>
            <Box display={"flex"} py={2}>
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
        <Box textAlign={"center"} pt={12} pb={2}>
          © 2023 beingMarvel. All Rights Reserved
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
