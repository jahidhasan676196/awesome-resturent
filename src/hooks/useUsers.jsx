import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from './useAxiosSecure';

const useUsers = () => {
    const axiosSecure=useAxiosSecure()
    const {data:users=[],refetch}=useQuery({
        queryKey:[axiosSecure,'users'],
        queryFn: async()=>{
            const res=await axiosSecure.get('users')
            return res.data;
        }
    })
    return [users,refetch]
};

export default useUsers;