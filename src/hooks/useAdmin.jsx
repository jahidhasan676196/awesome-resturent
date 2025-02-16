import React, { useEffect, useState } from 'react';
import useProviderContext from './useProviderContext';
import useAxiosSecure from './useAxiosSecure';

const useAdmin = () => {
    const axiosSecure=useAxiosSecure()
    const {user}=useProviderContext()
    const [admin,setAdmin]=useState()
    useEffect(()=>{
        axiosSecure.get(`/users/${user?.email}`)
        .then(res=>{
            console.log(res.data);
            setAdmin(res.data)
        }).then(err=>{
            console.log(err);
        })
    },[user?.email,'users'])
    return [admin]
};

export default useAdmin;