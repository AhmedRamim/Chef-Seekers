import React from 'react';
import Navbar from '../shared/Navbar';
import Footer from '../shared/Footer';

const Blog = () => {
    return (
        <div className='md:w-[80%] mx-auto'>
            <Navbar color={'black'}></Navbar>
            <h1>Blogs</h1>
            <Footer></Footer>
        </div>
    );
};

export default Blog;