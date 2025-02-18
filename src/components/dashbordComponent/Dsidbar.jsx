import React from 'react';
import { FaHome, FaIdCard, FaUser } from 'react-icons/fa';
import { FaShop } from 'react-icons/fa6';
import { IoMenu } from 'react-icons/io5';
import { FaBook } from "react-icons/fa";
import { MdCall } from 'react-icons/md';
import { Link, NavLink } from 'react-router-dom';
import useAdmin from '../../hooks/useAdmin';

const Dsidbar = () => {
    const [admin] = useAdmin()
    return (
        <div>
            {
                admin?.role=='admin' ? <div>
                    <div className='mt-12'>
                        <h3 className='text-2xl font-extrabold text-[#151515]'>BISTRO BOSS</h3>
                        <p className='text-[#151515] font-bold text-lg'>Restaurant</p>
                    </div>
                    <ul className='mt-12 text-start pl-9 space-y-3 font-medium'>
                        <li > <NavLink className='flex items-center gap-3 text-[#151515] text-base uppercase ' to='dashboard'>
                            <FaHome className='w-6' />
                            Admin Home</NavLink></li>
                        <li><NavLink className='flex items-center gap-3 text-[#151515] text-base uppercase ' to='addItem'><FaIdCard></FaIdCard> Add Item</NavLink></li>
                        <li> <NavLink className='flex items-center gap-3 text-[#151515] text-base uppercase ' to='manageItem'><IoMenu /> Manage Item</NavLink></li>
                        <li> <NavLink className='flex items-center gap-3 text-[#151515] text-base uppercase ' to='manageBooking'> <FaBook></FaBook> Manage Bokking </NavLink></li>
                        <li><NavLink className='flex items-center gap-3 text-[#151515] text-base uppercase ' to='allUser'><FaUser></FaUser> All user</NavLink></li>
                    </ul>
                    <div className="divider text-white"></div>
                    <ul className='mt-9 text-start pl-9 space-y-3 font-medium'>
                        <li> <NavLink className='flex items-center gap-3 text-[#151515] text-base uppercase font-medium' to='/'><FaHome></FaHome> Home</NavLink></li>
                        <li><NavLink className='flex items-center gap-3 text-[#151515] text-base uppercase ' to='/our-menu'><IoMenu></IoMenu> Menu</NavLink></li>
                        <li> <NavLink className='flex items-center gap-3 text-[#151515] text-base uppercase ' to='/our-shop'><FaShop></FaShop> Shop</NavLink></li>
                        <li> <NavLink className='flex items-center gap-3 text-[#151515] text-base uppercase ' to='/contract-us'><MdCall></MdCall> Contract </NavLink></li>
                    </ul>
                </div> : <div>
                    <div className='mt-12'>
                        <h3 className='text-2xl font-extrabold text-[#151515]'>BISTRO BOSS</h3>
                        <p className='text-[#151515] font-bold text-lg'>Restaurant</p>
                    </div>
                    <ul className='mt-12 text-start pl-9 space-y-3 font-medium'>
                        <li > <NavLink className='flex items-center gap-3 text-[#151515] text-base uppercase ' to='dashboard'>
                            <FaHome className='w-6' />
                            User Home</NavLink></li>
                        <li><NavLink className='flex items-center gap-3 text-[#151515] text-base uppercase ' to='mycard/reservation'><FaIdCard></FaIdCard> Reservation</NavLink></li>
                        <li> <NavLink className='flex items-center gap-3 text-[#151515] text-base uppercase ' to='prementHistory'><IoMenu /> Prement History</NavLink></li>
                        <li> <NavLink className='flex items-center gap-3 text-[#151515] text-base uppercase ' to='mycard'> <FaBook></FaBook> My cart</NavLink></li>
                        <li><NavLink className='flex items-center gap-3 text-[#151515] text-base uppercase ' to='addReview'><FaUser></FaUser> Add addReview</NavLink></li>
                        <li><NavLink className='flex items-center gap-3 text-[#151515] text-base uppercase ' to='myBooking'><FaUser></FaUser> My Booking</NavLink></li>
                    </ul>
                    <div className="divider text-white"></div>
                    <ul className='mt-9 text-start pl-9 space-y-3 font-medium'>
                        <li> <NavLink className='flex items-center gap-3 text-[#151515] text-base uppercase font-medium' to='/'><FaHome></FaHome> Home</NavLink></li>
                        <li><NavLink className='flex items-center gap-3 text-[#151515] text-base uppercase ' to='/our-menu'><IoMenu></IoMenu> Menu</NavLink></li>
                        <li> <NavLink className='flex items-center gap-3 text-[#151515] text-base uppercase ' to='/our-shop'><FaShop></FaShop> Shop</NavLink></li>
                        <li> <NavLink className='flex items-center gap-3 text-[#151515] text-base uppercase ' to='/contract-us'><MdCall></MdCall> Contract </NavLink></li>
                    </ul>
                </div>
            }


        </div>
    );
};

export default Dsidbar;