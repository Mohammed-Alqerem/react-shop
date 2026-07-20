import { useMutation } from '@tanstack/react-query'
import React from 'react'
import authAxiosInstance from '../api/authAxiosInstance'
import { Bounce, toast } from 'react-toastify'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'

export default function useForgetPassword() {
    const navigate = useNavigate();
    const { t } = useTranslation();
    return useMutation({
        mutationFn: async ({ email }) => {
            return await authAxiosInstance.post(`/auth/Account/SendCode`, {
                email: email
            })
        }, onSuccess: (res) => {
            console.log(res)
            toast.success(t("code Sent Successfully"), {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "colored",
                transition: Bounce,
            });

            navigate("/verifyCode");
        }, onError: () => {

            toast.error(t("code Not Sent"), {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "colored",
                transition: Bounce,
            });
        }
    })
}
