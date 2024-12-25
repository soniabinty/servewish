import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ServiceCard from '../componant/ServiceCard';

const Services = () => {
  const [services, setServices] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchServices = async () => {
      const response = await axios.get('http://localhost:5000/services/search', {
        params: {
          query: searchQuery,
          category: selectedCategory,
        },
      });
      setServices(response.data);
    };

    fetchServices();
  }, [searchQuery, selectedCategory]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value); 
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value); 
  };

  return (
    <div className="max-w-7xl mx-auto">
      {/* Search Input */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by title, category, or company"
          value={searchQuery}
          onChange={handleSearchChange} 
          className="border border-gray-300 p-2 rounded-md w-full md:w-1/3"
        />
      </div>

      {/* Category Filter Dropdown */}
      <div className="mb-4">
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
          <option value="House Build Up">House Build Up</option>
          <option value="IT">IT</option>
        </select>
      </div>

      {/* Service Cards */}
      <div className="md:grid grid-cols-3 gap-6">
        {services.length > 0 ? (
          services.map((service) => (
            <ServiceCard service={service} key={service._id} />
          ))
        ) : (
          <p>No services found</p>
        )}
      </div>
    </div>
  );
};

export default Services;
