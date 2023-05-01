import React from 'react';
import { Outlet } from 'react-router-dom';
import Home from '../pages/Home';

const HomeLayout = () => {
    return (
        <div>
            
            <Outlet></Outlet>
            
        </div>
    );
};

export default HomeLayout;