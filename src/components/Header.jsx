/* eslint-disable no-unused-vars */
import React from 'react'

export default function Header() {
  return (
    <div>

      <div className='flex flex-col md:flex-row items-center w-full px-4 md:px-20 justify-center bg-[url("/images/hero-bg.jpg")] min-h-[80vh] bg-cover bg-center bg-no-repeat relative'>
        <div className='space-y-6 w-full md:w-[50%] p-4 md:p-0 animate-fadeIn text-center md:text-left'>
            <h2 className='text-2xl md:text-4xl font-bold text-yellow-200 tracking-wide'>Eat Sleep And Code</h2>
            <h1 className='text-4xl md:text-6xl font-extrabold text-[#F2D6C6] leading-tight drop-shadow-lg'>Supper delicious Burger in town!</h1>
            <p className='text-xl md:text-1xl text-[#F2D6C6] font-light leading-relaxed'>Food is any substance consumed to provide nutritional support for an organism.</p>
            <button className='bg-black text-yellow-200 px-6 md:px-8 py-3 md:py-4 rounded-full hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 font-semibold shadow-lg animate-bounce'>Book A Table</button>
        </div>

        <div className='w-full md:w-[50%] transform hover:scale-105 transition-all duration-500 mt-8 md:mt-0'>
            <img
            className='drop-shadow-2xl animate-float w-full'
             src="/images/hero-banner.png"
              alt="Delicious burger"
               />
        </div>
      </div>

    </div>
  )
}