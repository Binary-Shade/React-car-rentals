import React from 'react';
import { useParams } from 'react-router-dom';
import CarCard from './CarCard';
import cars from '../../Data/cars';

const CarDetails = () => {
  const { id } = useParams();
  const carId = parseInt(id)
  const car = cars.find((car) => car.id === carId);
  return (
    <div className='details'>
      {car ? (
        <CarCard car={car} />
      ) : (
        <p className="text-black">Car not found</p>
      )}
    </div>
  );
};

export default CarDetails;
