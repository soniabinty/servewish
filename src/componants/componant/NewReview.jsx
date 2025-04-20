import { Rating } from '@smastrom/react-rating';
import React, { useEffect, useState } from 'react';

const NewReview = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch('https://servewish-server.vercel.app/newreview')
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, []);

  return (
    <div className="md:mx-6 lg:mx-12 mx-4">
      <h4 className='text-[#fb110d] md:text-4xl text-2xl font-bold text-center my-3'>Recents Reviews</h4>
      <div className="md:grid grid-cols-4 gap-6">
        {reviews.map((review) => (
          <div
            key={review._id}
            className="flex w-full p-4 max-w-lg flex-col border-yellow-300 rounded-lg bg-white shadow-sm border border-slate-200 my-6"
          >
            {/* Reviewer Info */}
            <div className="flex items-center gap-4 text-slate-800">
              <img
                src={review.photo}
                alt={review.name}
                className="w-12 h-12 rounded-full"
              />
              <div className="flex w-full flex-col">
                <div className="">
                  <h5 className="text-xl font-semibold text-slate-800">
                    {review.name}
                  </h5>
                  <Rating style={{ maxWidth: 120 }} value={review.rating} readOnly />
                </div>
              </div>
            </div>

            {/* Review Content */}
            <div className="mt-6">
              <p className="text-base text-slate-600 h-20 font-light leading-normal">
                &quot;{review.reviewText}&quot;
              </p>
              <span className="text-sm text-gray-400">Posted on {review.date}</span>
            </div>
            <div className='border'>

            </div>
            <p className='mt-2 text-[#fb110d]'>{review.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewReview;
