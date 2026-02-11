import * as yup from "yup"
  const LoginSchema = yup.object({
            email:yup.string().email("email must be  a valid email").required("email is required"),
            password:yup.string().required("password is required")
            .min(6,"password must be at least 6 charachters")
            .matches(/[A-Z]/)
            .matches(/[a-z]/)
            .matches(/[0-9]/)
            .matches(/[$@&*?!]/)
    });


    export default LoginSchema;