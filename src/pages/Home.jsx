import React from 'react';
import Navbar from '../shared/Navbar';
import Footer from '../shared/Footer';
import Banner from './Banner';

const Home = () => {
    return (
        <div className='bg-[#01051e] h-screen '>
            <div className='md:w-[80%] mx-auto'>

            <Navbar></Navbar>
            <Banner></Banner>
            </div>
            {/* <Footer></Footer> */}
        </div>
    );
};

export default Home;