import * as yup from "yup"

  export const registerSchema = yup.object({

    userName:yup.string().required("userName is required").min(3,"userName must be at least 3 charachters")
    .matches(/[a-zA-Z0-9._-]+$/,"userName must contain only letters, numbers, underscores, and hyphens"),
    fullName:yup.string().required("fullName is required"),
    email:yup.string().email("email must be  a valid email").required("email is required"),
    password:yup.string().required("password is required")
    .min(6,"password must be at least 6 charachters")
    .matches(/[A-Z]/)
    .matches(/[a-z]/)
    .matches(/[0-9]/)
    .matches(/[$@&*?!]/),
    phoneNumber:yup.string().required("phoneNumber is required")
   
  });