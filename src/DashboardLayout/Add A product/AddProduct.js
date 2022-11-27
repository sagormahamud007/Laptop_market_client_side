
import React, { useContext } from 'react';
import moment from 'moment';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/ContextProvider';
import { toast } from 'react-toastify';

const AddProduct = () => {
    const { user } = useContext(AuthContext)
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate()
    const time = moment().format('LLLL')
    const imgKey = process.env.REACT_APP_imgKey;


    const handleAddProducts = (data) => {
        const image = data.image[0]
        const formData = new FormData()
        formData.append('image', image)
        const uri = `https://api.imgbb.com/1/upload?key=${imgKey}`
        fetch(uri, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(upload => {
                if (upload.success) {

                    //stored data from mongoDB
                    const productData = {
                        product_name: data.product_name,
                        product_price: data.product_price,
                        location: data.location,
                        mobile: data.mobile,
                        marketPrice: data.marketPrice,
                        purchase_year: data.purchase_year,
                        brand_name: data.brand_name,
                        image: upload.data.url,
                        condition: data.condition,
                        userEmail: user?.email,
                        time: time,
                        productDetails: data.productDetails,
                    }
                    fetch(`http://localhost:5000/allProduct?email=${user?.email}`, {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `bearer ${localStorage.getItem('Access-token')}`
                        },
                        body: JSON.stringify(productData)
                    })
                        .then(res => res.json())
                        .then(result => {
                            console.log(result);
                            toast.success('Product add successfully');
                            navigate('/dashboard/myProduct')
                        })
                }
            })




    }


    return (
        <div className='w-full p-7'>
            <h2 className="text-4xl font-semibold">Add your Products</h2>
            <form className='grid md:grid-cols-2 lg:grid-cols-2 gap-6' onSubmit={handleSubmit(handleAddProducts)}>

                <div className='left w-ful'>
                    <div className="form-control w-full">
                        <label className="label"> <span className="label-text">Product Name</span></label>
                        <input type="text" {...register("product_name", {
                            required: "product_name is Required"
                        })} className="input input-bordered w-full" placeholder="Product name" />
                        {errors.product_name && <p className='text-red-500'>{errors.product_name.message}</p>}
                    </div>
                    <div className="form-control w-full">
                        <label className="label"> <span className="label-text">Product Price</span></label>
                        <input type="text" {...register("product_price", {
                            required: "product Price is Required"
                        })} className="input input-bordered w-full" placeholder="Product price" />
                        {errors.product_price && <p className='text-red-600'>{errors.product_price.message}</p>}
                    </div>
                    <div className="form-control w-full">
                        <label className="label"> <span className="label-text">Product Location</span></label>
                        <input type="text" {...register("location", {
                            required: "location is Required"
                        })} className="input input-bordered w-full" placeholder="Your location" />
                        {errors.location && <p className='text-red-500'>{errors.location.message}</p>}
                    </div>
                    <div className="form-control w-full">
                        <label className="label"> <span className="label-text">Mobile Number</span></label>
                        <input type="text" {...register("mobile", {
                            required: "mobile number is Required"
                        })} className="input input-bordered w-full" placeholder="Your phone" />
                        {errors.mobile && <p className='text-red-600'>{errors.mobile.message}</p>}
                    </div>
                    <div className="form-control w-full">
                        <label className="label"> <span className="label-text">Market Price</span></label>
                        <input type="text" {...register("marketPrice", {
                            required: "Market Price is Required"
                        })} className="input input-bordered w-full" placeholder="Market price" />
                        {errors.productName && <p className='text-red-500'>{errors.productName.message}</p>}
                    </div>

                    <div className="form-control w-full">
                        <label className="label"> <span className="label-text">Year of purchase</span></label>
                        <input type="text" {...register("purchase_year", {
                            required: "Year purchase is Required"
                        })} className="input input-bordered w-full" placeholder="Year" />
                        {errors.purchase_year && <p className='text-red-500'>{errors.purchase_year.message}</p>}
                    </div>
                </div>
                <div className='right'>
                    <div className="form-control w-full">
                        <label className="label"> <span className="label-text"> brand name</span></label>
                        <select name="brand_name" {...register("brand_name", { required: true })} className="select select-bordered w-full">
                            <option value='Hp'> Hp </option>
                            <option value='Lenovo'> Lenovo </option>
                            <option value='Toshiba'> Toshiba </option>
                        </select>
                    </div>

                    <div className="form-control w-full">
                        <label className="label"> <span className="label-text">Image</span></label>
                        <input type="file" {...register("image", {
                            required: "Image is Required"
                        })} className="input input-bordered w-full" placeholder="Product image" />
                        {errors.image && <p className='text-red-600'>{errors.image.message}</p>}
                    </div>

                    <div className="form-control w-full">
                        <label className="label"> <span className="label-text">Condition type</span></label>
                        <input type="text" {...register("condition", {
                            required: "Condition type is Required"
                        })} className="input input-bordered w-full" placeholder="Product condition" />
                        {errors.condition && <p className='text-red-600'>{errors.condition.message}</p>}
                    </div>
                    <div className="form-control w-full">
                        <label className="label"> <span className="label-text">Details</span></label>
                        <textarea style={{ height: '150px' }}  {...register("productDetails", { required: "productDetails Required" })} placeholder='Your Product details' rows="10" className='input input-bordered w-full'></textarea>
                        {errors.productDetails && <p className='text-red-600'>{errors.productDetails.message}</p>}
                    </div>
                </div>
                <input className='btn btn-accent w-full mt-4' value="Add Your Product" type="submit" />
            </form>
        </div>

    );
};

export default AddProduct;