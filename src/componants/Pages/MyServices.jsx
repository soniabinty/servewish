import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../provider/AuthContext';
import axios from 'axios';
import { FaEdit } from 'react-icons/fa';
import { MdDeleteForever } from 'react-icons/md';

const MyServices = () => {

  const{user}=useContext(AuthContext)
  const [servs ,setServices ] = useState([])

  useEffect(() => {
  

     
      axios
        .get(`http://localhost:5000/services?email=${user.email}`)
        .then((response) => {
         setServices(response.data);
        })

    
  
  }, [user.email]);
  return (
    <div className='max-w-7xl mx-auto my-12'>
    
      <div className="overflow-x-auto rounded-none">
  <table className="table table-zebra ">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th className='md:text-xl'>Name</th>
        <th className='md:text-xl'>Category</th>
        <th className='md:text-xl'>Price</th>
        <th className='md:text-xl'>Actions</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}

      {
        servs.map((serv , idx) =>(

 <tr className='bg-green-400'>
        <th className='text-md'>{1+idx}</th>
        <td className='text-md'>{serv.title}</td>
        <td className='text-md'>{serv.category}</td>
        <td className='text-md'> ${serv.price}</td>
        <td className='flex items-center gap-4 text-center'>
        <FaEdit className='text-2xl text-green-900'/>
        <MdDeleteForever className='text-2xl text-red-900' />

        </td>
      </tr>

        ))
      }
     
    
    </tbody>
  </table>
</div>

      
      
    </div>
  );
};

export default MyServices;


