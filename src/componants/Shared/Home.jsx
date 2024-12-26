import React from 'react';
import Count from '../componant/Count';
import Features from '../componant/Features';
import FindService from '../componant/FindService';
import FindProvider from '../componant/FindProvider';



const Home = () => {
  return (
    <div className='max-w-7xl mx-auto'>
     
     <Features></Features>
    <FindService></FindService>
    <FindProvider></FindProvider>
       <Count></Count>
    </div>
  );
};

export default Home;