import React from 'react'
import './css/style.css';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
const SignUp = () => {    
    const { register,handleSubmit,formState: {errors}} = useForm(); 
    const redirect = useNavigate();
    
    const onSubmit = (inputs) => {
        localStorage.setItem('auth',JSON.stringify(inputs));      
        console.log(inputs)  
        redirect("/instagram/signIn");
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
            <input type="text" placeholder="First Name" className={`input-1 ${errors.firstname ? `border-1 border-danger` : ''}`} {...register("firstname", { required: true})}/>            
            <input type="text" placeholder="Last Name" className={`input-1 ${errors.firstname ? `border-1 border-danger` : ''}`} {...register("lastname", { required: true})}/>            
            <input type="text" placeholder="E-Mail" className={`input-1 ${errors.email ? `border-1 border-danger` : ''}`} {...register("email", { required: true,
            pattern: {
                value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: 'Please enter a valid email'}})}/>            
            <input type="password" placeholder="Password" className={`input-2 ${errors.password ? `border-1 border-danger` : ''}`} {...register("password", { required: true})}/>                
            <input type="submit" value="Sign up" className="btn" />
            </form>
            </div>
        </div>
        <div className="sub-content">
            <div className="s-part">
            If you have already Sign up account ?   <Link to="/instagram/signIn">Sign in</Link>
            </div>
        </div>
        </div>
    </>
    )
}

export default SignUp
