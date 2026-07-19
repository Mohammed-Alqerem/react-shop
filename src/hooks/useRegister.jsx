import React from 'react'
import { useMutation } from '@tanstack/react-query'
import axiosInstance from '../api/axiosInstance'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { Bounce } from 'react-toastify'
export default function useRegister() {
    const navigate = useNavigate();
    return useMutation({
        mutationFn: async (data) => {
            return await axiosInstance.post('/auth/Account/Register', data);
        },
        onSuccess: () => {
            toast.success("Registration successful!", {
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
            navigate('/login')
        },
        onError: (error) => {
            toast.error(error.response.data.errors, {
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
