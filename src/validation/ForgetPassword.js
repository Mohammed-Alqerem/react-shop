import * as yup from "yup";
const ForgetPasswordSchema = yup.object({
  email: yup.string().email("email is invalid").required("email is required"),
});

export default ForgetPasswordSchema;
