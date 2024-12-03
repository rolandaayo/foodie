/* eslint-disable no-unused-vars */
import React from 'react'

export default function Hero2() {
  return (
    <div className='flex flex-col md:flex-row justify-center items-center min-h-[80vh] max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 gap-8'>

      <div className='w-full md:w-1/2 max-w-lg mx-auto md:mx-0'>
        <img
        src='/images/about-banner.png'
        alt="Restaurant banner"
        className='w-full h-auto object-cover'
        />
      </div>

      <div className='w-full md:w-1/2 space-y-6 text-center md:text-left max-w-lg mx-auto md:mx-0'>
        <h2 className='text-3xl sm:text-4xl font-bold text-gray-800'>Caferio, Burgers, and Best Pizzas <span className='text-orange-500'>in Town!</span></h2>
        <p className='text-gray-600 leading-relaxed text-sm sm:text-base'>The restaurants in Hangzhou also catered to many northern Chinese who had fled south from Kaifeng during the Jurchen invasion of the 1120s, while it is also known that many restaurants were run by families.</p>
        <ul className='space-y-3 text-sm sm:text-base'>
          <li className='flex items-center gap-2 text-gray-700'>
            <span className='w-2 h-2 bg-orange-500 rounded-full flex-shrink-0'></span>
            Delicious & Healthy Foods
          </li>
          <li className='flex items-center gap-2 text-gray-700'>
            <span className='w-2 h-2 bg-orange-500 rounded-full flex-shrink-0'></span>
            Spacific Family And Kids Zone
          </li>
          <li className='flex items-center gap-2 text-gray-700'>
            <span className='w-2 h-2 bg-orange-500 rounded-full flex-shrink-0'></span>
            Music & Other Facilities
          </li>
          <li className='flex items-center gap-2 text-gray-700'>
            <span className='w-2 h-2 bg-orange-500 rounded-full flex-shrink-0'></span>
            Fastest Food Home Delivery
          </li>
        </ul>
        <button className='w-full sm:w-auto bg-orange-500 text-white px-8 py-3 rounded-full hover:bg-orange-600 transition-colors text-sm sm:text-base animate-bounce'>Order Now</button>
      </div>

    </div>
  )
}