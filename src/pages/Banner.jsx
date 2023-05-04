import React from 'react';
import img from '../../public/Assets/burger.png'
const Banner = () => {
    return (
        <div className='text-white font-semibold z-10  mt-12 relative md:h-screen'>
            <div className='bg-orange-800 absolute w-[450px] top-0 blur-2xl rounded-full overflow-hidden opacity-30  -left-48   h-[450px] -z-10'></div>
            <div className='bg-blue-900 absolute md:w-96  blur-2xl rounded-full overflow-hidden opacity-30 top-52 -right-12  h-96 -z-10'></div>
            <div className='md:flex items-center px-4 md:px-0'>
                <h1 className='tracking-wider   md:leading-[5rem] text-3xl md:text-7xl'>Get Cooking: Delicious Recipes for Every <span className='text-orange-500'>Meal</span>, Every Day!</h1>
                <img className='w-full' src={img} alt="" />
            </div>
        </div>
    );
};

export default Banner;