import React from 'react';
import { useContext } from 'react';

import { LiaServicestack } from 'react-icons/lia';
import { Link } from 'react-router-dom';
import AuthContext from '../provider/AuthContext';

const Navbar = () => {

  const {user ,logOut} = useContext(AuthContext)
  return (
  
    <div className="navbar bg-green-900 px-3">
    <div className="navbar-start">
    
    <div className='flex items-center'>
     <LiaServicestack className='text-3xl text-white' />
      <a className="logo-name btn btn-ghost text-white text-2xl p-0 ">ServeWISH
      
      </a>  
    </div>
   
  
    </div>

    <div className="navbar-end gap-4 flex ">

    <div className="dropdown text-white">
        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16" />
          </svg>
        </div>
        <ul
          tabIndex={0}
          className="menu right-0 text-black menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
          <li><a>Item 1</a></li>
          <li>
            <a>Parent</a>
            <ul className="p-2">
              <li><a>Submenu 1</a></li>
              <li><a>Submenu 2</a></li>
            </ul>
          </li>
          <li><a>Item 3</a></li>
        </ul>
      </div>

    <div className=" hidden lg:flex  ">
  <div className='flex gap-6'>
     
   <Link className='text-lg rounded-md text-white p-2 hover  hover:border'>Home</Link>
   <Link className='text-lg rounded-md text-white p-2 hover hover:border'>Services</Link>
  </div>
  
 </div>



 <div className="relative group">
  {user?.photoURL ? (
    <img
      className="w-12 h-12 rounded-full border-2 border-white"
      src={user.photoURL}
      alt="profile"
    />
  ) : (
   ''
  )}
  {user?.displayName && (
    <div className="absolute left-1/2 transform -translate-x-1/2 top-14 bg-gray-700 text-white text-sm px-2 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      {user.displayName}
    </div>
  )}
</div>
       
{
  user && user.email ? (
<Link onClick={logOut} className='text-lg hidden lg:flex bg-white rounded-md text-gray-400 p-2'>LogOut</Link>) : (<>
    
<div className='flex gap-4 pr-3'>
<Link to={'/register'} className='text-lg hidden lg:flex rounded-md text-white p-2 hover hover:border'>Register</Link> 

<Link to={'/login'} className='text-lg hidden lg:flex bg-white rounded-md text-gray-400 p-2'>LogIn</Link>
</div>

</>
 )
}
    </div>
  </div>
  );
};

export default Navbar;