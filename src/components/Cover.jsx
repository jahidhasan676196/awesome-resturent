import React from 'react';


const Cover = ({ coverImg, title, description }) => {
    return (
        <div style={{
            backgroundImage: `url(${coverImg})`,
        }} className=' text-white   w-full h-[700px] border bg-cover flex justify-center items-center px-40 py-28'>
            <div className='h-80 bg-[#15151599] py-12 px-20 space-y-4'>
                <h2 className='text-7xl font-bold text-white uppercase'>{title}</h2>
                <p className='font-semibold text-2xl text-white'>{description}</p>
            </div>
        </div>
    );
};

export default Cover;