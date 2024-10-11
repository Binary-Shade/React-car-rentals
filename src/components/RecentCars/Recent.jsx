import React from 'react'
import RecentCard from './RecentCard'
import { RecentCars } from '../../Data/cars'

const Recent = () => {
  return (
    <div className=' w-max bg-white border  border-1 mx-auto shadow-lg px-4 pb-6'>
      <p className='my-5 capitalize text-md font-semibold'>Recently Added cars:</p>
      <div className="flex flex-col gap-3 flex-wrap w-full md:flex-row">
        {
          RecentCars.map((car)=>(
            <RecentCard key={car.id} car={car}/>
          ))
        }
      </div>
    </div>
  )
}

export default Recent