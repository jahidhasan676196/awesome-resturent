import React from 'react';
import { FaHome, FaIdCard, FaUser } from 'react-icons/fa';
import { FaShop } from 'react-icons/fa6';
import { IoMenu } from 'react-icons/io5';
import { FaBook } from "react-icons/fa";
import { MdCall } from 'react-icons/md';
import { Link, NavLink } from 'react-router-dom';

const Dsidbar = () => {
    return (
        <div>
            <div className='mt-12'>
                <h3 className='text-2xl font-extrabold text-[#151515]'>BISTRO BOSS</h3>
                <p className='text-[#151515] font-bold text-lg'>Restaurant</p>
            </div>
            <ul className='mt-12 text-start pl-9 space-y-3 font-medium'>
                <li > <NavLink className='flex items-center gap-3 text-[#151515] text-base uppercase ' to='dashbord'>
                    <FaHome className='w-6' />
                    Admin Home</NavLink></li>
                <li><NavLink className='flex items-center gap-3 text-[#151515] text-base uppercase ' to='dashbord/reservation'><FaIdCard></FaIdCard> Add Item</NavLink></li>
                <li> <NavLink className='flex items-center gap-3 text-[#151515] text-base uppercase ' to='dashbord/prementHistory'><IoMenu /> Manage Item</NavLink></li>
                <li> <NavLink className='flex items-center gap-3 text-[#151515] text-base uppercase ' to='dashbord/mycard'> <FaBook></FaBook> Manage Bokking </NavLink></li>
                <li><NavLink className='flex items-center gap-3 text-[#151515] text-base uppercase ' to='dashbord/addReview'><FaUser></FaUser> All user</NavLink></li>
            </ul>
            <div className="divider text-white"></div>
            <ul className='mt-9 text-start pl-9 space-y-3 font-medium'>
                <li> <NavLink className='flex items-center gap-3 text-[#151515] text-base uppercase font-medium' to='/'><FaHome></FaHome> Home</NavLink></li>
                <li><NavLink className='flex items-center gap-3 text-[#151515] text-base uppercase ' to='/'><IoMenu></IoMenu> Menu</NavLink></li>
                <li> <NavLink className='flex items-center gap-3 text-[#151515] text-base uppercase ' to='/'><FaShop></FaShop> Shop</NavLink></li>
                <li> <NavLink className='flex items-center gap-3 text-[#151515] text-base uppercase ' to='/'><MdCall></MdCall> Contract </NavLink></li>
            </ul>
        </div>
    );
};

export default Dsidbar;