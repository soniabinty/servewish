import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Shared/Navbar';

const Root = () => {
  return (
    <div className=''>
     <nav className=''>
     <Navbar></Navbar>
     </nav>
      <Outlet></Outlet>
      
    </div>
  );
};

export default Root;