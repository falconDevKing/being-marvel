import * as Yup from "yup";
// import "yup-phone";

const containsComma = (value: string | undefined) => {
  if (value) return /,+/.test(value);
};

const SignUpValidation = Yup.object({
  name: Yup.string().required("Name is required"),
  // phoneNumber: Yup.string().phone("", false, "Phone must be a valid phone number"),
  email: Yup.string().email("Invalid email address").required("Email address is required"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "At least 8 Characters, One Uppercase, Lowercase, Number and Special Character")
    .matches(/^(.*[a-z].*)$/, "At least 8 Characters, One Uppercase, Lowercase, Number and Special Character")
    .matches(/^(.*[A-Z].*)$/, "At least 8 Characters, One Uppercase, Lowercase, Number and Special Character")
    .matches(/^(.*[\W_].*)$/, "At least 8 Characters, One Uppercase, Lowercase, Number and Special Character")
    .matches(/^(.*\d.*)$/, "At least 8 Characters, One Uppercase, Lowercase, Number and Special Character"),
  confirmPassword: Yup.string()
    .required("Confirm password is required")
    .when("password", {
      is: (val: string) => (val && val.length > 0 ? true : false),
      then: (schema) => schema.oneOf([Yup.ref("password")], "Confirm password does not match password"),
    }),
});

export default SignUpValidation;
