import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { CiDeliveryTruck } from 'react-icons/ci';
import { FaProductHunt, FaUsers } from 'react-icons/fa';
import { FaMoneyCheckDollar } from 'react-icons/fa6';
import { useLocation } from 'react-router-dom';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import useProviderContext from '../../hooks/useProviderContext';

const ADHome = () => {
    const {user}=useProviderContext()
    const location = useLocation()
    const axiosSecure=useAxiosSecure()
    console.log(location.pathname);
    const {data: information=[]}=useQuery({
        queryKey:['admin-home-data'],
        queryFn: async()=>{
            const res=await axiosSecure.get('/admin-home-data')
            return res.data
        }
    })
    console.log(information);
    return (
        <div>
            <h1 className='text-4xl font-semibold text-[#151515] text-start m-6'>Hi, Welcome {user?.displayName ? user.displayName:'Back'}</h1>
            {/* produvs details */}
            <div className='flex  gap-6 mx-6'>
                <div className='bg-gradient-to-r from-[#BB34F5] to-[#FCDBFF] rounded-lg  flex justify-center items-center gap-6 p-5'>
                    <FaMoneyCheckDollar className='text-5xl text-white' />
                    <div>
                        <h1 className='text-4xl font-extrabold text-white'>{information?.revinue}</h1>
                        <p className='text-2xl font-normal text-white'>Revenue</p>
                    </div>

                </div>
                <div className='bg-gradient-to-r from-[#D3A256] to-[#FDE8C0] rounded-lg  flex justify-center items-center gap-6 p-5'>
                    <FaUsers className='text-5xl text-white' />
                    <div>
                        <h1 className='text-4xl font-extrabold text-white'>{information?.users}</h1>
                        <p className='text-2xl font-normal text-white'>Customers</p>
                    </div>

                </div>
                <div className='bg-gradient-to-r from-[#FE4880] to-[#FECDE9] rounded-lg  flex justify-center items-center gap-6 p-5'>
                <FaProductHunt  className='text-5xl text-white' />
                    <div>
                        <h1 className='text-4xl font-extrabold text-white'>{information?.menu}</h1>
                        <p className='text-2xl font-normal text-white'>Products</p>
                    </div>

                </div>
                <div className='bg-gradient-to-r from-[#6AAEFF] to-[#B6F7FF] rounded-lg flex justify-center items-center gap-6 p-5'>
                <CiDeliveryTruck className='text-5xl text-white' />
                    <div>
                        <h1 className='text-4xl font-extrabold text-white'>{information?.orders}</h1>
                        <p className='text-2xl font-normal text-white'>Orders</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ADHome;