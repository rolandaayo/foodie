/* eslint-disable no-unused-vars */
import React from 'react'

export default function Burger() {
  return (
    <div className='flex items-center justify-between px-4 md:px-20 min-h-[80vh] bg-[url("/images/hero-bg.jpg")] bg-cover bg-center bg-no-repeat'>

      <div className='flex flex-col items-center justify-between gap-6 w-full max-w-7xl mx-auto'>
        <div className='flex flex-col md:flex-row items-center justify-between w-full'>
          <div className='flex flex-col gap-6 w-full md:w-[50%] text-center md:text-left'>
            <h2 className='text-3xl md:text-5xl font-bold text-white'>The Foodie Have Excellent Of <span className='text-yellow-400'>Quality Burgers!</span></h2>
            <p className='text-gray-200 text-base md:text-lg'>The restaurants in Hangzhou also catered to many northern Chinese who had fled south from Kaifeng during the Jurchen invasion of the 1120s, while it is also known that many restaurants were run by families.</p>
            <button className='bg-yellow-400 text-black font-semibold py-3 px-8 rounded-full hover:bg-yellow-500 transition-all duration-300 w-fit mx-auto md:mx-0'>Order Now</button>
          </div>

          <div className='w-full md:w-[70%] flex items-center justify-center mt-8 md:mt-0'>
            <img src="/images/cta-banner.png" alt="burger" className='w-full h-full object-contain' />
          </div>
        </div>
      </div>

    </div>
  )
}