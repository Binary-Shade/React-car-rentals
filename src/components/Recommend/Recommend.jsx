import React, { useState } from 'react';
import Card from '../Cards/Card';

const Recommend = ({ data }) => {
  const [visibleCars, setVisibleCars] = useState(11);
  const showMoreCars = () => {
    setVisibleCars((prevVisibleCars) => (prevVisibleCars + data.length))
  };
  const showLessCars = () => {
    setVisibleCars(11); 
  };


  if (!data || data.length === 0) {
    return (
      <div className='p-6'>
        <p>No recommended cars available at the moment.</p>
      </div>
    );
  }

  return (
    <div className='p-6'>
      <div className="text flex justify-between">
        <p className='my-5'>Recommended Cars:</p>
        {visibleCars < data.length && (
          <div>
            <p className='font-semibold underline cursor-pointer' onClick={showMoreCars}>
              View More
            </p>
          </div>
        )}
      </div>
      <div className='flex justify-between gap-2 w-full flex-wrap'>
        {data.slice(0, visibleCars).map((item) => (
          item.Recommend && <Card item={item} key={item.id} />
        ))}
      </div>
      <div className='text-[15px] flex justify-between mt-4'>
        {visibleCars > 11 && (
          <p className='underline cursor-pointer font-semibold' onClick={showLessCars}>
            View Less
          </p>
        )}
        <p>Cars available: {data.length}</p>
      </div>
    </div>
  );
};

export default Recommend;
