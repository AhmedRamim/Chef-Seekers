import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const Navbar = ({ color }) => {
    const { user, logOut } = useContext(AuthContext)
    console.log(user?.photoURL);
    const handleLogOut = () => {
        logOut()
            .then(result => { })
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
            <div className='font-semibold text-lg '>
                {user ? <div className='flex gap-3 items-center'>
                    <NavLink onClick={handleLogOut}
                        to="/login"
                        className={({ isActive }) =>
                            isActive ? "text-blue-500" : ""
                        }
                    >
                        Log Out
                    </NavLink>
                    <div className="w-10 rounded-full">
                        <img className='rounded-full' title={user && user?.displayName} src={ user && user?.photoURL} />
                    </div>
                </div> : <NavLink
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