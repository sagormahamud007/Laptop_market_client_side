import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../Context/ContextProvider';

const AllSellers = () => {
    const { user } = useContext(AuthContext)
    const { data: sellers = [], isLoading } = useQuery({
        queryKey: ['seller', user?.email],
        queryFn: async () => {
            const res = await fetch(`https://used-product-laptop-market-server.vercel.app/seller?email=${user?.email}`, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('Access-token')}`
                }
            });
            const data = await res.json()
            return data
        }
    })
    if (isLoading) {
        return <p className="text-3xl">Loading...</p>
    }
    return (
        <div className="overflow-x-auto">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th>serial</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {sellers.length &&
                        sellers.map((seller, i) => (
                            <tr key={seller._id}>
                                <th>{i + 1}</th>
                                <th> {seller.name} </th>
                                <th>{seller.email}</th>
                                <th><button className='btn btn-sm btn-accent'>Verify</button></th>
                                <th><button className='btn btn-sm btn-danger'>Delete</button></th>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    );
};

export default AllSellers;