import React from 'react';
import imge from '../assets/home/slide1.jpg'

const CheefCard = () => {
    return (
        <div className="card bg-base-100  shadow-xl">
            <figure>
                <img className='h-[300px] w-full'
                    src={imge}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title justify-center text-2xl font-semibold text-[#151515]">Caeser Salad</h2>
                <p className='text-[#151515] font-normal text-base'>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                <div className="card-actions justify-center">
                    <button className="btn text-[#BB8506] font-medium text-xl hover:bg-black">add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default CheefCard;