import React from 'react';
import { BsFacebook } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { IoLogoGoogle } from 'react-icons/io';
import loginBg from '../assets/others/authentication.png'
import loginimg from '../assets/others/authentication2.png'
import { Link } from 'react-router-dom';
import useProviderContext from '../hooks/useProviderContext';

const SignUp = () => {
    const { createUserWithEmailPassword,singInWithGoogle } = useProviderContext()
    const handleSignUp = (e) => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const email = form.email.value
        const password = form.password.value
        const info = { name, email, password }
        // console.log(info);
        createUserWithEmailPassword(email,password)
        .then(res=>{
            console.log(res);
        })
        .then(error=>{
            console.log(error);
        })
    }

    const handleSignInWithGoogle=()=>{
        singInWithGoogle()
        .then(res=>{
            console.log(res);
        })
        .then(error=>{
            console.log(error);
        })
    }
    return (
        <div className='h-[900px] flex flex-row-reverse p-24 gap-24' style={{ backgroundImage: `url(${loginBg})` }}>
            <div className=' flex-1 flex justify-center items-center'>
                <img src={loginimg} alt="" />
            </div>
            <div className='flex-1 '>
                <h1 className='text-4xl font-bold text-[#151515]'>Sign Up</h1>
                <form onSubmit={handleSignUp} className='space-y-5'>
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text  text-[#444444] font-semibold text-xl">Name</span>
                        </div>
                        <input type="text" placeholder="Enter your name"
                            name='name'
                            className="input input-bordered w-full " />
                    </label>
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text  text-[#444444] font-semibold text-xl">Email</span>
                        </div>
                        <input type="email"
                            name='email'
                            placeholder="Enter your email" className="input input-bordered w-full " />
                    </label>
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text  text-[#444444] font-semibold text-xl">Password</span>
                        </div>
                        <input type="password"
                            name='password'
                            placeholder="Enter your password" className="input input-bordered w-full " />
                    </label>
                    <input className='btn w-full text-xl font-bold text-white  bg-[#D1A054] mt-20' type="submit" value="Sign Up" />
                </form>
                <Link to='/login'><p className='mt-8 font-bold text-[#D1A054] text-xl'>Already registered? Go to log in</p></Link>
                <p className='text-xl font-medium text-[#444444] mt-6'>Or sign Up with</p>
                <div className='mt-8 flex gap-14 justify-center items-center'>
                    <button ><BsFacebook className='w-10 h-10' /></button>
                    <button onClick={handleSignInWithGoogle} ><IoLogoGoogle className='w-10 h-10' /></button>
                    <button><FaGithub className='w-10 h-10' /></button>
                </div>
            </div>
        </div>
    );
};

export default SignUp;