import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CountUp from 'react-countup';
import { GoCodeReview } from 'react-icons/go';
import { LuUserRoundPlus } from 'react-icons/lu';
import { MdMiscellaneousServices } from 'react-icons/md';

const Count = () => {
 const [reviews,  setReviews] = useState([]);
 const [users,  setUsers] = useState([]);
 const [services,  setServices] = useState([]);
 useEffect(() => {

   
    axios
      .get('https://servewish-server.vercel.app/review')
      .then((response) => {
        setReviews(response.data);
      })
      axios
      .get('https://servewish-server.vercel.app/users')
      .then((response) => {
        setUsers(response.data);
      })

      axios
      .get('https://servewish-server.vercel.app/service')
      .then((response) => {
        setServices(response.data);
      })
 
}, []);


  return (
   <div>
     <div className='md:flex justify-between items-center md:mx-6 lg:mx-12 mx-4 max-sm:space-y-4  bg-yellow-100 text-black  md:px-[160px] py-10 my-14  rounded-lg'>

<div className='text-center  space-y-2'>

<LuUserRoundPlus className='text-3xl font-bold mx-auto mb-3 '/>

<CountUp className='text-4xl font-bold' end={users.length} duration={5} />
<h1 className='text-3xl font-bold'>Users</h1>

</div>

<div className='text-center space-y-2'>

<MdMiscellaneousServices className='text-3xl font-bold mx-auto mb-3 '/>

<CountUp className='text-4xl font-bold' end={services.length} duration={5} />
<h1 className='text-3xl font-bold'>Services</h1>

</div>



    <div className='text-center space-y-2'>

    <GoCodeReview className='text-3xl font-bold mx-auto mb-3 '/>
   
    <CountUp className='text-4xl font-bold' end={ reviews.length} duration={5} />
 <h1 className='text-3xl font-bold'>Reviews</h1>

    </div>

    

   
    
  </div>
   </div>
  );
};

export default Count;