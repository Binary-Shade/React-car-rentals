import React from 'react'
import CarDetails from '../components/CarDetails/CarDetails'
import Recent from '../components/RecentCars/Recent'

const Details = () => {
  return (
    <div className='bg-gray-200'>
        <CarDetails />
        <Recent />
    </div>
  )
}

export default Details