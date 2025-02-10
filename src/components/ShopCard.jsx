import React from 'react';

const ShopCard = ({item}) => {
    const {name,image,recipe,price}=item
    return (
          <div className="card bg-base-100  shadow-xl">
                <figure>
                    <img className='h-[300px] w-full'
                        src={image}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title justify-center text-2xl font-semibold text-[#151515]">{name}</h2>
                    <p className='text-[#151515] font-normal text-base'>{recipe}</p>
                    <div className="card-actions justify-center">
                        <button className="btn text-[#BB8506] font-medium text-xl hover:bg-black">add to cart</button>
                    </div>
                </div>
            </div>
    );
};

export default ShopCard;