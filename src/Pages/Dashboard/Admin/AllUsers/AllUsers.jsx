import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import SectionTitle from '../../../../components/SectionTitle/SectionTitle';
import { FaTrash } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import EllipsisText from '../../../../components/EllipsisText/EllipsisText ';


const AllUsers = () => {
    const axiosSecure = useAxiosSecure();

    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            // console.log(res.data);
            return res.data;
        }
    })

    const handleDeleteUser = (id) => {
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
                console.log(id);
                const deleteRes = await axiosSecure.delete(`/users?id=${id}`)
                console.log(deleteRes.data);
                if (deleteRes.data.deletedCount > 0) {
                    Swal.fire({
                        title: "Deleted!",
                        text: "User has been deleted.",
                        icon: "success"
                    });
                    refetch();
                }

            }
        });
    }


    return (
        <div className=''>
            <Helmet>
                <title>Manage Users</title>
            </Helmet>
            <SectionTitle heading={'Our users, our pride'} subHeading={'Manage all users'}></SectionTitle>
            <div className='ml-0 md:ml-6'>

                <h2 className='text-xl md:text-2xl'>Total Users: {users.length}</h2>

                <div className="py-4">
                    <div className="overflow-x-auto overflow-y-auto relative">
                        <table className="w-full border table table-xs table-pin-rows table-pin-cols">
                            {/* Table Head */}
                            <thead className="sticky top-0 bg-gray-200">
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Role</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            {/* Table Body */}
                            <tbody>
                                {users.map((user, index) => (
                                    <tr key={user?._id} className="hover:bg-gray-100">
                                        <td>{index + 1}</td>
                                        <td>{user?.name}</td>
                                        <td><EllipsisText text={user?.email} maxLength={10}></EllipsisText></td>
                                        <td>{user?.role || "user"}</td>
                                        <td>
                                            <button
                                                onClick={() => handleDeleteUser(user?._id)}
                                                className="btn btn-circle btn-sm btn-outline text-rose-700"
                                            >
                                                <FaTrash />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllUsers;