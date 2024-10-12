import React from 'react'
import { FaHeart } from "react-icons/fa";
import { AiOutlineCaretRight } from "react-icons/ai";
import { Link } from 'react-router-dom';


const CarCard = ({car}) => {
  return (
    <div>
        <section className="py-12 mx-2  sm:py-16"> 
        <div className="container bg-white rounded-md border border-1 shadow-lg mx-auto px-4">
          <div className="lg:col-gap-12 xl:col-gap-16 mt-8 grid grid-cols-1 gap-12 lg:mt-12 lg:grid-cols-5 lg:gap-16">
            <div className="lg:col-span-3 lg:row-end-1">
              <div className="lg:flex lg:items-start">
                <div className="lg:order-2 lg:ml-5">
                  <div className="max-w-xl overflow-hidden rounded-lg">
                    <img className="h-full w-full object-cover" src={car.carImage} alt="Product" />
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-2 lg:row-span-2 lg:row-end-2">
              <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">{car.carTitle}</h1>
              <div className="mt-5 flex items-center">
                <div className="flex items-center">
                    <FaHeart className='text-red-500'/>
                </div>
                <p className="ml-2 text-sm font-medium text-gray-500">{car.likes}  people liked</p>
              </div>
              <h2 className="mt-8 text-base text-gray-900">Car-Type : Sports Car</h2>
              
              <h2 className="mt-8 text-base text-gray-900">Fuel : {car.Fuel}</h2>
              <h2 className="mt-8 text-base text-gray-900">Engine : {car.Engine}</h2>
              <h2 className="mt-8 text-base text-gray-900">Seats : {car.Drive}</h2>
              
              <div className="mt-10 flex flex-col items-center justify-around space-y-4 border-t border-b py-4 sm:flex-row sm:space-y-0">
                <div className="flex items-end">
                  <h1 className="text-xl font-semibold">{car.pricePerDay} <span className='text-gray-600'>/Day</span></h1>
                </div>
                <Link to={`/payments/${car.id}`}><button type="button" className="flex items-center justify-center rounded-md border-1 bg-blue-600 px-12 py-3 text-base font-bold text-white hover:bg-blue-500">
                  <AiOutlineCaretRight className='mx-2'/>
                  Rent out
                </button></Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CarCard