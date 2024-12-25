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
    <Card className="w-96 mx-auto">
    <CardHeader shadow={false} floated={false} className="h-96">
      <img
        src={service.image}
        alt="card-image"
        className="h-full w-full object-cover"
      />
    </CardHeader>
    <CardBody>
      <div className="mb-2 flex items-center justify-between">
        <Typography color="blue-gray" className="font-bold">
         {service.title}
        </Typography>
        <Typography color="blue-gray" className="font-bold">
          ${service.price}
        </Typography>
      </div>


      <Typography
        variant="small"
        color="gray"
        className="font-normal opacity-75 bg-green-300 w-1/2 rounded-2xl text-center text-black mb-2"
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
    <CardFooter className="pt-0">
    <Link to={`/services/${service._id}`}>
    <Button 
        ripple={false}
        fullWidth={true}
        className="bg-green-900 text-white shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
      >
       See Details
      </Button></Link>
    </CardFooter>
  </Card>
  );
};

export default ServiceCard;


 
