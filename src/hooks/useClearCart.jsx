import { useMutation, useQueryClient } from "@tanstack/react-query"
import { Bounce, toast } from "react-toastify";
import authAxiosInstance from "../api/authAxiosInstance";

export default function useClearCart() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async () => {
            return await authAxiosInstance.delete('Carts/clear');
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['cart'] });
            toast.success("Cart Cleared Successfuly !", {
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
        }, onError: (error) => {
            toast.error(error.response.data.message, {
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