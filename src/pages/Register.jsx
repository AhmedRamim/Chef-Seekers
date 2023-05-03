import React, { useContext } from 'react';
import Navbar from '../shared/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';

const Register = () => {
    const {createUser} = useContext(AuthContext)
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photoUrl = form.photoUrl.value;
        createUser(email,password)
        .then(result => {
            const createUser = result.user;
           
            
            navigate('/login')
            
        })
        .catch(error => {
            toast(error.message)
        })
        console.log(name,email,password,photoUrl);
        
    }

    // const 
    return (
        
        <div className='w-[80%] mx-auto'>
            <Navbar color={'black'}></Navbar>
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col mt-6">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold my-6">Register now!</h1>
                    </div>
                    <ToastContainer></ToastContainer>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' required placeholder="Name here" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" name='photoUrl' required placeholder="Photo Url" className="input input-bordered" />
                            </div>
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
                                
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                            <p>Already have an account? <Link className='btn btn-link' to='/login'>Login</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;