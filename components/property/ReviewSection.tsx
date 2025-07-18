import React from 'react';
import Image from 'next/image';
import { Review } from '@/interfaces/index';



const ReviewSection: React.FC<{ reviews: Review[] }> = ({ reviews }) => {
  return (
    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 border-b pb-4 border-gray-200">
      {/* <h3 className="text-2xl font-semibold">Reviews</h3> */}
      {reviews.map((review, index) => (
        <div key={index} className="mb-4">
          <div className="flex items-center my-4">
            <Image src={review.avatar} alt={review.name} className="w-17 h-17 rounded-full mr-4" width={50} height={50}/>
            <div className='text-lg'>
              <p className="font-bold text-black ">{review.name}</p>
              <p className='text-gray-700 '>{review.years} years on ALX</p>
            </div>   
          </div>
          <div className=' text-lg mb-2'>
            <span className='font-semibold text-black'>{review.data}</span> <span className='text-gray-500'>. {review.rating} stars</span>

            </div>
          <p>{review.comment}</p>
        </div>
      ))}
    </div>
  );
};

export default ReviewSection;