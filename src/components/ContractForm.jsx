import React from 'react';
import Title from './Title';

const ContractForm = () => {
    return (
        <div className='mt-24'>
            <Title subHeading='---Send Us a Message---' Heading='CONTACT FORM'></Title>
            <dir className='mt-12 bg-[#F3F3F3] p-20'>
                <form className='space-y-6'>
                    <div className='flex gap-6 w-full'>
                        <label className="form-control w-full ">
                            <div className="label">
                                <span className="label-text text-[#444444] font-semibold text-xl">Name*</span>
                            </div>
                            <input type="text" placeholder="Enter your name" className="input input-bordered w-full " />
                        </label>
                        <label className="form-control w-full ">
                            <div className="label">
                                <span className="label-text  text-[#444444] font-semibold text-xl">Email*</span>
                            </div>
                            <input type="email" placeholder="Enter your email" className="input input-bordered w-full " />
                        </label>
                    </div>
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text text-[#444444] font-semibold text-xl">Phone*</span>
                        </div>
                        <input type="text" placeholder="Enter your phone number" className="input input-bordered w-full " />
                    </label>
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text text-[#444444] font-semibold text-xl">Message*</span>
                        </div>
                        <textarea placeholder='Write your message here' name="" id="" className='pt-6 pl-10 rounded-lg h-[300px]'></textarea>
                        {/* <input type="are" placeholder="Enter your phone number" className="input input-bordered w-full " /> */}
                    </label>
                    <input className='btn text-xl font-bold text-white  bg-gradient-to-r from-[#835D23] to-[#B58130]  mt-20' type="submit" value="Send Message" />
                </form>
            </dir>
        </div>
    );
};

export default ContractForm;