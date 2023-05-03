import React, { useContext } from 'react';
import Navbar from '../shared/Navbar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';

const Login = () => {
    const {signIn} = useContext(AuthContext)
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email,password)
        .then(result => {
            const loggedUser = result.user;
            toast('Login Successfully')
            console.log(loggedUser);
        })
        .catch(error => {
            toast(error.message);
        })
        console.log(email,password);
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
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;