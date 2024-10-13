import React, { useState } from 'react';
import Card from '../Cards/Card';

const PopularCards = ({ data }) => {
  // visible state
  const [visibleCars, setVisibleCars] = useState(5);

  // show more cars function
  const showMoreCars = () => {
    
  };

  return (
    <div className='p-6'>
      {
        !data || data.length === 0 ? (
          <div className='p-6'>
            <p>No popular cars available at the moment.</p>
        </div>
        ) : (
            <>
              <div className="text flex justify-between py-3">
          <p>Popular Cars:</p>
          {visibleCars < data.length && (
            <div className="font-semibold underline">
              <p className='text-end cursor-pointer' onClick={()=>setVisibleCars((prevVisibleCars) => prevVisibleCars + 5)}>
                {
                  visibleCars === 5 ? "view more" : null
                }
              </p>
            </div>
          )}
        </div>

        <div className='flex justify-between gap-2 w-full flex-wrap'>
          {data.slice(0, visibleCars).map((item) => (
            item.Popular && <Card item={item} key={item.id} />
          ))}
        </div>
            </>
        )
      }
      
    </div>
  );
};

export default PopularCards;
