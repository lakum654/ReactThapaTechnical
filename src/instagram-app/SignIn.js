import React, { useState, useEffect } from 'react';
import './css/auth.css';
import { Link, useNavigate, redirect } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const SignIn = () => {    
    const { register,handleSubmit,formState: {errors}} = useForm();   
    const [Auth, setAuth] = useState(JSON.parse(localStorage.getItem('auth')));
    const [error, setError] = useState("");
    const redirect = useNavigate();
    
    const onSubmit = (inputs) => {
        if(inputs['username'] === Auth['email'] && inputs['password'] === Auth['password']) {
            setError('');
            redirect('/instagram/home');
        } else {
            setError('Username or Password are wrong..');
        }
    }

    useEffect(() => {
        setTimeout(() => {
            setError('');
        },3000)
    }, [onSubmit])
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


        {
            error && 
            <div className="sub-content text-danger">
                {error}                
            </div>
        }

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
