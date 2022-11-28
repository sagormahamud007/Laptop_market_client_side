import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../Context/ContextProvider';
import useToken from '../../CustomHooks/useToken/useToken';


const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [error, setError] = useState('')
    const { userSignIn, googleSign } = useContext(AuthContext)
    const [userEmail, setUserEmail] = useState('')
    const [token] = useToken(userEmail)
    const navigate = useNavigate()
    const location = useLocation()

    const from = location.state?.from?.pathname || '/';

    if (token) {
        navigate(from, { replace: true });
    }

    const handleSignInUser = (data) => {
        setError('')
        userSignIn(data.email, data.password)

            .then(result => {
                setUserEmail(data.email)
                toast.success('Login successfully')
            })
            .catch(error => {
                const errorMessage = error.message;
                setError(errorMessage)
            })
    }

    const handleGoogleSignIn = () => {
        googleSign()
            .then(result => {
                const user = result.user;
                const name = user.displayName;
                const email = user.email;
                const role = "bayer";
                storeUserDB(name, email, role)
                setUserEmail(email)
            })
            .catch(error => {
                setError(error.message)
            })
    }

    const storeUserDB = (name, email, role) => {
        const user = { name, email, role };
        fetch(`https://used-product-laptop-market-server.vercel.app/users`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                navigate(from, { replace: true });
                toast.success('User Create Successfully');
            })
    }

    return (
        <div className='grid md:grid-cols-1 lg:grid-cols-2 gap-8'>
            <div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6QTESaLQXNJDpokdt6XZd3CmvIevt1VKmGQ&usqp=CAU" alt="" className='w-3/5 ml-10' />
            </div>
            <div>
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
                    <p className='mt-3'>Create new account
                        <Link className='text-blue-500 ml-2 underline' to='/signUp'>Please Sign Up</Link></p>
                    <input className='btn btn-accent w-full max-w-xs mt-5' value='Sign In' type="submit" />
                </form>
                <button onClick={handleGoogleSignIn} className='btn btn-accent text-black  w-full max-w-xs mt-5 '>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Login;