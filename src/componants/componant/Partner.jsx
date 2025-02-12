import React from 'react';
import { FaAmazon } from 'react-icons/fa';
import Marquee from "react-fast-marquee";
import { FcAutomotive, FcCloseUpMode, FcHome, FcPlus, FcServices, FcShipped } from 'react-icons/fc';
const Partner = () => {
  return (
<div className='mx-12'>
<h1 className='text-center   md:text-4xl font-bold text-xl text-[#fb110d] md:mb-7 my-8 mb-6'>Meet Our Partners</h1>
     
<Marquee>
  <div className='flex gap-8 '>
      <div class="w-40 text-center">
  <FaAmazon className='mx-auto text-3xl' />
  <p
        class="text-lg font-semibold text-slate-500 uppercase">
        Amazon
      </p>
      <p class="text-base text-slate-600 mt-4 font-light ">
        A e-comerce collaboration with us and they helps us always.
      </p>
  
 
  </div>
    <div class="w-40 text-center">
      <FcAutomotive  className='mx-auto text-3xl' />
  <p
        class="text-lg font-semibold text-slate-500 uppercase">
       Dibbo
      </p>
      <p class="text-base text-slate-600 mt-4 font-light ">
        A transportal collaboration with us and they helps us always.
      </p>
  
 
  </div>
  <div class="w-40 text-center">
      <FcHome className='mx-auto text-3xl' />
  <p
        class="text-lg font-semibold text-slate-500 uppercase">
      E-hOME
      </p>
      <p class="text-base text-slate-600 mt-4 font-light ">
        A Interior design collaboration with us and they helps us always.
      </p>
  
 
  </div>

  <div class="w-40 text-center">
  <FcServices className='mx-auto text-3xl' />
  <p
        class="text-lg font-semibold text-slate-500 uppercase">
      Servo
      </p>
      <p class="text-base text-slate-600 mt-4 font-light ">
        A home decoration collaboration with us and they helps us always.
      </p>
  
 
  </div>

  
  <div class="w-40 text-center">
  <FcShipped className='mx-auto text-3xl' />
  <p
        class="text-lg font-semibold text-slate-500 uppercase">
      Shipa
      </p>
      <p class="text-base text-slate-600 mt-4 font-light ">
        A transportal collaboration with us and they helps us always.
      </p>
  
 
  </div>

  
  <div class="w-40 text-center">
  <FcCloseUpMode className='mx-auto text-3xl' />
  <p
        class="text-lg font-semibold text-slate-500 uppercase">
      rOSEY
      </p>
      <p class="text-base text-slate-600 mt-4 font-light ">
        A Beauty & sPA collaboration with us and they helps us always.
      </p>
  
 
  </div>



  <div class="w-40 text-center">
  <FcPlus className='mx-auto text-3xl' />
  <p
        class="text-lg font-semibold text-slate-500 uppercase">
     sures
      </p>
      <p class="text-base text-slate-600 mt-4 font-light ">
        A medical help collaboration with us and they helps us always.
      </p>
  
 
  </div>
  </div>
 



</Marquee>
</div>
 
  );
};

export default Partner;