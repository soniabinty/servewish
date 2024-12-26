import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';



const Features = () => {


  const [features , setFeatures] = useState([])
  useEffect(() => {
   
    axios
  .get('https://servewish-server-c8u6iz51g-bintys-projects.vercel.app/features')
  .then((response) => {
    setFeatures(response.data);
  })
 
   
 
}, []);



  return (
   <div>
    
    <h1 className='text-center md:text-3xl text-xl font-bold text-green-900'>Feature Services</h1>
      <p className='text-center '>We are Always with you. Get our Feature collection.</p>
     <div className='md:grid grid-cols-3 gap-10 p-3n md:px-6'>

{
  features.map((feature =>(
    <div class="flex flex-col bg-white shadow-sm border border-slate-200 rounded-lg my-6 ">
    <div class="m-2.5 overflow-hidden rounded-md h-80 flex justify-center items-center">
      <img class="w-full h-full object-cover" src={feature.image} alt="profile-picture" />
    </div>
    <div class="p-6 text-center">
      <h4 class="mb-1 text-xl font-semibold text-slate-800">
        {feature.title}
      </h4>
      <p
        class="text-sm font-semibold text-slate-500 uppercase">
       ${feature.price}
      </p>
      <p class="text-base text-slate-600 mt-4 font-light ">
      {feature.description?.substring(0, 100)}.....
      </p>
    </div>
    <div class="flex justify-center p-6 pt-2 gap-7">
   <Link to={`/services/${feature._id}`}>
   <button class="min-w-32 bg-green-900  rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
       See Details
      </button></Link>
    </div>
  </div>
  )))
}
</div>
   </div>
  );
};

export default Features;
