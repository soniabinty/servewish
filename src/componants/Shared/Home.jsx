import React from 'react';
import Count from '../componant/Count';
import Features from '../componant/Features';
import FindService from '../componant/FindService';



const Home = () => {
  return (
    <div className='max-w-7xl mx-auto'>
     
     <Features></Features>
    <FindService></FindService>
       <Count></Count>
    </div>
  );
};

export default Home;