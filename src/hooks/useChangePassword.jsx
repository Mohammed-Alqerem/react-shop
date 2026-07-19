import { useMutation } from '@tanstack/react-query'
import React from 'react'
import authAxiosInstance from '../api/authAxiosInstance'
import { Bounce, toast } from 'react-toastify'

export default function useChangePassword() {
    return useMutation({
        mutationFn: async ({ CurrentPassword, NewPassword, ConfirmNewPassword }) => {
            return authAxiosInstance.patch(`Profile/change-password`, {
                CurrentPassword: CurrentPassword,
                NewPassword: NewPassword,
                ConfirmNewPassword: ConfirmNewPassword
            })
        }, onSuccess: () => {

            toast.success("Password changed successfully!", {
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

        }, onError: () => {
            toast.error("Password changed failed!", {
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
