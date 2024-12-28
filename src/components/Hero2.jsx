/* eslint-disable no-unused-vars */
import React from 'react'

export default function Hero2() {
  return (
    <div className='flex flex-col md:flex-row justify-center items-center min-h-[80vh] max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 gap-12 bg-gradient-to-br from-white to-orange-50'>

      <div className='w-full md:w-1/2 max-w-lg mx-auto md:mx-0 transform hover:scale-105 transition-transform duration-300'>
        <img
        src='/images/about-banner.png'
        alt="Restaurant banner"
        className='w-full h-auto object-cover rounded-2xl shadow-2xl'
        />
      </div>

      <div className='w-full md:w-1/2 space-y-8 text-center md:text-left max-w-lg mx-auto md:mx-0'>
        <h2 className='text-3xl sm:text-4xl font-bold text-gray-800 leading-tight'>Caferio, Burgers, and Best Pizzas <span className='text-orange-500 italic'>in Town!</span></h2>
        <p className='text-gray-600 leading-relaxed text-sm sm:text-base font-light'>The restaurants in Hangzhou also catered to many northern Chinese who had fled south from Kaifeng during the Jurchen invasion of the 1120s, while it is also known that many restaurants were run by families.</p>
        <ul className='space-y-4 text-sm sm:text-base'>
          <li className='flex items-center gap-3 text-gray-700 hover:text-orange-500 transition-colors'>
            <span className='w-2 h-2 bg-orange-500 rounded-full flex-shrink-0 transform hover:scale-150 transition-transform'></span>
            Delicious & Healthy Foods
          </li>
          <li className='flex items-center gap-3 text-gray-700 hover:text-orange-500 transition-colors'>
            <span className='w-2 h-2 bg-orange-500 rounded-full flex-shrink-0 transform hover:scale-150 transition-transform'></span>
            Spacific Family And Kids Zone
          </li>
          <li className='flex items-center gap-3 text-gray-700 hover:text-orange-500 transition-colors'>
            <span className='w-2 h-2 bg-orange-500 rounded-full flex-shrink-0 transform hover:scale-150 transition-transform'></span>
            Music & Other Facilities
          </li>
          <li className='flex items-center gap-3 text-gray-700 hover:text-orange-500 transition-colors'>
            <span className='w-2 h-2 bg-orange-500 rounded-full flex-shrink-0 transform hover:scale-150 transition-transform'></span>
            Fastest Food Home Delivery
          </li>
        </ul>
        <button className='w-full sm:w-auto bg-orange-500 text-white px-10 py-4 rounded-full hover:bg-orange-600 transition-all duration-300 text-sm sm:text-base font-semibold shadow-lg hover:shadow-orange-300 transform hover:-translate-y-1 hover:scale-105'>Order Now</button>
      </div>

    </div>
  )
}