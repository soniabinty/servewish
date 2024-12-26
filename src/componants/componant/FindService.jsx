import React from 'react';
import fashion from '../../assets/service/friends-posing-with-paper-bags.jpg'
import service from '../../assets/service/builder.jpg'
import food from '../../assets/service/food.jpg'
import { motion } from "motion/react"
const FindService = () => {
  return (
    <div className="hero flex-col my-4 md:my-8  md:pr-12 ">
  <div className="hero-content flex-col lg:flex-row md:grid grid-cols-2 md:gap-6">

    <div className='col-span-1 flex items-center md:pr-12  '>

      <div className='md:space-y-4 '>
          <motion.img
     className='w-56 rounded-lg mr-6  md:ml-12'
       animate={{
        x : [80, 30,80] }}
        transition= {{duration: 10 , delay:2 , repeat: Infinity } }
      src={fashion} />  
 <motion.img
     className='w-56 rounded-lg md:flex hidden '
       animate={{
        x : [100, 150 ,100] }}
        transition= {{duration: 10 , delay:4 , repeat: Infinity } }
      src={service} />  
      </div>

     <div className='py-5'>
     <motion.img
     className='w-56 hidden md:flex rounded-lg'
       animate={{
        x : [50, 80 ,50] }}
        transition= {{duration: 10 , delay:2 , repeat: Infinity } }
      src={food} />  
   
     </div>
      
    </div>
   
    <div className='md:pr-6'>
      <h1 className="text-5xl font-bold col-span-1">Find the perfect service for your need!!!</h1>
      <p className="py-6 ">
      Services contain all the service features and offers you need to  and customize an entire service. No VAT required.
      </p>
      <button className="btn hover:bg-green-900 bg-green-900 text-white">Browse Services</button>
    </div>
  </div>
</div>
  );
};

export default FindService;