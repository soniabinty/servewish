import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ReviewBox from './ReviewBox';




const ReviewData = ({serviceId , reviews , setReviews}) => {




  useEffect(() => {
    if (serviceId) {

     
      axios
        .get(`https://servewish-server-c8u6iz51g-bintys-projects.vercel.app/review/${serviceId}`)
        .then((response) => {
          setReviews(response.data);
        })

    
       
    }
  }, [serviceId]);

  return (
    <div className=''>

      Total Reviews: {reviews?.length}

  
      {
    reviews?.map((review) =>(
      <ReviewBox review={review} key={review._id}></ReviewBox>
    ))
  }
 
    </div>
  );
};

export default ReviewData;