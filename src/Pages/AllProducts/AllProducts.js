import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/ContextProvider';
import BookingModal from '../BookingModal/BookingModal';
import CardProduct from './CardProduct';

const AllProducts = () => {
    const { user } = useContext(AuthContext)
    const products = useLoaderData()
    const { brand_name } = products;
    const [modalInfo, setModalInfo] = useState(null)

    const { data: allProduct = [], isLoading } = useQuery({
        queryKey: ['allProducts', brand_name],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/allProducts?brand_name=${brand_name}&email=${user?.email}`, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('Access-token')}`
                }
            })
            const data = await res.json()
            return data
        }
    })
    if (isLoading) {
        return <h1 className='text-3xl'>Loading...</h1>
    }
    return (
        <div>
            <h1>product details</h1>
            {
                allProduct.length &&
                allProduct.map(product => <CardProduct
                    key={product._id}
                    product={product}
                    setModalInfo={setModalInfo}

                ></CardProduct>)
            }

            {
                modalInfo &&
                <BookingModal
                    modalInfo={modalInfo}
                    setModalInfo={setModalInfo}
                >
                </BookingModal>
            }

        </div>
    );
};

export default AllProducts;