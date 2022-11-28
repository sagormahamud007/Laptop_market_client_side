import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Category from './Category';

const Categories = () => {

    const { data: categories = [], isLoading } = useQuery({
        queryKey: ['category'],
        queryFn: async () => {
            const res = await fetch(`https://used-product-laptop-market-server.vercel.app/category`)
            const data = await res.json()
            return data;
        }
    })

    if (isLoading) {
        <progress className="progress w-56"></progress>
    }
    return (
        <div>
            <h1 className='text-5xl font-bold lg:text-5xl  md:text-5xl'>Selected Category</h1>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>

                {
                    categories.map(category => <Category
                        key={category._id}
                        category={category}
                    ></Category>)
                }
            </div>
        </div>
    );
};

export default Categories;