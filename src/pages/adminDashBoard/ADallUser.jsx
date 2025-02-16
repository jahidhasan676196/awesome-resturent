import React from 'react';
import Title from '../../sharedComponent/Title';
import useUsers from '../../hooks/useUsers';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { FaUsers } from 'react-icons/fa';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const ADallUser = () => {
    const [users, refetch] = useUsers()
    const axiosSecure = useAxiosSecure()
    const handleAdmimAdd = (email) => {
        axiosSecure.patch('/users', { email })
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    refetch()
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "User update is sucessfull",
                        showConfirmButton: false,
                        timer: 1500
                      });
                }
            })
            .then(err => {
                console.log(err);
            })

    }
    const handleUserDelete = (id) => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/users/${id}`)
                    .then(res => {
                        console.log(res.data);
                        if (res.data.deletedCount > 0) {
                            refetch()
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
                    .then(err => {
                        console.log(err);
                    })
            }
        });
    }
    return (
        <div className='w-full'>
            <Title

                subHeading='---How many??---'
                Heading=' ALL USERS'
            ></Title>
            <div className='mt-10 mx-20 bg-white p-10'>
                <h1 className='text-[#151515] text-3xl font-bold uppercase text-start mb-5'>Total users: {users.length}</h1>
                <div className="overflow-x-auto">
                    <table className="table table-zebra space-y-6">
                        {/* head */}
                        <thead className='bg-[#D1A054] text-white rounded-t-lg text-base font-medium'>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        {
                            users.map((item, index) => <tbody className='text-[#737373] font-medium '>
                                {/* row 1 */}
                                <tr>
                                    <th>{index + 1}</th>
                                    <td>{item?.name}</td>
                                    <td>{item?.email}</td>
                                    <td className='w-10 bg-[#D1A054] rounded-md flex items-center justify-center'><button
                                        onClick={() => handleAdmimAdd(item?.email)}
                                        className='text-white '>
                                        {
                                            item?.role ? <p>Admin</p> : <FaUsers className='w-6' />
                                        }
                                    </button></td>
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

export default ADallUser;