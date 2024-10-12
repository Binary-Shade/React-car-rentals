import React, { useState } from 'react';
import Card from '../Cards/Card';

const PopularCards = ({ data }) => {
  const [visibleCars, setVisibleCars] = useState(5);

  const showMoreCars = () => {
    setVisibleCars((prevVisibleCars) => prevVisibleCars + 5);
  };

  if (!data || data.length === 0) {
    return (
      <div className='p-6'>
        <p>No popular cars available at the moment.</p>
      </div>
    );
  }

  return (
    <div className='p-6'>
      <div className="text flex justify-between py-3">
        <p>Popular Cars:</p>
        {visibleCars < data.length && (
          <div className="font-semibold underline">
            <p className='text-end cursor-pointer' onClick={showMoreCars}>
              View More
            </p>
          </div>
        )}
      </div>

      <div className='flex justify-between gap-2 w-full flex-wrap'>
        {data.slice(0, visibleCars).map((item) => (
          item.Popular && <Card item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default PopularCards;
