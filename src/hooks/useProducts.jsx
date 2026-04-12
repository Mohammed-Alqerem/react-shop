import { useQuery } from '@tanstack/react-query';
import axiosInstance from '../api/axiosInstance';
import i18n from '../../i18next';

export default function useProducts(limits = 1000, sortBy = 'price', ascending = false, minPrice = '', maxPrice = '') {

     const getProducts = async ()=>{

          const response = await axiosInstance.get(`/Products?page=1&limit=${limits}&sortBy=${sortBy}&ascending=${ascending}&minPrice=${minPrice}&maxPrice=${maxPrice}`);
          return response.data;

     }

      const query = useQuery({
        queryKey: ['products', i18n.language, limits, sortBy, ascending, minPrice, maxPrice],
        queryFn: getProducts,
        staleTime: 1000 * 60 * 5, // 5 minutes
      });

  return query;
}
