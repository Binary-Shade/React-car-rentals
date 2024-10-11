import React from 'react'
import PopularCards from '../components/PopularCars/PopularCards'
import Recommend from '../components/Recommend/Recommend'

function Home() {
  return (
    <div className='overflow-hidden font-poppins text-black bg-white'>
     <PopularCards />
     <Recommend />
    </div>
  )
}

export default Home
