import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ServiceCard from '../componant/ServiceCard';

const Services = () => {
  const services = useLoaderData();
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Function to handle category change
  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  // Filter services based on the selected category
  const filteredServices = selectedCategory === 'All' 
    ? services
    : services.filter(service => service.category === selectedCategory);

  return (
    <div className='max-w-7xl mx-auto'>
      {/* Category Filter Dropdown */}
      <div className='mb-4'>
        <label htmlFor="categoryFilter" className="block mb-2 text-lg font-medium">Filter by Category:</label>
        <select
          id="categoryFilter"
          value={selectedCategory}
          onChange={handleCategoryChange}
          className="border border-gray-300 p-2 rounded-md w-full md:w-1/3"
        >
          <option value="All">All Categories</option>
          <option value="Food">Food</option>
          <option value="Transport">Transport</option>
          <option value="house">House Build Up</option>
          <option value="IT">IT</option>
          {/* Add more categories as needed */}
        </select>
      </div>

      {/* Service Cards */}
      <div className='md:grid grid-cols-3 gap-6'>
        {
          filteredServices.map((service) => (
            <ServiceCard service={service} key={service._id} />
          ))
        }
      </div>
    </div>
  );
};

export default Services;
