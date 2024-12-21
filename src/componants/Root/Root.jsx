import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Shared/Navbar';
import Footer from '../Shared/Footer';

const Root = () => {
  return (
    <div className=''>
     <nav className=''>
     <Navbar></Navbar>
     </nav>
      <Outlet></Outlet>
      <Footer></Footer>
      
    </div>
  );
};

export default Root;