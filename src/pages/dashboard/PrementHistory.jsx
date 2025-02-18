import React from 'react';
import Title from '../../sharedComponent/Title';
import usePayments from '../../hooks/usePayments';
import { RiDeleteBin6Line } from 'react-icons/ri';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const PrementHistory = () => {
    const axiosSecure = useAxiosSecure()
    const [paymentData, refetch] = usePayments()
    const handleDeleteElements = async (id) => {
        // console.log(id);
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
                const { data } = await axiosSecure.delete(`/payments/${id}`)
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

    }
    return (
        <div>
            <Title
                subHeading='---At a Glance!---'
                Heading='PAYMENT HISTORY'
            ></Title>

            <div className='mt-10 mx-20 bg-white p-10'>
                <h1 className='text-[#151515] text-3xl font-bold uppercase text-start mb-5'>Total History: {paymentData.length} </h1>
                <div className="overflow-x-auto">
                    <table className="table table-zebra space-y-6">
                        {/* head */}
                        <thead className='bg-[#D1A054] text-white rounded-t-lg text-base font-medium'>
                            <tr>
                                <th></th>
                                <th>Email</th>
                                <th>Category</th>
                                <th>Total Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        {
                            paymentData.map((item, index) => <tbody className='text-[#737373] font-medium '>
                                {/* row 1 */}
                                <tr>
                                    <th>{index + 1}</th>
                                    <th>{item?.email}</th>
                                    <td>{item?.categoty}</td>
                                    <td>${item?.totalAmount}</td>
                                    <td className=' w-10'><button
                                        onClick={() => handleDeleteElements(item._id)}
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

export default PrementHistory;