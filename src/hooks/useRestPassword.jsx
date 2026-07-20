import { useMutation } from '@tanstack/react-query'
import React from 'react'
import authAxiosInstance from '../api/authAxiosInstance'
import { Bounce, toast } from 'react-toastify'

export default function useRestPassword() {
    return useMutation({
        mutationFn: async ({ code, newPassword, email }) => {
            return await authAxiosInstance.patch(`/auth/Account/ResetPassword`, {
                code,
                newPassword,
                email
            })
        },
        onSuccess: (res) => {
            console.log(res)
            toast.success("password reset successfully", {
                position: "top-right",
                autoClose: 3000,
                theme: "colored",
                transition: Bounce
            });
            location.href = '/login';
        },
        onError: (error) => {
            console.log(error)
            toast.error("failed to reset password", {
                position: "top-right",
                autoClose: 3000,
                theme: "colored",
                transition: Bounce
            })
        }
    })
}
