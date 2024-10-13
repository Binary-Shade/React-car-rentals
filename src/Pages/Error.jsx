import React from 'react'
import { Link } from 'react-router-dom'
const Error = () => {
  return (
    <section class="bg-white w-full my-20">
        <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
            <div class="mx-auto max-w-screen-sm text-center">
                <h1 class="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 ">404</h1>
                <p class="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl">Something's missing.</p>
                <p class="mb-4 text-lg font-light text-gray-500 ">Sorry, we can't find that page. You'll find lots to explore on the home page. </p>
                <Link to={'/'}>
                    <button className='px-5 py-2 rounded text-white bg-blue-500'>Visit Home !</button>
                </Link>
            </div>   
        </div>
    </section>
  )
}

export default Error