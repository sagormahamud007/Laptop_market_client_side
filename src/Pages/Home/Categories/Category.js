import React from 'react';

const Category = ({ category }) => {
    const { category_name, image } = category;
    return (

        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={image} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{category_name}</h2>
                <div className="card-actions">
                    <button className="btn btn-accent">View all</button>
                </div>
            </div>
        </div>
    );
};

export default Category;