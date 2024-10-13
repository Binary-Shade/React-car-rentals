import React from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

const PaymentCard = ({car}) => {
  const navigate = useNavigate()
  const handleClick = () =>{
    toast.success('order placed successfully !')
    setTimeout(()=>{
      navigate('/')
    }, 2000)
  }

  return (
    <div>
      <Toaster
        position="top-right"
        reverseOrder={false}
      />
        <div className="relative mx-auto w-full bg-white ">
  <div className="grid min-h-screen grid-cols-10 ">
    <div className="col-span-full py-6 px-4 sm:py-12 lg:col-span-6 lg:py-24 ">
      <div className="mx-auto w-full max-w-lg ">
        <h1 className="relative text-2xl font-medium text-gray-700 sm:text-3xl">Secure Checkout<span className="mt-2 block h-1 w-10 bg-blue-600 sm:w-20"></span></h1>
        <form action="" className="mt-10 flex flex-col space-y-4">
          <div><label htmlFor="email" className="text-xs font-semibold text-gray-500">Email</label><input type="email" id="email" name="email" placeholder="john.capler@fang.com" className="mt-1 block w-full rounded border-gray-300 bg-gray-50 py-3 px-4 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-blue-500" /></div>
          <div className="relative"><label htmlFor="card-number" className="text-xs font-semibold text-gray-500">Card number</label><input type="text" id="card-number" name="card-number" placeholder="1234-5678-XXXX-XXXX" className="block w-full rounded border-gray-300 bg-gray-50 py-3 px-4 pr-10 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-blue-500" /><img src="/images/uQUFIfCYVYcLK0qVJF5Yw.png" alt="" className="absolute bottom-3 right-3 max-h-4" /></div>
          
          <div><label htmlFor="card-name" className="sr-only">Card name</label><input type="text" id="card-name" name="card-name" placeholder="Name on the card" className="mt-1 block w-full rounded border-gray-300 bg-gray-50 py-3 px-4 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-blue-500" /></div>
        </form>
        <p className="mt-10 text-center text-sm font-semibold text-gray-500">By placing this order you agree to the <a href="#" className="whitespace-nowrap text-blue-400 underline hover:text-blue-600">Terms and Conditions</a></p>
        <button type="submit" 
        className="mt-4 inline-flex w-full items-center justify-center rounded bg-blue-600 py-2.5 px-4 text-base font-semibold tracking-wide text-white text-opacity-80 outline-none ring-offset-2 transition hover:text-opacity-100 focus:ring-2 focus:ring-blue-500 sm:text-lg"
        onClick={handleClick}
        >Rent out car</button>
      </div>
    </div>
    <div className="relative col-span-full flex flex-col py-6 pl-8 pr-4 sm:py-12 lg:col-span-4 lg:py-24">
      <h2 className="sr-only">Order summary</h2>
      <div>
        <img src="https://hips.hearstapps.com/hmg-prod/images/2024-nissan-gt-r-121-1673621285.jpg?crop=0.922xw:1.00xh;0.0501xw,0&resize=980:*" alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 h-full w-full bg-gradient-to-t from-gray-700 to-gray-400 opacity-95"></div>
      </div>
      <div className="relative">
        <ul className="space-y-5">
          <li className="flex justify-between">
            <div className="inline-flex">
              <img src={car.carImage} alt="" className="max-h-16" />
              <div className="ml-3">
                <p className="text-base font-semibold text-white">{car.carTitle}</p>
                <p className="text-sm font-medium text-white text-opacity-80">{car.likes} Liked</p>
              </div>
            </div>
            <p className="text-sm font-semibold text-white">{car.pricePerDay}/Day</p>
          </li>
        </ul>
        <div className="my-5 h-0.5 w-full bg-white bg-opacity-30"></div>
        <div className="space-y-2">
          <p className="flex justify-between text-lg font-bold text-white"><span>Total price:</span><span>{car.pricePerDay}</span></p>
        </div>
      </div>
      <div className="relative mt-10 text-white">
        <h3 className="mb-5 text-lg font-bold">Support</h3>
        <p className="text-sm font-semibold">+91 9878674534</p>
        <p className="mt-1 text-sm font-semibold">support@stach.com<span className="font-light">(Email)</span></p>
        <p className="mt-2 text-xs font-medium">24 Hours customer support</p>
      </div>
      <div className="relative mt-10 flex">
        <p className="flex flex-col"><span className="text-sm font-bold text-white underline cursor-pointer">Learn about refund policy !</span></p>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default PaymentCard