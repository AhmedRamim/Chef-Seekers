import React from 'react';
import img from '../../public/Assets/burger.png'
const Banner = () => {
    return (
        <div className='text-white text-6xl font-semibold flex items-center '>
            <h1 className='md:w-1/2 tracking-wider divide-y-4'>Discover Delicious <span className='text-orange-500'>Recipes</span> for Every Meal of the Day</h1>
            <img src={img} alt="" />
        </div>
    );
};

export default Banner;