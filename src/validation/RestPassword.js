import * as yup from "yup";
const RestPasswordSchema = yup.object({
  code: yup
    .string()
    .required("code is required")
    .min(4, "code must be at least 4 digits")
    .max(4, "code must be at most 4 digits"),
  email: yup
    .string()
    .email("email must be  a valid email")
    .required("email is required"),
  newPassword: yup
    .string()
    .required("password is required")
    .min(6, "password must be at least 6 characters")
    .matches(/[A-Z]/, "password must contain at least one uppercase letter")
    .matches(/[a-z]/, "password must contain at least one lowercase letter")
    .matches(/[0-9]/, "password must contain at least one number")
    .matches(
      /[$@&*?!]/,
      "password must contain at least one special character",
    ),
});

export default RestPasswordSchema;
