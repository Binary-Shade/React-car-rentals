import React from 'react'
import { FaAngleDoubleRight } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { Link } from 'react-router-dom';
const ListCard = ({data}) => {
  return (
    <div className="list-container w-max font-poppins">
        <div className=" flex flex-col justify-center items-center flex-wrap gap-10 py-5">
        {
          !data.length ? <p className='text-white'>no data to show</p> : 
          data.map((car)=>(
            <Link to={`/details/${car.id}`}>
            <div key={car.id} className="card-container border border-1 shadow-md h-max pb-7 w-[350px] md:w-max flex flex-col  lg:flex-row justify-start bg-white p-1 rounded hover:scale-105 transition-all" >
        <div className="card-left w-[15rem] h-full max-lg:h-auto max-lg:w-[35rem] max-[500px]:w-[20rem]">
          <img className="lg:w-[100%] h-[100%] object-contain " src={car.carImage} alt="" />
        </div>
        <div className="card-right w-[30rem] h-full pl-8 pt-2 flex flex-col justify-center items-start ">
          <div className="heading flex justify-between w-full">
          <h1 className="text-base font-medium uppercase max-md:font-semibold max-md:text-xl">{car.carTitle}</h1>
          <FaHeart className='text-red-500' />
          </div>

          <div className="car-dets flex justify-center items-center gap-4 mt-6 max-lg:flex-row max-lg:items-start max-lg:gap-0 max-md:flex-row max-md:gap-10 max-[500px]:gap-2">
            <div className="left-dets">
              <p className="font-semibold text-sm mt-2">
                Year: <span className="font-light">{car.carYear}</span>
              </p>
              <p className="font-semibold text-sm mt-2">
                Fuel: <span className="font-light">{car.Fuel}</span>
              </p>
              <p className="font-semibold text-sm mt-2">
                Horsepower: <span className="font-light">{
                  car.Horsepower} hp</span>
              </p>
            </div>

            <div className="center-dets">

              <p className="font-semibold text-sm mt-2">
                Engine: <span className="font-light">{car.Engine}</span>
              </p>

              <p className="font-semibold text-sm mt-2">
                Drive-seat: <span className="font-light">{car.Drive}</span>
              </p>

              <p className="font-semibold text-sm mt-2">
                Top-speed: <span className="font-light">{car.carTopSpeed}km/h</span>
              </p>
            </div>

            <div className="right-dets flex flex-col justify-center items-start max-lg:hidden max-md:flex max-[570px]:hidden">
              <p className="text-sm">Price:</p>
              <p className="text-base font-semibold text-emerald-500">{car.pricePerDay} <span className="text-sm font-light text-black"> / per day</span></p>
              <p className="flex justify-center items-center gap-2 text-sm text-red-500 font-bold cursor-pointer hover:underline transition-all duration-150 ease-linear">view details  <FaAngleDoubleRight className="w-3 h-3"/></p>
            </div> 
          
          </div>

        </div>                 
            
      </div>
      </Link>
        ))
        }
        </div>
    </div>
  )
}

export default ListCard