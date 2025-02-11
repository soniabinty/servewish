import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import ServiceCard from '../componant/ServiceCard';

const Services = () => {
  const [services, setServices] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
   
    const queryParams = new URLSearchParams(location.search);
    const categoryFromURL = queryParams.get('category') || 'All';

    setSelectedCategory(categoryFromURL);

    const fetchServices = async () => {
      try {
        const response = await axios.get('https://servewish-server.vercel.app/services/search', {
          params: {
            query: searchQuery,
            category: categoryFromURL !== 'All' ? categoryFromURL : '',
          },
        });

        setServices(response.data);
      } catch (error) {
        console.error('Error fetching services:', error);
      }
    };

    fetchServices();
  }, [searchQuery, location.search]); 

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Handle category filter change
  const handleCategoryChange = (e) => {
    const newCategory = e.target.value;
    setSelectedCategory(newCategory);
    navigate(`/services?category=${encodeURIComponent(newCategory)}`); // Update URL
  };

  return (
    <div className="max-w-7xl py-12 mx-auto">
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
          <option value="Restaurants">Restaurants</option>
          <option value="Transports">Transports</option>
          <option value="Home Services">Home Services</option>
          <option value="Medical">Medical</option>
          <option value="Beauty and Spa">Beauty and Spa</option>
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
