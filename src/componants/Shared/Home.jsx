import React from 'react';
import Count from '../componant/Count';
import Features from '../componant/Features';
import FindService from '../componant/FindService';
import FindProvider from '../componant/FindProvider';
import Banner from '../componant/Banner';
import Partner from '../componant/Partner.JSX';



const Home = () => {
  return (
    <div className='max-w-7xl mx-auto'>
     <Banner></Banner>
     <Features></Features>
    <FindService></FindService>
    <FindProvider></FindProvider>
    <Partner></Partner>
       <Count></Count>
    </div>
  );
};

export default Home;