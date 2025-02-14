import React from 'react';

const Title = ({Heading,subHeading}) => {
    return (
        <div className='mt-20 space-y-4 w-1/3 text-center mx-auto'>
            <p className='font-normal   text-xl text-[#D99904]'>{subHeading}</p>
            <p className='font-normal border-y-4 p-3 text-4xl text-[#151515]'>{Heading}</p>
        </div>
    );
};

export default Title;