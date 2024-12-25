import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ReviewBox from './ReviewBox';




const ReviewData = ({serviceId}) => {
  const [reviews,  setReviews] = useState([]);



  useEffect(() => {
    if (serviceId) {

     
      axios
        .get(`http://localhost:5000/review/${serviceId}`)
        .then((response) => {
          setReviews(response.data);
        })

    
       
    }
  }, [serviceId]);

  return (
    <div className=''>

      Total Reviews: {reviews.length}

  
      {
    reviews.map((review) =>(
      <ReviewBox review={review} key={review._id}></ReviewBox>
    ))
  }
 
    </div>
  );
};

export default ReviewData;