import { useMutation, useQueryClient } from '@tanstack/react-query'
import authAxiosInstance from '../api/authAxiosInstance'
import { Bounce, toast } from 'react-toastify';

export default function useAddToCart() {

    const queryClient = useQueryClient();

    const mutate = useMutation({
        mutationFn: async (values) => {
            return authAxiosInstance.post(`/Carts`, {
                ProductId: values.ProductId,
                Count: values.Count
            })
        }, onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['cart'] });
            toast.success("Item Added To Cart Successfuly !", {
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

    return mutate
}
