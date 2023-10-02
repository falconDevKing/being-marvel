import { Box, Divider } from "@mui/material";
import Image from "next/image";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Dispatch, SetStateAction, useState } from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { DismissHandler, ErrorHandler, LoadingHandler, SuccessHandler } from "../../utils/handlers";
import { useFormik } from "formik";
import SignUpValidation from "../../utils/validations/SignupValidation";
import axios, { isAxiosError } from "axios";
import Input from "../Input";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const baseUrl = (process.env.NEXT_PUBLIC_BASE_URL || process.env.BASE_URL) as string;

type RegisterProps = {
  setAuthMode: Dispatch<SetStateAction<string>>;
  setOpenSignin: Dispatch<SetStateAction<boolean>>;
};

const Register = ({ setAuthMode, setOpenSignin }: RegisterProps) => {
  const router = useRouter();

  // const { email, mode: defaultMode, message } = router.query;

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
    validationSchema: SignUpValidation,
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: async (values, { resetForm }) => {
      LoadingHandler({ message: "Registering..." });
      setLoading(true);
      try {
        try {
          const authResponse = await axios.post("/api/auth/signup", values);
          const message = authResponse?.data?.message;
          DismissHandler();
          SuccessHandler({ message });
          SuccessHandler({ message: "Kindly Login" });
          setLoading(false);
          setAuthMode("Login");
        } catch (error) {
          console.log("error signing up", error);
          DismissHandler();
          if (isAxiosError(error)) {
            const message = error?.response?.data?.message;
            ErrorHandler({ message });
          } else {
            ErrorHandler({ message: "Something went wrong " });
          }
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
  const { values, errors, touched, handleChange, handleBlur, handleSubmit } = formik;

  const loginGoogle = async () => {
    const googleResponse = await signIn("google", { redirect: false, callbackUrl: callback });
  };

  return (
    <Box px={4} py={1} color="#302F2F" fontWeight={700}>
      <Box>
        Already have an account? &nbsp;
        <Box
          component="span"
          sx={{ textDecoration: "underline", cursor: "pointer" }}
          onClick={() => {
            setAuthMode("Login");
          }}
        >
          Click to login
        </Box>
      </Box>
      <Box display={"flex"} alignItems={"center"} py={0.5} px={2} bgcolor={"#f4f7fd"} my={0.5} borderRadius={"4px"}>
        <PersonOutlineOutlinedIcon />
        <Input
          type="text"
          id="name"
          placeholder="Name"
          name="name"
          value={values?.name}
          onChange={handleChange}
          onBlur={handleBlur}
          errors={errors}
          touched={touched}
          autoFocus
        />
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
          onBlur={handleBlur}
          errors={errors}
          touched={touched}
        />
      </Box>
      <Box display={"flex"} alignItems={"center"} py={0.5} px={2} bgcolor={"#f4f7fd"} my={0.5} borderRadius={"4px"}>
        <Box display={"flex"} alignItems={"center"} width="100%">
          <LockOutlinedIcon />
          <Input
            id="password"
            type={seePassword ? "text" : "password"}
            placeholder="Password"
            name="password"
            value={values?.password}
            onChange={handleChange}
            onBlur={handleBlur}
            errors={errors}
            touched={touched}
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

      <Box display={"flex"} alignItems={"center"} py={0.5} px={2} bgcolor={"#f4f7fd"} my={0.5} borderRadius={"4px"}>
        <Box display={"flex"} alignItems={"center"} width="100%">
          <LockOutlinedIcon />
          <Input
            id="confirmPassword"
            type={seePassword ? "text" : "password"}
            placeholder="Confirm Password"
            name="confirmPassword"
            value={values?.confirmPassword}
            onChange={handleChange}
            onBlur={handleBlur}
            errors={errors}
            touched={touched}
          />
        </Box>
        {values?.confirmPassword &&
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

      {/* </Box> */}
      <Box>Minimum 8 characters with 1 number and 1 letter</Box>
      <Box
        bgcolor={loading ? "#f4f7fd" : "#3367DC"}
        onClick={() => {
          handleSubmit();
        }}
        color={"#fff"}
        p={2}
        textAlign={"center"}
        borderRadius={"4px"}
        my={2}
        sx={{ cursor: "pointer" }}
      >
        Sign Up
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

export default Register;
