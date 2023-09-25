import { Box, Divider } from "@mui/material";
import Image from "next/image";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Dispatch, SetStateAction } from "react";
import { useRouter } from "next/router";
import { signIn } from "next-auth/react";

const baseUrl = (process.env.NEXT_PUBLIC_BASE_URL || process.env.BASE_URL) as string;

type LoginProps = {
  setAuthMode: Dispatch<SetStateAction<string>>;
};

const Login = ({ setAuthMode }: LoginProps) => {
  const router = useRouter();

  const { email, mode: defaultMode, message } = router.query;

  let callback = "/blog";
  const { callbackUrl } = router.query;
  if (typeof callbackUrl === "string") {
    callback = callbackUrl.split(baseUrl as string)[1];
  }

  const loginGoogle = async () => {
    const googleResponse = await signIn("google", { redirect: false, callbackUrl: callback });
  };

  return (
    <Box px={4} py={1} color="#302F2F" fontWeight={700}>
      <Box>
        Dont have an account? &nbsp;
        <Box
          component="span"
          sx={{ textDecoration: "underline", cursor: "pointer" }}
          onClick={() => {
            setAuthMode("Register");
          }}
        >
          Click to Sign up
        </Box>
      </Box>
      <Box display={"flex"} alignItems={"center"} py={1} px={2} bgcolor={"#f4f7fd"} my={1} borderRadius={"4px"}>
        <EmailOutlinedIcon />
        <input
          id="email"
          placeholder="Email"
          style={{
            color: "#302F2F",
            padding: "8px 24px",
            height: "52px",
            borderRadius: "4px 0px 0px 4px",
            outline: "none",
            border: "none",
            width: "100%",
            fontSize: "1.25rem",
            fontFamily: "Cormorant Garamond",
            backgroundColor: "#f4f7fd",
          }}
        />
      </Box>
      <Box display={"flex"} alignItems={"center"} py={1} px={2} bgcolor={"#f4f7fd"} my={1} borderRadius={"4px"}>
        <LockOutlinedIcon />
        <input
          id="password"
          type="password"
          placeholder="Password"
          style={{
            color: "#302F2F",
            padding: "8px 24px",
            height: "52px",
            borderRadius: "4px 0px 0px 4px",
            outline: "none",
            border: "none",
            width: "100%",
            fontSize: "1.25rem",
            fontFamily: "Cormorant Garamond",
            backgroundColor: "#f4f7fd",
          }}
        />
      </Box>
      <Box color={"#FF4100"} textAlign={"right"} sx={{ cursor: "pointer" }}>
        Forgot password?
      </Box>
      <Box bgcolor={"#3367DC"} color={"#fff"} p={2} textAlign={"center"} borderRadius={"4px"} my={2} sx={{ cursor: "pointer" }}>
        Sign In
      </Box>
      <Box>
        <Divider>or continue with</Divider>
      </Box>
      <Box
        bgcolor={"#fff"}
        padding={"8px"}
        display="flex"
        justifyContent="center"
        boxShadow={"1px 1px 1px 1px  #f4f7fd"}
        borderRadius={"4px"}
        border="1px solid #f4f7fd"
        my={2}
        sx={{ cursor: "pointer" }}
        onClick={loginGoogle}
      >
        <Image src="/googleLogo.png" alt="google logo" width={30} height={30} />
      </Box>
      <Box textAlign={"center"}>
        By creating an account, you agree to Being Marvel &nbsp;
        <Box component="span" sx={{ textDecoration: "underline", cursor: "pointer" }}>
          Terms of Use and Privacy Policy
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
