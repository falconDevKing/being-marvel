import * as Yup from "yup";

const ContactFormValidation = Yup.object({
  name: Yup.string().required("name is required").min(2, "Name must be atleast 2 letters"),
  email: Yup.string().required("email address is required").email("Invalid email address"),
  content: Yup.string().required("message is required").min(3, "Message must be atleast 3 characters"),
});

export default ContactFormValidation;
