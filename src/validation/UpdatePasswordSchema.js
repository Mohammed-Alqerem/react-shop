import * as yup from "yup"
  const ChangePasswordSchema = yup.object({
            NewPassword:yup.string().required("password is required")
            .min(6,"password must be at least 6 characters")
            .matches(/[A-Z]/,"password must contain at least one uppercase letter")
            .matches(/[a-z]/,"password must contain at least one lowercase letter")
            .matches(/[0-9]/,"password must contain at least one number")
            .matches(/[$@&*?!]/,"password must contain at least one special character"),

            CurrentPassword:yup.string().required("password is required")
            .min(6,"password must be at least 6 characters")
            .matches(/[A-Z]/,"password must contain at least one uppercase letter")
            .matches(/[a-z]/,"password must contain at least one lowercase letter")
            .matches(/[0-9]/,"password must contain at least one number")
            .matches(/[$@&*?!]/,"password must contain at least one special character"),

            ConfirmNewPassword:yup.string().required("password is required")
            .min(6,"password must be at least 6 characters")
            .matches(/[A-Z]/,"password must contain at least one uppercase letter")
            .matches(/[a-z]/,"password must contain at least one lowercase letter")
            .matches(/[0-9]/,"password must contain at least one number")
            .matches(/[$@&*?!]/,"password must contain at least one special character"),
    });


    export default ChangePasswordSchema;