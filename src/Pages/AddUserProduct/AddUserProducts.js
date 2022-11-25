import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/ContextProvider';

const AddUserProducts = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { user } = useContext(AuthContext)
    const navigate = useNavigate()
    // const time= moment().format('')
    const imageKey = process.env.IMAGE_KEY;
    console.log(imageKey);


    return (
        <div>

        </div>
    );
};

export default AddUserProducts;