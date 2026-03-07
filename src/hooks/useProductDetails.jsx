import { useQuery } from '@tanstack/react-query';
import axiosInstance from '../api/axiosInstance';

export default function useProductDetails(id) {

    const getProductDetails = async () => {
        const response = await axiosInstance.get(`/Products/${id}`);
        return response.data;
    }

    const query = useQuery({
        queryKey: ['productDetails', 'en', id],
        queryFn: getProductDetails,
        staleTime: 1000 * 60 * 5,
        enabled: !!id
    });
    return query;
}
