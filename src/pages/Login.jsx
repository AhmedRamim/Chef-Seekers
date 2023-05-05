import React, { useContext, useState } from 'react';
import Navbar from '../shared/Navbar';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const Login = () => {
    const [error,setError ] = useState('')
    const navigate = useNavigate()
    const location = useLocation()
    const {signIn,googleUser,githubUser} = useContext(AuthContext)
    const pathname = location.state?.from?.pathname || '/'
    const handleSubmit = (e) => {
        setError('')
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email,password)
        .then(result => {
            const loggedUser = result.user;
            toast('Login Successfully')
            navigate(pathname)
            
        })
        .catch(error => {
            setError(error.message);
            
        })
    
    }
    const handleGoogle = () => {
        googleUser()
            .then(result => {
                // console.log(result.user);
                navigate(pathname)
            })
            .catch(error => {
                console.log(error);
            })
    }
    const handleGithub = () => { 
        githubUser()
            .then(result => {
                // console.log(result.user);
                navigate(pathname)

            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div className='md:w-[80%] mx-auto'>
            <Navbar color={'black'}></Navbar>
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold my-6">Login now!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' required placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input name='password' required type="password" placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                                <ToastContainer></ToastContainer>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <p>Are you new here?<Link className='btn btn-link' to='/register'>Register</Link></p>
                            <p className='text-error'>{error}</p>
                        </form>
                        <button onClick={handleGoogle} className='btn btn-outline my-2'> <FaGoogle></FaGoogle>  <span className='ml-4'>Google</span></button>
                        <button onClick={handleGithub} className='btn btn-outline'> <FaGithub></FaGithub> <span className='ml-4'>Github</span></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;