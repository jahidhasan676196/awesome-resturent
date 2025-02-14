import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import profile from '../assets/others/profile.png'
import useProviderContext from '../hooks/useProviderContext';
import useAxiosSecure from '../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import useCards from '../hooks/useCards';

const Navbar = () => {
   const [cardData]=useCards()
    const { user, logOut, setUser } = useProviderContext()


    const navlinks = <>
        <NavLink to='/' className={({ isActive }) => (isActive ? 'bg-white text-black mx-7 py-2 px-3 rounded-md  hover:scale-110' : 'mx-7 py-2 px-3 ')}><li>HOME</li></NavLink>
        {/* <NavLink to='/contract-us' className={({ isActive }) => (isActive ? 'bg-white text-black mx-7 py-2 px-3 rounded-md  hover:scale-110' : 'mx-7 py-2 px-3 ')}><li>CONTACT us</li></NavLink> */}
        <NavLink to='/our-menu' className={({ isActive }) => (isActive ? 'bg-white text-black py-2 px-3 rounded-md  hover:scale-110' : 'py-2 px-3 mx-7')}><li>OUR MENU</li></NavLink>
        <NavLink to='/our-shop' className={({ isActive }) => (isActive ? 'bg-white text-black py-2 px-3 rounded-md  hover:scale-110' : 'py-2 px-3  mx-7')}><li>OUR SHOP</li></NavLink>
        <NavLink to='dashbord' className={({ isActive }) => (isActive ? 'bg-white text-black py-2 px-3 rounded-md  hover:scale-110' : 'py-2 px-3  mx-7')}><li>dashboard</li></NavLink>
        {
            user && <button className="btn mx-7">
                Inbox
                <div className="badge badge-secondary">+{cardData.length}</div>
            </button>
        }
    </>
    const handleLogOut = () => {
        logOut()
            .then(() => {
                console.log('log out sucessfull')
                setUser(null)
            })
            .catch(error => {
                console.log(error);
            })

    }
    return (
        <div className="navbar  max-w-7xl mx-auto fixed z-10 opacity-100 bg-[#15151580] text-white ">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {navlinks}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">BISTRO BOSS</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navlinks}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <button onClick={handleLogOut} className='btn '>Sign Out</button> : <Link to='/login'><button className='btn '>Log In</button></Link>
                }
                <img className='w-14 ml-5' src={profile} alt="" />
            </div>
        </div>
    );
};

export default Navbar;