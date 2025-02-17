import React from 'react';
import Title from '../../sharedComponent/Title';
import useMenu from '../../hooks/useMenu';
import { FaUsers } from 'react-icons/fa';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { FaPenToSquare } from 'react-icons/fa6';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const ADManageItem = () => {
    const [menus, refetch] = useMenu()
    const axiosSecure = useAxiosSecure()
    const handleUserDelete = async (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const { data } = await axiosSecure.delete(`/menu/${id}`)
                if (data.deletedCount > 0) {
                    refetch()
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                    });
                }

            }
        });

        console.log(data);
    }
    const updateElements = (id) => {
        console.log(id);
    }

    return (
        <div>
            <Title
                subHeading='---Hurry Up!---'
                Heading=' ALL ITEMS'
            ></Title>

            <div className='mt-10 mx-20 bg-white p-10'>
                <h1 className='text-[#151515] text-3xl font-bold uppercase text-start mb-5'>Total Menu: {menus.length}</h1>
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
                                <th>Action</th>
                            </tr>
                        </thead>
                        {
                            menus.map((item, index) => <tbody className='text-[#737373] font-medium '>
                                {/* row 1 */}
                                <tr>
                                    <th>{index + 1}</th>
                                    <th><img className='w-16' src={item?.image} alt="" /></th>
                                    <td>{item?.name}</td>
                                    <td>${item?.price}</td>
                                    <td className='w-10 bg-[#D1A054] rounded-md flex items-center justify-center'><Link to={`updateElements/${item?._id}`}><button
                                        className='text-white '>
                                        <FaPenToSquare />

                                    </button></Link></td>
                                    <td className=' w-10'><button
                                        onClick={() => handleUserDelete(item?._id)}
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

export default ADManageItem;