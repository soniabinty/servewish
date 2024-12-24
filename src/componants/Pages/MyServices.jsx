import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../provider/AuthContext';
import axios from 'axios';
import { FaEdit } from 'react-icons/fa';
import { MdDeleteForever } from 'react-icons/md';
import Swal from 'sweetalert2';
import toast from 'react-hot-toast';

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


  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {

        axios
        .delete(`http://localhost:5000/service/${id}`)
       
         
          .then((data) => {
            if (data.data.deletedCount > 0) {
                
              Swal.fire({
                title: "Good job!",
                text: "You movie has benn delete from favorite",
                icon: "success",

              
              });
              const remaining = servs.filter(s => s._id !== id)
              setServices(remaining)
   
            } else {
              toast.error("Failed to delete the movie");
            }
          })
          .catch(() => toast.error("An error occurred while deleting the movie"));
      }
    });
  };
                    

  
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
      <button  onClick={() => handleDelete(serv._id)}>
      <MdDeleteForever className='text-2xl text-red-900' />
      </button>

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


