import React from 'react';
import img from '../../public/Assets/men.gif'

const Subscribe = () => {
    return (
        <div className='md:pt-24'>
            <h1 className='text-center text-white text-5xl font-bold'>Let's Touch Us</h1>
            <div className='w-3/4 mx-auto md:grid-cols-12 grid grid-cols-1 my-20 '>
                <div className='col-span-6'>

                    <div className='card-body border rounded-xl mt-3 shadow-lg'>
                        <div className="form-control text-white">
                            <label className="label ">
                                <span className="label-text text-white">Name</span>
                            </label>
                            <input type="text" placeholder="Name" className="shadow-lg input input-bordered" />
                        </div>
                        <div className="form-control ">
                            <label className="label ">
                                <span className="label-text text-white">Email</span>
                            </label>
                            <input type="email" placeholder="Email" className="shadow-lg input input-bordered" />
                        </div>
                        <div className="form-control ">
                            <label className="label ">
                                <span className="label-text text-white">Comment</span>
                            </label>
                            <textarea className="shadow-lg border rounded-xl p-2" name="" id="" cols="30" rows="10" placeholder='Write a comment'></textarea>
                            <button className='btn btn-primary text-white mt-6'>Submit</button>
                        </div>
                    </div>
                </div>
                <div className='col-span-6 mt-16 md:ml-40'>
                    <img className='rounded-xl' src={img} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Subscribe;
