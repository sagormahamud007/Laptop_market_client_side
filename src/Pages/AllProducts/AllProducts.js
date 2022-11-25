import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/ContextProvider';

const AllProducts = () => {
    const { user } = useContext(AuthContext)

    const products = useLoaderData()
    const { category_name } = products;

    const { data: allProduct = [], isLoading } = useQuery({
        queryKey: ['allProducts', category_name],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/allProducts=${category_name}`)
            const data = await res.json()
            return data
        }
    })
    // const { product_name, image, product_price, marketPrice, mobile, purchase_year, condition_type, brand_name, display, title, productDetails, location, time, userEmail } = products


    return (
        <div>
            <p>this is all product page {category_name}</p>
            <h1>All products {allProduct.length}</h1>
        </div>
    );
};

export default AllProducts;