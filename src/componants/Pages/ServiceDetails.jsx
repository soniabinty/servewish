import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
 
} from "@material-tailwind/react";
import { HiMiniCalendarDateRange } from 'react-icons/hi2';
import ReviewInput from '../componant/ReviewInput';
import ReviewData from '../componant/ReviewData';




 

const ServiceDetails = () => {
 
  const service = useLoaderData()
   const [reviews,  setReviews] = useState([]);

  return (
 <div className='w-11/12 bg-pink mx-auto py-12 md:flex md:gap-12'>
 

  <div>
         <Card className="w-full my-12 max-w-[48rem] md:flex-row">
    <CardHeader
      shadow={false}
      floated={false}
      className="m-0 md:w-2/5 shrink-0 md:rounded-r-none "
    >
      <img
        src={service.image}
        alt="card-image"
        className="h-full w-full object-cover"
      />
    </CardHeader>
    <CardBody>
      <Typography variant="h6" color="gray" className="mb-4 uppercase">
       {service.company} 
      </Typography>
      <Typography variant="h4"  className="mb-2 text-[#fb110d]">
       {service.title}
      </Typography>


      <Typography variant="h6" color="blue-gray" className="mb-2">
       {service.category}
      </Typography>
      <Typography color="gray" className=" mb-2 font-normal">
      {service.description}
      </Typography>

 <div className='md:flex gap-[50px]'>

 <Typography color="blue-gray" className="font-bold mb-2 ">
          ${service.price}
        </Typography>


        <Typography color="gray" className=" mb-2 font-normal flex items-center md:gap-2">

        <HiMiniCalendarDateRange className='text-xl'/>
      {service.addedDate}
      </Typography>


 </div>

        <Typography color="gray" className="font-bold flex md:gap-2">
      More Details: 
      <Typography color="blue" className="font-normal">
  <a href={service.website} target="_blank" rel="noopener noreferrer">
    {service.website}
  </a>
</Typography> 
      </Typography>  


   
    </CardBody>
  </Card>

<ReviewInput reviews={reviews} title={service.title} setReviews={setReviews}  serviceId={service._id}></ReviewInput>

  </div>
<div>
  
</div>
<ReviewData reviews={reviews} setReviews={setReviews} serviceId={service._id}></ReviewData>

 </div>
  );
};

export default ServiceDetails;










