import { Box, Divider } from "@mui/material";
import Image from "next/image";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Dispatch, SetStateAction, useState } from "react";
import { useRouter } from "next/router";
import { signIn } from "next-auth/react";
import { useFormik } from "formik";
import LoginValidation from "../../utils/validations/LoginValidation";
import { DismissHandler, ErrorHandler, LoadingHandler, SuccessHandler } from "../../utils/handlers";
import { isAxiosError } from "axios";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import Input from "../Input";

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

  const [loading, setLoading] = useState(false);
  const [seePassword, SetSeePassword] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: LoginValidation,
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: async (values, { resetForm }) => {
      LoadingHandler({ message: "Registering..." });
      setLoading(true);
      try {
        const result = await signIn("credentials", {
          redirect: false,
          email: values.email,
          password: values.password,
        });

        if (result?.ok) {
          DismissHandler();
          SuccessHandler({ message: "Signed In successfully" });
          setLoading(false);
          router.push(callback);
        } else {
          DismissHandler();
          ErrorHandler({ message: result?.error || "Error Logging in" });
        }
        setLoading(false);
      } catch (error) {
        if (isAxiosError(error)) {
          const message = error?.response?.data?.message;
          ErrorHandler({ message });
        } else {
          ErrorHandler({ message: "Something went wrong" });
        }
        setLoading(false);
      }
    },
  });

  const { values, errors, touched, handleChange, handleBlur } = formik;

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
      <Box display={"flex"} alignItems={"center"} py={0.5} px={2} bgcolor={"#f4f7fd"} my={0.5} borderRadius={"4px"}>
        <EmailOutlinedIcon />
        <Input
          id="email"
          type="email"
          placeholder="Email"
          name="email"
          value={values?.email}
          onChange={handleChange}
          errors={errors}
          touched={touched}
          style={{
            color: "#302F2F",
            padding: "4px 24px",
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

      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        py={0.5}
        px={2}
        bgcolor={"#f4f7fd"}
        my={0.5}
        borderRadius={"4px"}
        width="100%"
      >
        <Box display={"flex"} alignItems={"center"}>
          <LockOutlinedIcon />
          <Input
            id="password"
            type={seePassword ? "text" : "password"}
            placeholder="Password"
            name="password"
            value={values?.password}
            onChange={handleChange}
            errors={errors}
            touched={touched}
            style={{
              color: "#302F2F",
              padding: "4px 24px",
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
        {values?.password &&
          (seePassword ? (
            <VisibilityOffIcon
              onClick={() => {
                SetSeePassword((prev) => !prev);
              }}
            />
          ) : (
            <VisibilityIcon
              onClick={() => {
                SetSeePassword((prev) => !prev);
              }}
            />
          ))}
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
