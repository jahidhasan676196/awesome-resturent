import React, { useEffect, useState } from 'react';
import Title from './Title';
import MenuCard from './MenuCard';

const Menu = () => {
    const [menus,setMenus]=useState([])
    useEffect(()=>{
        fetch('menu.json')
        .then(res=>res.json())
        .then(data=>{
            // console.log(data);
           const popularItem= data.filter(item=>item.category=== 'popular')
            setMenus(popularItem)
        })
    },[])
    return (
        <div>
            <Title
            subHeading='---Check it out---'
            Heading='FROM OUR MENU'
            ></Title>
            {/* menu section */}
            <div className='mt-12 grid grid-cols-1 md:grid-cols-2 gap-6'>
                {
                    menus.map(item=><MenuCard key={item._id} item={item}></MenuCard>)
                }
            </div>
            <button className='  border-b-8 text-xl font-normal text-[#1F2937] mt-12'>View Full  Menu</button>
        </div>
    );
};

export default Menu;