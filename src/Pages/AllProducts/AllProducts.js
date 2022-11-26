import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/ContextProvider';
import CardProduct from './CardProduct';

const AllProducts = () => {
    const { user } = useContext(AuthContext)

    const products = useLoaderData()
    const { brand_name } = products;

    const { data: allProduct = [], isLoading } = useQuery({
        queryKey: ['allProducts', brand_name],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/allProducts?brand_name=${brand_name}`)
            const data = await res.json()
            return data
        }
    })

    return (
        <div>
            <p>this is all product page {brand_name}</p>
            <h1>All products {allProduct.length}</h1>
            {
                allProduct.map(product => <CardProduct
                    key={product._id}
                    product={product}
                ></CardProduct>)
            }
        </div>
    );
};

export default AllProducts;