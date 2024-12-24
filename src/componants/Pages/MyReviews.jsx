import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../provider/AuthContext';
import axios from 'axios';

const MyReviews = () => {

  const{user}=useContext(AuthContext)
  const [reviews ,setReviews ] = useState([])

  useEffect(() => {
  

     
      axios
        .get(`http://localhost:5000/reviews?email=${user.email}`)
        .then((response) => {
         setReviews(response.data);
        })

    
  
  }, [user.email]);
  return (
    <div>
      <h2>{reviews.length}</h2>
      
    </div>
  );
};

export default MyReviews;