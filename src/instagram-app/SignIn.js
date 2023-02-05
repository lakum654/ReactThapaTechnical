import React, { useState } from 'react';
import './css/style.css';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const SignIn = () => {    
    const { register,handleSubmit,formState: {errors}} = useForm();   
    const onSubmit = (inputs) => {
        console.table(inputs);       
    }

    
    
    return (
    <>                                
        <div id="wrapper">
        <div className="main-content">
            <div className="header">
            <img src="https://i.imgur.com/zqpwkLQ.png" />
            </div>
            <div className="l-part">
            <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder="Username" className={`input-1 ${errors.username ? `border-1 border-danger` : ''}`} {...register("username", { required: true})}/>
            {console.table(errors)}
            <div className="overlap-text">
                <input type="password" placeholder="Password" className={`input-2 ${errors.password ? `border-1 border-danger` : ''}`} {...register("password", { required: true})}/>
                <a href="#">Forgot?</a>
            </div>
            <input type="submit" value="Log in" className="btn" />
            </form>
            </div>
        </div>
        <div className="sub-content">
            <div className="s-part">
            Don't have an account ?<Link to="/instagram/signUp">Sign up</Link>
            </div>
        </div>
        </div>
    </>
    )
}

export default SignIn
