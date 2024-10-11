import React, { useState } from 'react';
import Card from '../Cards/Card';
import {popularCars} from '../../Data/cars';

const PopularCards = () => {
  const [visibleCars, setVisibleCars] = useState(5);


  const showMoreCars = () => {
    setVisibleCars(popularCars.length); 
  };

  return (
    <div className='p-6'>
      <div className="text flex justify-between py-3">
      <p>Popular Cars:</p>
      {visibleCars < popularCars.length && (
        <div className="font-semibold underline">
          <p className='text-end cursor-pointer' onClick={()=>showMoreCars()}>view all</p>
        </div>
      )}
      </div>
      <div className='flex justify-between gap-2 w-full flex-wrap'>
        {

popularCars.slice(0, visibleCars).map((item) => (
            <Card item={item} key={item.id} />
          ))
        }
      </div>
    </div>
  );
};

export default PopularCards;
