import React from 'react';

const CardProduct = ({ product, setModalInfo }) => {
    const { product_name, image, product_price, marketPrice, mobile, purchase_year, condition_type, brand_name, display, title, productDetails, location, time, userEmail } = product;


    return (
        <div className=" border pl-5 my-5 flex flex-col justify-start w-11/12 mx-auto md:justify-evently md:flex-row gap-10 ">
            <div className="left_side lg:w-[30%] md:w-[30%] m-5 md:m-0 lg:m-0">
                <div className="img_div mt-5">
                    {" "}
                    <img className="w-full rounded-md shadow-md" src={image} alt="" />{" "}
                    <p> {title}</p>
                    <p> {display}</p>
                </div>
                <div className="flex items-center justify-between py-2">
                    <h2 className="text-3xl text-lime-800  font-bold"> $ {product_price}</h2>
                    <span className="text-xl text-lime-800 ">{brand_name}</span>
                </div>
            </div>
            <div className="right_side p-5 lg:w-[-50%] md:w-[50%]">
                <h2 className="text-4xl mb-3 text-lime-800 font-bold"> {product_name} </h2>
                <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center"> <span className="text-2xl font-semi-bold mr-2">Post by - {userEmail}</span> <span className="text-xl text-blue-500"></span> </div>
                    <small className="text-lime-800 ">{time} </small>
                </div>
                <p className="description"> {productDetails.slice(0, 300)} </p>
                <div className=" w-full my-2 rounded-md">
                    <span className="flex  mx-1 p-1 text-center bg-gray-200 text-[#0d0e1d] rounded-md items-center"> <div className="mr-2"></div> {mobile} </span>
                    <span className="flex  mx-1 text-center p-1 bg-gray-200 text-[#0d0e1d]rounded-md items-center"> Market price {marketPrice}, </span>
                    <span className="flex  mx-1 p-1 text-center bg-gray-200 text-[#0d0e1d] rounded-md items-center"> purchase year {purchase_year}, </span>
                    <span className="flex  mx-1 p-1 text-center bg-gray-200 text-[#0d0e1d] rounded-md items-center">  condition {condition_type}, </span>
                    <span className="flex  mx-1 p-1 text-center bg-gray-200 text-[#0d0e1d] rounded-md items-center"> {location} </span>
                </div>
                <div> <label onClick={() => setModalInfo(product)} htmlFor="productModalOpen" className="btn btn-success">Book Now</label> </div>
            </div>
        </div>
    );
};

export default CardProduct;