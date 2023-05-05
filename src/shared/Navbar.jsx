import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const Navbar = ({ color }) => {
  const { user, logOut } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogOut = () => {
    logOut()
      .then(result => {})
      .catch(error => {
        console.log(error);
      });
  };

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className={`${color ? 'text-black shadow-2xl rounded-lg p-4' : 'text-white'} flex  md:flex-row flex-wrap justify-between pt-12`}>
      <div className="flex items-center">
        <h1 className="text-4xl font-bold">Chef <span className="text-orange-500">Seekers</span></h1>
      </div>
      <div className="flex flex-row flex-wrap items-start md:hidden mt-3 md:mt-0">
        <button className="mobile-menu-button" onClick={handleMenuClick}>
          <svg className={`${color ? 'text-black' : 'text-white'} w-6 h-6`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
      <div className={`md:flex md:items-center ${isMenuOpen ? 'flex' : 'hidden'} pt-4 md:pt-0`} onClick={closeMenu}>
        <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-11 text-lg font-semibold">
          <li>
            <NavLink to="/" className={({isActive}) => isActive? 'text-blue-500' : ''} >Home</NavLink>
          </li>
          <li>
            <NavLink to="/blog" className={({isActive}) => isActive? 'text-blue-500' : ''} >Blog</NavLink>
          </li>
          <li>
            <NavLink to="/register" className={({isActive}) => isActive? 'text-blue-500' : ''} >Register</NavLink>
          </li>
          {user ?
            <li className="flex gap-3 items-center">
              <NavLink to='#'  onClick={handleLogOut}>Log Out</NavLink>
              <div className="w-10 rounded-full">
                <img className="rounded-full" title={user?.displayName} src={user?.photoURL} alt={user?.displayName} />
              </div>
            </li>
            :
            <li>
              <NavLink to="/login" className={({isActive}) => isActive? 'text-blue-500' : ''} >Login</NavLink>
            </li>
          }
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
