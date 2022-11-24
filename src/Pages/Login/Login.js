import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../Context/ContextProvider';


const Login = () => {
    const [error, setError] = useState('')
    const { userSignIn } = useContext(AuthContext)
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleSignInUser = (data) => {
        userSignIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                toast.success('Login successfully')
                navigate('/')
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
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6QTESaLQXNJDpokdt6XZd3CmvIevt1VKmGQ&usqp=CAU" alt="" className='w-3/5 ml-10' />
            </div>
            <form className=' mt-14' onSubmit={handleSubmit(handleSignInUser)}>
                <div className="form-control">
                    <label className="label"><span className="label-text">Email</span></label>
                    <input type="email" {...register("email",
                        {
                            required: 'Email is required'
                        })} className="input input-bordered w-full max-w-xs" />
                    <span>{errors.email && <p className='text-red-600'>{errors.email?.message}</p>}</span>
                </div>
                <p className='text-red-600'>{error}</p>
                <div className="form-control ">
                    <label className="label"><span className="label-text">Password</span></label>
                    <input type='password' {...register("password", {

                    })} className="input input-bordered w-full max-w-xs" />
                    <span>{errors.password && <p className='text-red-600'>{errors.password?.message}</p>}</span>
                </div>
                <input className='btn btn-accent w-full max-w-xs mt-5' value='Sign In' type="submit" />
            </form>
        </div>
    );
};

export default Login;