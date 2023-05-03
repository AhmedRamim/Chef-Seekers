import React from 'react';
import Navbar from '../shared/Navbar';
import Footer from '../shared/Footer';
import Banner from './Banner';
import Chefs from './Chefs';

const Home = () => {
    return (
        <div className='bg-[#01051e] '>
            <div className='md:w-[80%] mx-auto'>

            <Navbar></Navbar>
            <Banner></Banner>
            <Chefs></Chefs>
            </div>
            <Footer></Footer>
            {/* <Footer></Footer> */}
        </div>
    );
};

export default Home;