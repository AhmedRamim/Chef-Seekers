import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = ({color}) => {
    return (
        <div className={`${color ? 'text-black shadow-2xl rounded-lg p-4':'text-white'} flex justify-between pt-12`}>
            <h1 className='text-4xl font-bold'>Chef <span className='text-orange-500'>Seekers</span></h1>
            <nav >
                <ul className='flex  space-x-11 text-lg font-semibold'>
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive}) =>
                                 isActive ? "text-blue-500" : ""
                            }
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/blog"
                            className={({ isActive}) =>
                                 isActive ? "text-blue-500" : ""
                            }
                        >
                            Blog
                        </NavLink>
                    </li>
                    
                    <li>
                        <NavLink
                            to="/login"
                            className={({ isActive}) =>
                                 isActive ? "text-blue-500" : ""
                            }
                        >
                            Login
                        </NavLink>
                    </li>
                </ul>
            </nav>
                <h1>Profile</h1>
        </div>
    );
};

export default Navbar;