import React, { useContext } from 'react';
import { LiaServicestack } from 'react-icons/lia';
import { Link, NavLink } from 'react-router-dom';
import AuthContext from '../provider/AuthContext';

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  return (
    <div className="navbar fixed z-10   bg-[#fb110d] text-white px-8 flex justify-between w-full mx-auto">
      {/* Logo Section */}
      <div className="flex text-white items-center">
        <LiaServicestack className="text-3xl " />
        <Link to="/" className="logo-name  text-2xl p-0 ml-2">
          ServeWISH
        </Link>
      </div>

      {/* Navigation Links */}
      <div className="flex items-center gap-4">
        {/* Mobile Dropdown */}
        <div className="dropdown text-white z-50 lg:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu right-0 text-black menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow"
          >
            <NavLink
              to="/"
              className={({ isActive }) =>
                `py-2 px-3 rounded-md ${
                  isActive ? ' bg-green-300' : 'bg-white'
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                `py-2 px-3 rounded-md ${
                  isActive ? ' bg-green-300' : 'bg-white'
                }`
              }
            >
              Services
            </NavLink>
            {user?.email && (
              <>
                <NavLink
                  to="/addservice"
                  className={({ isActive }) =>
                    `py-2 px-3 rounded-md ${
                      isActive ? ' bg-green-300' : 'bg-white'
                    }`
                  }
                >
                  Add Service
                </NavLink>
                <NavLink
                  to="/myservices"
                  className={({ isActive }) =>
                    `py-2 px-3 rounded-md ${
                      isActive ? ' bg-green-300' : 'bg-white'
                    }`
                  }
                >
                  My Services
                </NavLink>
                <NavLink
                  to="/myreviews"
                  className={({ isActive }) =>
                    `py-2 px-3 rounded-md ${
                      isActive ? ' bg-green-300' : 'bg-white'
                    }`
                  }
                >
                  My Reviews
                </NavLink>
                <button
                  onClick={logOut}
                  className="py-2 px-3 rounded-md bg-white"
                >
                  LogOut
                </button>
              </>
            )}
            {!user?.email && (
              <>
                <NavLink
                  to="/register"
                  className={({ isActive }) =>
                    `py-2 px-3 rounded-md ${
                      isActive ? ' bg-green-300' : 'bg-white'
                    }`
                  }
                >
                  Register
                </NavLink>
                <NavLink
                  to="/login"
                  className={({ isActive }) =>
                    `py-2 px-3 rounded-md ${
                      isActive ? ' bg-green-300' : 'bg-white'
                    }`
                  }
                >
                  LogIn
                </NavLink>
              </>
            )}
          </ul>
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex gap-6">
          <Link to="/" className="text-lg  p-2 hover:underline">
            Home
          </Link>
          <Link
            to="/services"
            className="text-lg  p-2 hover:underline"
          >
            Services
          </Link>
          {user?.email && (
            <>
              <Link
                to="/addservice"
                className="text-lg  p-2 hover:underline"
              >
                Add Service
              </Link>
              <Link
                to="/myservices"
                className="text-lg  p-2 hover:underline"
              >
                My Services
              </Link>
              <Link
                to="/myreviews"
                className="text-lg  p-2 hover:underline"
              >
                My Reviews
              </Link>
            </>
          )}
        </div>

        {/* User Profile */}
        <div className="relative group flex items-center">
          {user?.photoURL ? (
            <img
              className="md:w-12 md:h-12 w-9 h-9 rounded-full border-2 border-white"
              src={user.photoURL}
              alt="profile"
            />
          ) : null}
          {user?.displayName && (
            <div className="absolute left-1/2 transform -translate-x-1/2 top-14 bg-gray-700 text-white text-sm px-2 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {user.displayName}
            </div>
          )}
        </div>
        {user?.email ? (
          <button
            onClick={logOut}
            className="hidden lg:block text-lg bg-white rounded-md text-gray-700 px-4 py-2"
          >
            LogOut
          </button>
        ) : (
          <div className="hidden lg:flex gap-4">
            <Link
              to="/register"
              className="text-lg text-white p-2 hover:underline"
            >
              Register
            </Link>
            <Link
              to="/login"
              className="text-lg bg-[#fb110d] rounded-md text-white px-4 py-2"
            >
              LogIn
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
