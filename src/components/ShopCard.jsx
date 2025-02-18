import React from 'react';
import useProviderContext from '../hooks/useProviderContext';
import useAxiosSecure from '../hooks/useAxiosSecure';
import useCards from '../hooks/useCards';

const ShopCard = ({item}) => {
    const {user}=useProviderContext()
    const axiosSecure=useAxiosSecure()
    const {name,image,recipe,price,category}=item
    const [,refetch]=useCards()
    const handleAddData=(id)=>{

        const info={
            menuId: id,
            name:name,
            image:image,
            recipe:recipe,
            category:category,
            email:user?.email,
            price:price
        }
        console.log(id);
        axiosSecure.post('cards',info)
        .then(res=>{
            console.log(res.data);
            if(res.data.insertedId){
                refetch()
                alert('add to card sucessfully')
            }
        })
        .then(error=>console.log(error))
    }
    return (
          <div className="card bg-base-100  shadow-xl">
                <figure>
                    <img className='h-[300px] w-full'
                        src={image}
                        alt="Shoes" />
                       
                </figure>
                <p className='absolute right-10 top-12 bg-[#111827] text-white px-5 py-2'>${price}</p>
                <div className="card-body">
                    <h2 className="card-title justify-center text-2xl font-semibold text-[#151515]">{name}</h2>
                    <p className='text-[#151515] font-normal text-base'>{recipe}</p>
                    <div className="card-actions justify-center">
                        <button 
                            onClick={()=>handleAddData(item._id)}
                         className="btn text-[#BB8506] font-medium text-xl hover:bg-black">add to cart</button>
                    </div>
                </div>
            </div>
    );
};

export default ShopCard;