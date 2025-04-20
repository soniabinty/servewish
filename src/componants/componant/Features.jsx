import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Loading from '../../componants/Shared/Loading'


const Features = () => {

  const [loading , setLoading] = useState(true)
  const [features , setFeatures] = useState([])
  useEffect(() => {
   
    axios
  .get('https://servewish-server.vercel.app/features')
  .then((response) => {
    setFeatures(response.data);
    setLoading(false)
  })
 
   
 
}, []);

if(loading) {
  return <Loading></Loading>
}

  return (
   <div className=''>
    
    <h1 className='text-center md:text-4xl text-2xl font-bold text-[#fb110d]'>Feature Services</h1>
      <p className='text-center px-2 md:px-0 '>We are Always with you. Get our Feature collection.</p>
     <div className='md:grid lg:grid-cols-4 md:grid-cols-3 gap-2 p-3 md:px-6 lg:px-12'>

{
  features.map((feature =>(
    <div class="flex flex-col bg-white shadow-sm border border-slate-200 py-3 rounded-lg my-6 ">
    <div class=" overflow-hidden   flex justify-center items-center">
      <img class="h-[200px] w-full mt-2 object-cover" src={feature.image} alt="profile-picture" />
    </div>
    <div class="text-start pl-3 mt-2">
        <p
        class="text-md font-semibold text-slate-500 uppercase">
       ${feature.price}
      </p>
      <h4 class="mb-1 text-xl font-semibold text-slate-800">
        {feature.title}
      </h4>
    
      <p class="text-base text-slate-600 mt-2 font-light ">
      {feature.description?.substring(0, 100)}.....
      </p>
    </div>
    <div class="flex justify-start px-4 py-2 ">
   <Link to={`/services/${feature._id}`}>
   <button class="min-w-32 bg-[#fb110d]  rounded-md bg-slate-800 p-2  border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
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
