import { useQuery } from '@tanstack/react-query';
import axiosInstance from '../api/axiosInstance';
import i18n from '../../i18next';

export default function useProductDetails(id) {

    const getProductDetails = async () => {
        const response = await axiosInstance.get(`/Products/${id}`);
        return response.data;
    }

    const query = useQuery({
        queryKey: ['productDetails', i18n.language, id],
        queryFn: getProductDetails,
        staleTime: 1000 * 60 * 5,
        enabled: !!id
    });
    return query;
}
