import { useQuery } from '@tanstack/react-query';
import axiosInstance from '../api/axiosInstance';
import i18n from '../../i18next';

export default function useProducts(limits = 1000) {

     const getProducts = async ()=>{

          const response = await axiosInstance.get(`/Products?limit=${limits}`);
          return response.data;

     }

      const query = useQuery({
        queryKey: ['products',i18n.language],
        queryFn: getProducts,
        staleTime: 1000 * 60 * 5, // 5 minutes
      });

  return query;
}
