import React, { useEffect, useState } from 'react';
import useProviderContext from './useProviderContext';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useAdmin = () => {
    const axiosSecure=useAxiosSecure()
    const {user}=useProviderContext()
   
    const {data:isAdmin=[],isLoading}=useQuery({
        queryKey:['users',user?.email,],
        queryFn: async()=>{
            const res=await axiosSecure.get(`/users/admin/${user?.email}`)
            return res.data.admin
        }
    })
  
    return [isAdmin,isLoading]
};

export default useAdmin;