import React, { useState } from 'react';
import Card from '../Cards/Card';
import cars from '../../Data/cars';

const Recommend = () => {
  const [visibleCars, setVisibleCars] = useState(5);


  const showMoreCars = () => {
    setVisibleCars(cars.length); 
  };

  return (
    <div className='p-6'>
      <div className="text flex justify-between">
      <p className='my-5'>Recommended Cars:</p>
      {visibleCars < cars.length && (
        <div className="">
          <p className='font-semibold underline cursor-pointer' onClickCapture={showMoreCars}>view all</p>
        </div>
      )}
      </div>
      <div className='flex justify-between gap-2 w-full flex-wrap'>
        {

cars.slice(0, visibleCars).map((item) => (
            <Card item={item} key={item.id} />
          ))
        }
      </div>
      <div className='text-[15px] flex justify-between mt-4'>
      {
        cars.length >5 ? <p className='underline cursor-pointer font-semibold' onClick={()=>setVisibleCars(5)}>view less</p> : null
      }
      <p className=''>cars available : {cars.length}</p>
      </div>
    </div>
  );
};

export default Recommend;
