import React from 'react';
import { useLocation } from 'react-router-dom';

const ADHome = () => {
    const location=useLocation()
    console.log(location.pathname);
    return (
        <div>
            this is admin home section
        </div>
    );
};

export default ADHome;