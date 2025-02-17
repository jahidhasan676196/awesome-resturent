import React from 'react';
import Title from '../../sharedComponent/Title';
import useCommon from '../../hooks/useCommon';
import axios from 'axios';
import useAxiosSecure from '../../hooks/useAxiosSecure';

const ADAddItem = () => {
    const axiosSecure=useAxiosSecure()
    const handleAddItem= async(e)=>{
        e.preventDefault()
        const form=e.target
        const name=form.name.value
        const category=form.category.value
        const price=form.price.value
        const details=form.details.value
        const img=form.image.files[0]
      
        const formData = new FormData();
        formData.append("image", img);

        const res=await axios.post('https://api.imgbb.com/1/upload?key=2a494f5dc19f210b18c1d88ae4826e26',formData)
        console.log(res.data.data.url);
        const image=res.data.data.url
        const info={
            name,category,price,details,image
        }
        if(res.data.data.url){
            const {data}=await axiosSecure.post('/menu',info)
            console.log(data);
            if(data.insertedId){
                alert('menu added')
            }
            
        }

        
        // 2a494f5dc19f210b18c1d88ae4826e26
        // console.log(info);
    }
    return (
        <div>
            <Title
                subHeading='---What is new?---'
                Heading='ADD AN ITEM'
            ></Title>
            <div className='mx-24 border px-12 mt-5 text-start'>
                <form onSubmit={handleAddItem}>
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text text-[#444444] font-semibold text-xl">Recipe name*</span>
                        </div>
                        <input type="text" name='name' placeholder="Recipe name" className="input input-bordered w-full text-[#A1A1A1] text-xl font-normal" />

                    </label>
                    <div className='flex gap-6'>
                        <label className="form-control w-full ">
                            <div className="label">
                                <span className="label-text text-[#444444] font-semibold text-xl">Category*</span>
                            </div>
                            <select defaultValue={'category'} className="h-12 rounded-lg px-3  input-bordered w-full text-[#A1A1A1] text-xl font-normal border" name="category" id="">
                                <option value="salad">Salad</option>
                                <option value="pizza">Pizza</option>
                                <option value="soup">Soup</option>
                                <option value="desserts">Desserts</option>
                                <option value="drinks">Drinks</option>
                            </select>

                        </label>
                        <label className="form-control w-full ">
                            <div className="label">
                                <span className="label-text text-[#444444] font-semibold text-xl">Price*</span>
                            </div>
                            <input name='price' type="text" placeholder="Price" className="input input-bordered w-full text-[#A1A1A1] text-xl font-normal " />

                        </label>
                    </div>
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text text-[#444444] font-semibold text-xl">Recipe Details*</span>
                        </div>
                        <textarea name='details' className="textarea h-20 textarea-bordered" placeholder="Recipe Details"></textarea>

                    </label>
                    <input className='mt-6' type="file" name="image" id="image" />
                   <button className='btn btn-primary text-start mt-5 bg-linear-to-r from-[#835D23] to-[#B58130]' > <input type="submit" value="Add Item" /></button>
                </form>
            </div>
        </div>
    );
};

export default ADAddItem;