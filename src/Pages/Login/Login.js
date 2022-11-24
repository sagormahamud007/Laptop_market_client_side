import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const Login = () => {
    const [error, setError] = useState('')
    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleSignInUser = (data) => {

    }

    return (
        <div className='grid md:grid-cols-1 lg:grid-cols-2 gap-8'>
            <div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrXM8iKoDd_Q0oMMeqfvmXIiPM0Wbfk9H0eA&usqp=CAU" alt="" />
            </div>
            <form className='ml-10 mt-14' onSubmit={handleSubmit(handleSignInUser)}>
                <div className="form-control">
                    <label className="label"><span className="label-text">Name</span></label>
                    <input type="text" {...register("name", {
                        required: 'Must be your name'
                    })} className="input input-bordered w-full max-w-xs" />
                    <span>{errors.name && <p className='text-red-600'>{errors.name?.message}</p>}</span>
                </div>
                <p className='text-red-600'>{error}</p>

                <div className="form-control">
                    <label className="label"><span className="label-text">Email</span></label>
                    <input type="email" {...register("email",
                        {
                            required: 'Email is required'
                        })} className="input input-bordered w-full max-w-xs" />
                    <span>{errors.email && <p className='text-red-600'>{errors.email?.message}</p>}</span>
                </div>

                <div className="form-control ">
                    <label className="label"><span className="label-text">Password</span></label>
                    <input type='password' {...register("password",
                        {
                            minLength: {
                                value: 6, message: 'Password must be 6th character'
                            },
                            pattern: { value: /^(?=.*[A-Z])/, message: 'Password must be Uppercase' }
                        })} className="input input-bordered w-full max-w-xs" />
                    <span>{errors.password && <p className='text-red-600'>{errors.password?.message}</p>}</span>
                </div>
                <input className='btn btn-accent w-full max-w-xs mt-5' value='Sign Up' type="submit" />
            </form>
        </div>
    );
};

export default Login;