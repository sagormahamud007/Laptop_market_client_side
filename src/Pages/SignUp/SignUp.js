import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../Context/ContextProvider';

const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate()
    const { createUser } = useContext(AuthContext)
    const [error, setError] = useState('')

    const handleSignUp = (data) => {

        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                toast.success('User Create Successfully');
                navigate('/')
                console.log(user);
            })
            .catch(error => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setError(errorMessage)
            })
    }
    return (
        <div className='grid md:grid-cols-1 lg:grid-cols-2 gap-8'>
            <div>
                <img src="https://cdni.iconscout.com/illustration/premium/thumb/user-account-sign-up-4489360-3723267.png" alt="" />
            </div>
            <form className='ml-10 mt-14' onSubmit={handleSubmit(handleSignUp)}>
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

export default SignUp;