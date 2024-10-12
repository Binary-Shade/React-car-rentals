import React from 'react';
import { useParams } from 'react-router-dom';
import CarCard from './CarCard';
import useFetch from '../hooks/useFetch';
import Loader from '../Loader/Loader';

const CarDetails = () => {
  const { id } = useParams();
  const carId = parseInt(id);
  const { data, loading, error } = useFetch('https://api.jsonbin.io/v3/b/670a0febe41b4d34e4414a40/latest');
  const car = data ? data.find((car) => car.id === carId) : null;
  if (loading) {
    return (
      <div className='w-full h-screen flex justify-center items-center'>
        <Loader />
      </div>
    );
  }
  if (error) {
    return <div className="text-red-500">Error fetching car details: {error.message}</div>;
  }
  if (!car) {
    return <div className="text-red-500">Car not found.</div>;
  }

  return (
    <div className='details'>
      <CarCard car={car} key={car.id} />
    </div>
  );
};

export default CarDetails;
