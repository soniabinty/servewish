import React from 'react';
import fashion from '../../assets/service/friends-posing-with-paper-bags.jpg'
import service from '../../assets/service/builder.jpg'
import food from '../../assets/service/food.jpg'
import { motion } from "motion/react"
const FindService = () => {
  return (
    <div className="hero  min-h-screen md:pr-12 ">
  <div className="hero-content flex-col lg:flex-row grid grid-cols-2 gap-6">

    <div className='col-span-1 flex items-center pr-12 text-start'>

      <div className='space-y-4 '>
          <motion.img
     className='w-56 rounded-lg'
       animate={{
        x : [80, 180 ,80] }}
        transition= {{duration: 10 , delay:2 , repeat: Infinity } }
      src={fashion} />  
 <motion.img
     className='w-56 rounded-lg'
       animate={{
        x : [100, 150 ,100] }}
        transition= {{duration: 10 , delay:4 , repeat: Infinity } }
      src={service} />  
      </div>

     <div className='py-5'>
     <motion.img
     className='w-56 rounded-lg'
       animate={{
        x : [100, 150 ,100] }}
        transition= {{duration: 10 , delay:2 , repeat: Infinity } }
      src={food} />  
   
     </div>
      
    </div>
   
    <div className='md:pr-6'>
      <h1 className="text-5xl font-bold col-span-1">Find the perfect service for your need!!!</h1>
      <p className="py-6 ">
      Services contain all the service features and offers you need to  and customize an entire service. No VAT required.
      </p>
      <button className="btn bg-green-900 text-white">Browse Services</button>
    </div>
  </div>
</div>
  );
};

export default FindService;