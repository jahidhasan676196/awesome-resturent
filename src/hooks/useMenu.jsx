import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import useAxiosSecure from './useAxiosSecure';

const useMenu = () => {
    const axiosSecure=useAxiosSecure()
    const {data: menus=[]} = useQuery(
        { queryKey: ['menus'],
         queryFn: async ()=>{
           const res= await axiosSecure.get('/menus')
            return res.data
         }

        })



        return [menus]
};

export default useMenu;