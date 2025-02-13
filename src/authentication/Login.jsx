import React, { useContext } from 'react';
import loginBg from '../assets/others/authentication.png'
import loginimg from '../assets/others/authentication2.png'
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { BsFacebook } from 'react-icons/bs';
import { IoLogoGoogle } from 'react-icons/io';
import { FaGithub } from 'react-icons/fa';
import { AuthContext } from '../provider/AuthProvider';
import useProviderContext from '../hooks/useProviderContext';
import Swal from 'sweetalert2';


const Login = () => {
    const location=useLocation()
    const navigate=useNavigate()
    // console.log(location.state);
    const { user, setUser, LoginInWithEmailPasword, singInWithGoogle } = useProviderContext()
    const handleLoginWithEmailPassword = (e) => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        LoginInWithEmailPasword(email, password)
            .then(res => {
                if (res.user) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Sign In sucessfull",
                        showConfirmButton: false,
                        timer: 1500
                      });
                }
                setUser(res.user)
                console.log(res);

            })
            .then(error => {
                console.log(error);
            })
            form.reset()
    }
    const handleSignInWithGoogle = () => {
        singInWithGoogle()
            .then(res => {
                setUser(res.user)
                {
                    location?.state? navigate(location.state):navigate('/') 
                }
                console.log(res);
            })
            .then(error => {
                console.log(error);
            })
    }
    return (
        <div className='h-[900px] flex flex-row p-24 gap-24' style={{ backgroundImage: `url(${loginBg})` }}>
            <div className=' flex-1 flex justify-center items-center'>
                <img src={loginimg} alt="" />
            </div>
            <div className='flex-1 '>
                <h1 className='text-4xl font-bold text-[#151515]'>Login</h1>
                <form onSubmit={handleLoginWithEmailPassword} className='space-y-5'>
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
                    {/* <label className="form-control w-full ">
                        <input type="email" placeholder="" 
                        defaultValue='U A g l u o ' className="input input-bordered w-full mt-5" />
                    </label>
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text  text-[#5D5FEF] font-semibold text-xl">Reload Captcha</span>
                        </div>
                        <input type="email" placeholder="Type here" className="input input-bordered w-full " />
                    </label> */}
                    <input className='btn w-full text-xl font-bold text-white  bg-[#D1A054] mt-20' type="submit" value="Sign In" />
                </form>
                <Link to='/sign-Up'><p className='mt-8 font-bold text-[#D1A054] text-xl'>New here? Create a New Account</p></Link>
                <p className='text-xl font-medium text-[#444444] mt-6'>Or sign in with</p>
                <div className='mt-8 flex gap-14 justify-center items-center'>
                    <button ><BsFacebook className='w-10 h-10' /></button>
                    <button onClick={handleSignInWithGoogle} ><IoLogoGoogle className='w-10 h-10' /></button>
                    <button><FaGithub className='w-10 h-10' /></button>
                </div>
            </div>
        </div>
    );
};

export default Login;