import React from 'react';
import MenuCard from './MenuCard';

const MenuSection = ({ menus }) => {
    return (
        <div>
            <div className='mt-20 grid grid-cols-1 md:grid-cols-2 gap-6 '>
                {
                    menus.map(item => <MenuCard key={item._id} item={item}></MenuCard>)
                }

            </div>
            <button className='border-b-4 py-2 px-3 border-b-[#1F2937] rounded-xl text-center my-12'>ORDER YOUR FAVOURITE FOOD</button>
        </div>
    );
};

export default MenuSection;