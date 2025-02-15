import React from 'react';
import { Outlet } from 'react-router-dom';
import ADsidebar from '../components/AdminDBComponent/ADsidebar';

const AdminDashBoard = () => {
    return (
        <div className='flex '>
            <div className='w-72 bg-[#D1A054] min-h-screen'>
                <ADsidebar></ADsidebar>
            </div>
            <div className='w-full min-h-screen bg-[#F6F6F6]'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default AdminDashBoard;