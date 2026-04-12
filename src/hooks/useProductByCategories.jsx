import { useQuery } from '@tanstack/react-query'
import React from 'react'
import axiosInstance from '../api/axiosInstance';

export default function useProductByCategories(categoryId) {
    return useQuery({
        queryKey: ['products-by-category', categoryId],
        queryFn: async () => {
            const response = await axiosInstance.get(`Products/category/${categoryId}`);
            return response.data;
        },
        staleTime: 1000 * 60 * 5,
        enabled: !!categoryId
    })

}
