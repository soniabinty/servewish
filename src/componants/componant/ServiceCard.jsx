import React from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { Link } from 'react-router-dom';

 

const ServiceCard = ({service}) => {



  return (
    <Card className=" mx-auto grow">
  <div className='flec flex-col grow'>
  <CardHeader shadow={false} floated={false} className="">
      <img
        src={service.image}
        alt="card-image"
        className="h-40 w-full  object-cover"
      />
    </CardHeader>
    <CardBody>
      <div className="mb-2 flex  items-center justify-between">
        <Typography color="blue-gray" className="font-bold  ">
         {service.title}
        </Typography>
        <Typography color="blue-gray" className="font-bold">
          ${service.price}
        </Typography>
      </div>


      <Typography
        variant="small"
        color="gray"
        className="font-normal opacity-75 bg-orange-200 w-1/2 rounded-2xl text-center text-black mb-2"
      >
       {service.category}
      </Typography>
      <Typography
        variant="small"
        color="gray"
        className="font-normal opacity-75"
      >
       {service.description?.substring(0, 100)}.....
      </Typography>
    </CardBody>
  </div>
    <CardFooter className="pt-0">
    <Link to={`/services/${service._id}`}>
    <Button 
        ripple={false}
        fullWidth={true}
        className="bg-[#fb110d] text-white shadow-none 0"
      >
       See Details
      </Button></Link>
    </CardFooter>
  </Card>
  );
};

export default ServiceCard;


 
