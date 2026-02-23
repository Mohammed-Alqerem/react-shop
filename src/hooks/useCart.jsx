import { useQuery } from '@tanstack/react-query';
import React from 'react'
import authAxiosInstance from '../api/authAxiosInstance';

export default function useCart() {

    const getItemCart = async () => {

        const response = await authAxiosInstance.get(`/Carts`);
        console.log(response.data);

        return response.data;


    }


    const query = useQuery({
        queryKey: ['cart'],
        queryFn: getItemCart,
        staleTime: 1000 * 60 * 5
    });



    return query;
}
