import React from 'react';
import LocationCard from './LocationCard';
import { PiPhoneCallThin } from 'react-icons/pi';
import { CiLocationOn } from 'react-icons/ci';
import { IoMdTime } from 'react-icons/io';

const LocationSection = () => {
    const contractInformation=[
        {id:1,image:<PiPhoneCallThin className='w-8 h-8 text-white' />,name:'PHONE',contract:'+38 (012) 34 56 789'},
        {id:2,image:<CiLocationOn className='w-8 h-8 text-white' />,name:'ADDRESS',contract:'+38 (012) 34 56 789'},
        {id:3,image:<IoMdTime className='w-8 h-8 text-white' />,name:'WORKING HOURS',contract:'+38 (012) 34 56 789'}
    ]
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12'>
            {
                contractInformation.map(item=><LocationCard key={item.id} item={item} ></LocationCard>)
            }
        </div>
    );
};

export default LocationSection;