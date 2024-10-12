import React, { useEffect, useState } from 'react'
import RecentCard from './RecentCard'
import useFetch from '../hooks/useFetch'
import Loader from '../Loader/Loader'

const Recent = () => {
  const [recent, setRecent] = useState([])
  const {data, loading, error} = useFetch('https://api.jsonbin.io/v3/b/670a0febe41b4d34e4414a40/latest')
  return (
    <div className='w-full  bg-white border  border-1 mx-auto shadow-lg px-4 pb-6 '>
      <div className="flex flex-col items-center justify-center gap-3 flex-wrap  md:flex-row w-full">
      <p className='my-5 capitalize text-md font-semibold md:hidden'>Recently Added cars:</p>
        {
          loading ? (
            <Loader />
          ) : (
            data.map((car)=>(
              car.Recent && <RecentCard key={car.id} car={car}/>
            ))
          )
        }
      </div>
    </div>
  )
}

export default Recent