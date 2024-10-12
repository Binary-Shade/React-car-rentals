import React from 'react'
import PopularCards from '../components/PopularCars/PopularCards'
import Recommend from '../components/Recommend/Recommend'
import Loader from '../components/Loader/Loader'
import useFetch from '../components/hooks/useFetch'

function Home() {
  const { data, loading, error } = useFetch('https://api.jsonbin.io/v3/b/670a0febe41b4d34e4414a40/latest');
  console.log(data);

  return (
    <div className='overflow-hidden font-poppins text-black bg-white'>
      {
        loading ? (
          <div className='w-full h-screen flex justify-center items-center'>
            <Loader />
          </div>
        ) : error ? (
          <div className='w-full h-screen flex justify-center items-center'>
            <p className='text-red-500'>Something went wrong: {error.message}</p>
          </div>
        ) : (
          <>
            <PopularCards data={data} />
            <Recommend data={data} />
          </>
        )
      }
    </div>
  )
}

export default Home;
