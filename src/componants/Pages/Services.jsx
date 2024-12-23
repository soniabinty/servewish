import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ServiceCard from '../componant/ServiceCard';

const Services = () => {
  const services = useLoaderData()
 
  return (
  <div className='max-w-7xl mx-auto'>
      <div className='md:grid grid-cols-3'>
  {
    services.map((service) =>(
      <ServiceCard service={service} key={service._id}></ServiceCard>
    ))
  }
      
    </div>
  </div>
  );
};

export default Services;