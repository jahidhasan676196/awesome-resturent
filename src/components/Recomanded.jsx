import React, { useState } from 'react';
import Title from '../sharedComponent/Title';
import CheefCard from './CheefCard';

const Recomanded = () => {
    const [cards,setCards]=useState([1,3,4])
    return (
        <div className='mt-32'>
            <Title
            subHeading='---Should Try---'
            Heading='CHEF RECOMMENDS'
            ></Title>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-12 gap-8'>
                {
                    cards.map(card=><CheefCard></CheefCard>)
                }
            </div>
        </div>
    );
};

export default Recomanded;