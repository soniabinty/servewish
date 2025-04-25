import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ReviewBox from './ReviewBox';
import Loading from '../Shared/Loading';




const ReviewData = ({serviceId , reviews , setReviews}) => {

  const [loading , setLoading] = useState(true)




  useEffect(() => {
    if (serviceId) {

     
      axios
        .get(`https://servewish-server.vercel.app/review/${serviceId}`)
        .then((response) => {
          setReviews(response.data);
          setLoading(false)
        })  
    }
  }, [serviceId]);
  if(loading) {
    return <Loading></Loading>
  }
  

  return (
    <div className='my-10'>

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