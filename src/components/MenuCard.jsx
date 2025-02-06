import React from 'react';

const MenuCard = ({item}) => {
    const {name,image,recipe,category,price}=item
    return (
        <div className='flex justify-between gap-8'>
            <div>
                <img style={{borderRadius:'0px 200px 200px 200px'}} className='w-28' src={image} alt="" />
            </div>
            <div className='text-start'>
                <h4 className='text-xl font-normal text-[#151515]'>{name} --------------</h4>
                <p className='text-[#737373] font-normal text-base'>{recipe}</p>
            </div>
            <div>
                <p className='font-normal text-[#BB8506] text-xl'>${price}</p>
            </div>
        </div>
    );
};

export default MenuCard;