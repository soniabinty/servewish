import React from 'react';
import { useNavigate } from 'react-router-dom';

import img1 from '../../assets/category/cleaning service-pana (1).png';
import img2 from '../../assets/category/Medicine-bro (1).png';
import img3 from '../../assets/category/Spa-bro.png';
import img4 from '../../assets/category/Vintage truck-amico.png';
import img5 from '../../assets/category/Take Away-pana.png';

const categories = [
  { img: img1, title: 'Home Services', desc: 'Reliable handyman services for repairs, installations, and maintenance' },
  { img: img2, title: 'Medical', desc: 'Expert doctors providing home healthcare services with convenience.' },
  { img: img3, title: 'Beauty and Spa', desc: 'Salon-quality beauty and wellness treatments at your home.' },
  { img: img4, title: 'Transports', desc: 'Safe and reliable home-to-destination transport services.' },
  { img: img5, title: 'Restaurants', desc: 'Delicious meals delivered fresh from your favorite restaurants.' }
];

const Category = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    navigate(`/services?category=${encodeURIComponent(category)}`);
  };

  return (

    <div className='bg-yellow-100 p-4 md:p-6 lg:px-12 text-center my-10'>
      <h2 className='md:text-4xl text-2xl px-4 md:px-0  font-bold text-[#fb110d] mb-10 '>Explore Services By Category</h2>
     <div className="md:grid  grid-cols-5 md:gap-6  lg:gap-12 max-sm:space-y-5">
      {categories.map((category, index) => (
        <div
          key={index}
          onClick={() => handleCategoryClick(category.title)}
          className="cursor-pointer rounded-lg border-t-4 border-[#fb110d] bg-white text-center shadow-md py-6 transition-transform transform hover:scale-105 flex flex-col grow"
        >
          <img className="w-24 mx-auto" src={category.img} alt={category.title} />
          <h4 className="font-bold px-2">{category.title}</h4>
          <p className="px-2">{category.desc}</p>
        </div>
      ))}
    </div>  
    </div>
    
   
  );
};

export default Category;
