import React from 'react';
import Title from '../sharedComponent/Title';
import fechardImg from '../assets/home/featured.jpg'

const Parallax = () => {
    return (
        <div className='mt-32 bg-fechardMenu h-[848px] bg-cover bg-center px-32 py-24 bg-fixed opacity-100 bg-[#151515B2]'>
            <Title
                subHeading='---Check it out---'
                Heading='FROM OUR MENU'
            ></Title>
            <div className='flex gap-14 mt-12'>
                <div>
                    <img src={fechardImg} alt="" />
                </div>
                <div className='text-start space-y-10'>
                    <p className='text-xl font-normal text-white'>March 20, 2023
                        WHERE CAN I GET SOME?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                    <button className='btn border-b-4'>Read More</button>
                </div>
            </div>
        </div>
    );
};

export default Parallax;