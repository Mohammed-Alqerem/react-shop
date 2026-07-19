import { useMutation } from '@tanstack/react-query'
import axiosInstance from '../api/axiosInstance';
import { Bounce, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/useAuthStore';


export default function useLogin() {

    const setToken = useAuthStore((state) => state.setToken);
    const navigate = useNavigate();
    return useMutation({
        mutationFn: async ({ email, password }) => {
            return await axiosInstance.post(`/auth/Account/Login`, { email, password });
        },
        onSuccess: (response) => {

            setToken(response.data.accessToken);
            navigate('/');
            toast.success("Login successful!", {
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
