import React from 'react';
import Count from '../componant/Count';
import Features from '../componant/Features';
import FindService from '../componant/FindService';
import FindProvider from '../componant/FindProvider';
import Banner from '../componant/Banner';
import Partner from '../componant/Partner.JSX';
import Category from '../componant/Category';



const Home = () => {
  return (
    <div >
     <Banner></Banner>
     <Features></Features>
     <Category></Category>
    <FindService></FindService>
    <FindProvider></FindProvider>
    <Partner></Partner>
       <Count></Count>
    </div>
  );
};

export default Home;