import React, { useState } from 'react';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import logo from '../assets/icon/quote-left 1.svg'

const Slide = ({revie}) => {
    const {name,details,rating}=revie
    return (
        <div className='text-center flex flex-col justify-center items-center'>
            <Rating
                style={{ maxWidth: 180 }}
                value={rating}
                readOnly
            />
            <img className='my-10' src={logo} alt="" />
            <p className='text-xl font-normal w-2/3'>{details}</p>
            <p className='text-3xl font-medium text-[#CD9003] mt-4 '>{name}</p>
        </div>
    );
};

export default Slide;