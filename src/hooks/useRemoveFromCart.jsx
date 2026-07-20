import { useMutation, useQueryClient } from '@tanstack/react-query'
import React from 'react'
import authAxiosInstance from '../api/authAxiosInstance'
import { Bounce, toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';

export default function useRemoveFromCart() {

    const { t } = useTranslation();

    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async (id) => {
            return authAxiosInstance.delete(`/Carts/${id}`);
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['cart'] });
            toast.success(t("item Removed Successfully"), {
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
        },
        onError: () => {
            toast.error(t("failed To Remove Item"), {
                position: "top-right",
                autoClose: 3000,
                theme: "colored",
                transition: Bounce,
            });
        }
    })

}
