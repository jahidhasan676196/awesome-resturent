import React from 'react';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import useProviderContext from './useProviderContext';

const usePayments = () => {
    const {user}=useProviderContext()
    const axiosSecure=useAxiosSecure()
    const {data:paymentData=[],refetch}=useQuery({
        queryKey:[],
        queryFn:async()=>{
           const {data}=await axiosSecure.get(`/payment/${user?.email}`)
           return data
        }
    })
    return [paymentData,refetch]
};

export default usePayments;