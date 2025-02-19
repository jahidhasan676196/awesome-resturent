import React from 'react';
import useCards from '../../hooks/useCards';
import Title from '../../sharedComponent/Title';
import { Link } from 'react-router-dom';
import { FaPenToSquare } from 'react-icons/fa6';
import { RiDeleteBin6Line } from 'react-icons/ri';
import useAxiosSecure from '../../hooks/useAxiosSecure';

const MyCard = () => {
    const [cardData, refetch] = useCards()
    const totalprice = cardData.reduce(((total, item) => total + item.price), 0)
    const axiosSecure = useAxiosSecure()
    const handleCartDelete = async (id) => {
        // console.log(id);
        const { data } = await axiosSecure.delete(`/cards/${id}`)
        console.log(data);
        if (data.deletedCount > 0) {
            refetch()
            alert('cards deleted')
        }

    }
    return (
        <div>
            <Title
                subHeading='---My Cart---'
                Heading='ADD MORE?'
            ></Title>
            <div className='mt-10 mx-20 bg-white p-10'>
                <div className='flex justify-between'>
                    <h1 className='text-[#151515] text-3xl font-bold uppercase text-start mb-5'>Total card: {cardData.length}</h1>
                    <h1 className='text-[#151515] text-3xl font-bold uppercase text-start mb-5'>Total Price: {totalprice}</h1>
                    <Link to='payment'> <button disabled={cardData.length==0} className='btn bg-[#D1A054] text-white'>Pay</button></Link>
                </div>
                <div className="overflow-x-auto">
                    <table className="table table-zebra space-y-6">
                        {/* head */}
                        <thead className='bg-[#D1A054] text-white rounded-t-lg text-base font-medium'>
                            <tr>
                                <th></th>
                                <th>Item Image</th>
                                <th>Image name</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        {
                            cardData.map((item, index) => <tbody key={item._id}   className='text-[#737373] font-medium '>
                                {/* row 1 */}
                                <tr>
                                    <th>{index + 1}</th>
                                    <th><img className='w-16' src={item?.image} alt="" /></th>
                                    <td>{item?.name}</td>
                                    <td>${item?.price}</td>
                                    <td className=' w-10'><button
                                        onClick={() => handleCartDelete(item?._id)}
                                        className='text-red-500'>
                                        <RiDeleteBin6Line className='w-10' />
                                    </button></td>
                                </tr>
                            </tbody>)
                        }

                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyCard;