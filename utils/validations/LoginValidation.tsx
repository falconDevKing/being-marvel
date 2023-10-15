import * as Yup from "yup";

const LoginValidation = Yup.object({
  email: Yup.string().email("Invalid email address").required("Email address is required"),
  password: Yup.string().required("Password is required"),
});

export default LoginValidation;
