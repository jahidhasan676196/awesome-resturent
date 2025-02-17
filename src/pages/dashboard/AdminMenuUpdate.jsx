import React, { useEffect, useState } from 'react';
import Title from '../../sharedComponent/Title';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import useMenu from '../../hooks/useMenu';

const AdminMenuUpdate =() => {
    const [,refetch]=useMenu()
    const axiosSecure = useAxiosSecure()
    const [item,setItem]=useState(null)
    const params=useParams()
    // console.log(params.id);
    // const {data}=axiosSecure.get(`/menu/${params.id}`)
    // console.log(data);
    useEffect(()=>{
        axiosSecure.get(`/menu/${params.id}`)
        .then(res=>{
            // console.log(res.data);
            setItem(res.data)
        })
        .then(err=>{
            console.log(err);
        })
    },[])
    const handleAddItem = async (e) => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const category = form.category.value
        const price = form.price.value
        const details = form.details.value
        const img = form.image.files[0]

        const formData = new FormData();
        formData.append("image", img);

        const res = await axios.post('https://api.imgbb.com/1/upload?key=2a494f5dc19f210b18c1d88ae4826e26', formData)
        console.log(res.data.data.url);
        const image = res.data.data.url
        const info = {
            name, category, price, details, image
        }
        if (res.data.data.url) {
            const { data } = await axiosSecure.put(`/menu/${params.id}`, info)
            if(data.modifiedCount >0){
                refetch()
                alert('update is sucessfull')
            }
            console.log(data);
            // if (data.insertedId) {
            //     alert('menu added')
            // }

        }
    }
        return (
            <div>
                <Title

                    Heading='UPDATE ITEM'
                ></Title>
                <div className='mx-24 border px-12 mt-5 text-start'>
                    <form onSubmit={handleAddItem}>
                        <label className="form-control w-full ">
                            <div className="label">
                                <span className="label-text text-[#444444] font-semibold text-xl">Recipe name*</span>
                            </div>
                            <input defaultValue={item?.name} type="text" name='name' placeholder="Recipe name" className="input input-bordered w-full text-[#A1A1A1] text-xl font-normal" />

                        </label>
                        <div className='flex gap-6'>
                            <label className="form-control w-full ">
                                <div className="label">
                                    <span className="label-text text-[#444444] font-semibold text-xl">Category*</span>
                                </div>
                                <select defaultValue={item?.category} className="h-12 rounded-lg px-3  input-bordered w-full text-[#A1A1A1] text-xl font-normal border" name="category" id="">
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
                                <input defaultValue={item?.price} name='price' type="text" placeholder="Price" className="input input-bordered w-full text-[#A1A1A1] text-xl font-normal " />

                            </label>
                        </div>
                        <label className="form-control w-full ">
                            <div className="label">
                                <span className="label-text text-[#444444] font-semibold text-xl">Recipe Details*</span>
                            </div>
                            <textarea defaultValue={item?.recipe} name='details' className="textarea h-20 textarea-bordered" placeholder="Recipe Details"></textarea>

                        </label>
                        <input defaultValue={item?.image} className='mt-6' type="file" name="image" id="image" />
                        <button className='btn btn-primary text-start mt-5 bg-linear-to-r from-[#835D23] to-[#B58130]' > <input type="submit" value="Update Recipe Details" /></button>
                    </form>
                </div>
            </div>
        );
    };

    export default AdminMenuUpdate;