import { useQuery } from '@tanstack/react-query';
import React from 'react'
import axiosInstance from '../api/axiosInstance';

export default function useCategories() {

    const getCategories = async () => {

        try {
            const response = await axiosInstance.get(`/Categories`);

            return response.data;

        } catch (error) {
            console.log(error);
        }
    }


    const query = useQuery({
        queryKey: ['categories'],
        queryFn: getCategories,
        staleTime: 1000 * 60 * 5
    });


    return query;
}
