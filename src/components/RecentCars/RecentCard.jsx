import React from 'react'
import { FaHeart } from 'react-icons/fa'


const RecentCard = ({car}) => {
  return (
    <div className='flex'>
<div className="group flex w-full mx-auto flex-col overflow-hidden bg-white shadow-md hover:shadow-2xl">
  <div className="relative flex h-80 w-96 overflow-hidden" >
    <img className="absolute top-0 right-0 h-full w-full object-cover" src={car.carImage} alt="product image" />
    
  </div>
  <div className="mt-4 pb-5">
    <a href="#">
      <h5 className="text-center tracking-tight text-gray-500">{car.carTitle}</h5>
    </a>
    <div className="mb-5 flex justify-center">
      <p>
        <span className="text-sm font-bold text-gray-900">{car.pricePerDay} for first Trip</span>
      </p>
    </div>
        <div className="flex flex-wrap flex-col w-full gap-2 ml-5">
            <span className="text-sm">Transmission: {car.condition}</span>
            <span className="text-sm ">Seats: {car.Drive} seats</span>
            <span className="text-sm " >Fuel: {car.Fuel}</span>
            <div className="flex justify-start items-center w-full text-center gap-3">
                <FaHeart className=' text-red-500'/>
                <p>{car.likes} people liked</p>
            </div>
        </div>
  </div>
</div>

    </div>

  )
}

export default RecentCard