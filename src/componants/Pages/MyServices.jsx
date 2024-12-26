import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../provider/AuthContext';
import axios from 'axios';
import { FaEdit } from 'react-icons/fa';
import { MdDeleteForever } from 'react-icons/md';
import Swal from 'sweetalert2';
import toast from 'react-hot-toast';
import { Helmet } from 'react-helmet';

const MyServices = () => {
  const { user } = useContext(AuthContext);
  const [servs, setServices] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {

    
    axios
      .get(`https://servewish-server-c8u6iz51g-bintys-projects.vercel.app/services?email=${user.email}`)
      .then((response) => {
        setServices(response.data);
      });
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
          .delete(`https://servewish-server-c8u6iz51g-bintys-projects.vercel.app/service/${id}`)
          .then((data) => {
            if (data.data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "The service has been removed.",
                icon: "success",
              });
              const remaining = servs.filter((s) => s._id !== id);
              setServices(remaining);
            } else {
              toast.error("Failed to delete the service");
            }
          })
          .catch(() => toast.error("An error occurred while deleting the service"));
      }
    });
  };

  const openModal = (service) => {
    setSelectedService(service);
    setModalOpen(true);
  };

  const handleUpdate = (event) => {
    event.preventDefault();
    const updatedService = {
      title: event.target.title.value,
      category: event.target.category.value,
      price: event.target.price.value,
    
image:event.target.image.value,
description: event.target.description.value,
    };

    axios
      .put(`https://servewish-server-c8u6iz51g-bintys-projects.vercel.app/service/${selectedService._id}`, updatedService)
      .then((response) => {
        if (response.data.modifiedCount > 0) {
          toast.success("Service updated successfully!");
          const updatedServices = servs.map((service) =>
            service._id === selectedService._id ? { ...service, ...updatedService } : service
          );
          setServices(updatedServices);
          setModalOpen(false);
          setSelectedService(null);
        } else {
          toast.error("Failed to update the service");
        }
      })
      .catch(() => toast.error("An error occurred while updating the service"));
  };
  const filteredServices = servs.filter((service) =>
    service.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <div className='max-w-7xl mx-auto my-12'>

<Helmet>
        <title>ServeWISH-myservice</title>
      </Helmet>

<div className="mb-4">
        <input
          type="text"
          placeholder="Search by name"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="input input-bordered w-full max-w-md"
        />
      </div>
      <div className="overflow-x-auto rounded-none">
        <table className="table table-zebra">
          <thead>
            <tr className='text-green-900'>
              <th></th>
              <th className='md:text-xl'>Name</th>
              <th className='md:text-xl'>Category</th>
              <th className='md:text-xl'>Price</th>
              <th className='md:text-xl'>Actions</th>
            </tr>
          </thead>
          <tbody>
          {filteredServices.map((serv, idx) => (
    <tr className='bg-green-400' key={serv._id}>
      <th className='text-md'>{1 + idx}</th>
      <td className='text-md'>{serv.title}</td>
      <td className='text-md'>{serv.category}</td>
      <td className='text-md'>${serv.price}</td>
      <td className='flex items-center gap-4 text-center'>
        <button onClick={() => openModal(serv)}>
          <FaEdit className='text-2xl text-green-900' />
        </button>
        <button onClick={() => handleDelete(serv._id)}>
          <MdDeleteForever className='text-2xl text-red-900' />
        </button>
      </td>
    </tr>
  ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}

      <div className='md:p-12'>
      {isModalOpen && selectedService && (
        <div
          className="fixed inset-0 flex items-center justify-center p-12 bg-black bg-opacity-50 z-50"
          role="dialog"
          aria-hidden={!isModalOpen}
        >
          <div className="modal-box relative bg-green-200 my-8">
            <h2 className="font-bold text-lg">Update Service</h2>
            <form onSubmit={handleUpdate}>
              <div className="form-control">
                <label className="label">Service Name:</label>
                <input
                  type="text"
                  name="title"
                  defaultValue={selectedService.title}
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">Category:</label>
                <input
                  type="text"
                  name="category"
                  defaultValue={selectedService.category}
                  className="input input-bordered"
                  required
                />
              </div>




                              
<div className="form-control">
                <label className="label">Service Image:</label>
                <input
                  type="url"
                  name="image"
                  defaultValue={selectedService.image}
                  className="input input-bordered"
                  required
                />


              </div>
              <div className="form-control">
                <label className="label">Price:</label>
                <input
                  type="number"
                  name="price"
                  defaultValue={selectedService.price}
                  className="input input-bordered"
                  required
                />
              </div>


              <div className="form-control">
                <label className="label">Description:</label>
                <input
                  type="text"
                  name="description"
                  defaultValue={selectedService.description || ""}
                  className="input input-bordered"
                 
                  required
                />
              </div>

   



              
              <div className="modal-action">
                <button type="submit" className="btn bg-green-900 text-white">
                  Save Changes
                </button>
                <button
                  type="button"
                  onClick={() => setModalOpen(false)}
                  className="btn"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}   
      </div>
     
    </div>
  );
};

export default MyServices;
