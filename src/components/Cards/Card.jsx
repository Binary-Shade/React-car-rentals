import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ item }) => {
  const handleCheckDetails = () => {
    console.log("Check Details Clicked");
  };

  const handleRentCar = () => {
    console.log("Rent Car Clicked");
  };

  return (
    <div className="flex justify-center items-center w-[350px]">
      <div className="max-w-[720px] mx-auto ">
        <div className="relative flex flex-col text-gray-700 shadow-md bg-clip-border rounded-xl  h-96">
          <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white bg-clip-border rounded-xl">
            <img
              src={item.carImage}
              alt="card-image"
              className="object-cover "
            />
          </div>
          <div className="p-6">
            <div className="flex items-center justify-between mb-2">
              <p className="block text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                {item.carTitle}
              </p>
              <p className="block text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                ${item.pricePerDay} per Day
              </p>
            </div>
            <div className="flex flex-wrap w-full justify-between">
              <div>
                <p className="block text-sm text-gray-700">Fuel-type: {item.Fuel}</p>
                <p className="block text-sm text-gray-700">Engine: {item.Engine}</p>
              </div>
              <div>
                <p className="block text-sm text-gray-700">Top-speed: {item.carTopSpeed}</p>
                <p className="block text-sm text-gray-700">Seat-type: {item.Drive}</p>
              </div>
            </div>
            <div className="mt-6 flex justify-between">
              <Link to={`/search`}>
                <button
                  onClick={handleCheckDetails}
                  className='px-4 py-2 rounded-lg bg-green-500 text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40'
                >
                  Check Details
                </button>
              </Link>
              <button
                onClick={handleRentCar}
                className='px-4 py-2 rounded-lg bg-blue-500 text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40'
              >
                $ Rent Car
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
