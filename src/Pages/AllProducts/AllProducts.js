import React from 'react';
import { useLoaderData } from 'react-router-dom';

const AllProducts = () => {
    const products = useLoaderData;
    const { product_name, image, product_price, marketPrice, mobile, purchase_year, condition_type, brand_name, display, title, productDetails, location, time, userEmail } = products
    return (
        <div>
            <h1>All products</h1>
        </div>
    );
};

export default AllProducts;