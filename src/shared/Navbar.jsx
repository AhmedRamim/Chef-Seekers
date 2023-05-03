import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const Navbar = ({ color }) => {
    const { user ,logOut} = useContext(AuthContext)
    const handleLogOut = () =>{
        logOut()
        .then(result => {})
        .then(error => {
            console.log(error);
        })
    }
    return (
        <div className={`${color ? 'text-black shadow-2xl rounded-lg p-4' : 'text-white'} flex justify-between pt-12`}>
            <h1 className='text-4xl font-bold'>Chef <span className='text-orange-500'>Seekers</span></h1>
            <nav>
                <ul className='flex  space-x-11 text-lg font-semibold'>
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive ? "text-blue-500" : ""
                            }
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/blog"
                            className={({ isActive }) =>
                                isActive ? "text-blue-500" : ""
                            }
                        >
                            Blog
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to="/register"
                            className={({ isActive }) =>
                                isActive ? "text-blue-500" : ""
                            }
                        >
                            Register
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <div className='font-semibold text-lg flex gap-3'>
                { user ? <NavLink onClick={handleLogOut}
                    to="/login"
                    className={({ isActive }) =>
                        isActive ? "text-blue-500" : ""
                    }
                >
                    Log Out
                </NavLink> : <NavLink
                    to="/login"
                    className={({ isActive }) =>
                        isActive ? "text-blue-500 " : ""
                    }
                >
                    Login
                </NavLink>}
            </div>
        </div>
    );
};

export default Navbar;