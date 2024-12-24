
import { Rating } from '@smastrom/react-rating';
import React from 'react';



const ReviewBox = ({review}) => {
  return (
    <div class="flex w-full p-4 max-w-lg flex-col rounded-lg bg-white shadow-sm border border-slate-200 my-6">
    <div class="flex items-center gap-4 text-slate-800 min-w-[380px] rounded-full">
    <img
                src={review.photo}
                alt={review.name}
                className="w-12 h-12 rounded-full"
              />
      <div class="flex w-full flex-col">
        <div class="flex items-center justify-between">
          <h5 class="text-xl font-semibold text-slate-800">
           {review.name}
          </h5>
          <Rating style={{ maxWidth: 120 }} value={review.rating} readOnly />
        </div>
     
      </div>
    </div>
    <div class="mt-6 ">
      <p class="text-base text-slate-600 font-light leading-normal">
        &quot;{review.reviewText}&quot;
      </p>
      <span className="text-xs text-gray-400">
                  Posted on {review.date}
                </span>
    </div>
  </div>  
  );
};

export default ReviewBox;