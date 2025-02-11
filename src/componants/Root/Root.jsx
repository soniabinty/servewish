import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Shared/Navbar';
import Footer from '../Shared/Footer';
import { Toaster } from 'react-hot-toast';

const Root = () => {
  return (
    <div className=''>
    
     <Navbar></Navbar>
    
      <Outlet></Outlet>
      <Footer></Footer>
      <Toaster></Toaster>
      
    </div>
  );
};

export default Root;