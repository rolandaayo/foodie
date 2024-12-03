/* eslint-disable no-unused-vars */
import React from 'react'

export default function Burger() {
  return (
    <div>
      <div className='flex flex-col md:flex-row items-center pt-8 w-full px-4 md:px-20 justify-center bg-[url("/images/hero-bg.jpg")] min-h-[80vh] bg-cover bg-center bg-no-repeat relative'>
        <div className='space-y-6 w-full md:w-[50%] p-4 md:p-0 animate-fadeIn text-center md:text-left'>
            <h1 className='text-4xl md:text-6xl font-extrabold text-[#F2D6C6] leading-tight drop-shadow-lg'>The Foodie Have Excellent Of Quality Burgers!</h1>
            <p className='text-xl md:text-1xl text-[#F2D6C6] font-light leading-relaxed'>The restaurants in Hangzhou also catered to many northern Chinese who had fled south from Kaifeng during the Jurchen invasion of the 1120s, while it is also known that many restaurants were run by families.</p>
            <button className='bg-orange-500 text-white px-6 md:px-8 py-3 md:py-4 rounded-full hover:bg-orange-800 transition-all duration-300 transform hover:scale-105 font-semibold shadow-lg animate-bounce'>Order Now</button>
        </div>

        <div className='w-full md:w-[50%] transform hover:scale-105 transition-all duration-500 mt-8 md:mt-0'>
            <img
            className='drop-shadow-2xl animate-float w-screen md:w-full'
             src="/images/cta-banner.png"
              alt="Delicious burger"
               />
        </div>
      </div>
    </div>
  )
}