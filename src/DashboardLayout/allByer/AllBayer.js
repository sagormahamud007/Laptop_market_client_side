import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../Context/ContextProvider';

const AllBayer = () => {
    const { user } = useContext(AuthContext)

    const { data: buyers = [], isLoading } = useQuery({
        queryKey: ["bayer", user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/bayer?email=${user?.email}`, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('Access-token')}`
                }
            });
            const data = await res.json();
            return data;
        },
    });

    if (isLoading) {
        return <p>Loading...</p>
    }
    return (
        <div className="overflow-x-auto">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th>serial</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        buyers?.length &&
                        buyers.map((bayer, index) => (
                            <tr key={bayer._id}>
                                <th>{index + 1}</th>
                                <th> {bayer.name} </th>
                                <th>{bayer.email}</th>
                                <th><button className="btn btn-sm bg-accent">Delete</button></th>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    )
};

export default AllBayer;


