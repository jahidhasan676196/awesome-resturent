import React from 'react';
import errorImage from '../assets/404.gif'
const ErorPage = () => {
    return (
        <div className='flex justify-center items-center'>
            <img src={errorImage} alt="" />
        </div>
    );
};

export default ErorPage;