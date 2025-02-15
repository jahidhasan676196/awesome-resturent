import React from 'react';
import Title from '../../sharedComponent/Title';
import useUsers from '../../hooks/useUsers';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { FaUsers } from 'react-icons/fa';

const ADallUser = () => {
    const [users] = useUsers()
    console.log(users);
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
                                    <td className='w-10 bg-[#D1A054] rounded-md flex items-center justify-center'><button className='text-white '>
                                    <FaUsers className='w-6' />
                                    </button></td>
                                    <td className=' w-10'><button className='text-red-500'>
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