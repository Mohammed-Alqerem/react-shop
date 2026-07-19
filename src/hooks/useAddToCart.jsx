import { useMutation, useQueryClient } from '@tanstack/react-query'
import authAxiosInstance from '../api/authAxiosInstance'
import { Bounce, toast } from 'react-toastify';
import { useAuthStore } from '../store/useAuthStore';
import { useNavigate } from 'react-router-dom';

export default function useAddToCart() {

    const queryClient = useQueryClient();
    const token = useAuthStore((state) => state.token);
    const navigate = useNavigate();

    const mutate = useMutation({
        mutationFn: async (values) => {
            if (!token) {
                navigate('/unauthorized');
                return Promise.reject({ MyErorr: true }); // this is mean ==> no go to the onSuccess and the error not from server 
            }
            return authAxiosInstance.post(`/Carts`, {
                ProductId: values.ProductId,
                Count: values.Count
            })
        }, onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['cart'] });
            toast.success("Item Added To Cart Successfuly", {
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
