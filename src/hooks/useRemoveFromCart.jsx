import { useMutation, useQueryClient } from '@tanstack/react-query'
import React from 'react'
import authAxiosInstance from '../api/authAxiosInstance'
import { Bounce, toast } from 'react-toastify';

export default function useRemoveFromCart() {


    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async (id) => {
            return authAxiosInstance.delete(`/Carts/${id}`);
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['cart'] });
            toast.success("Item Removed Successfully!", {
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
            toast.error("Failed to remove item from cart", {
                position: "top-right",
                autoClose: 3000,
                theme: "colored",
                transition: Bounce,
            });
        }
    })

}
