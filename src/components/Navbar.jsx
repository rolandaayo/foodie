/* eslint-disable no-unused-vars */
import React, { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='flex justify-center items-center bg-gradient-to-r from-[#F2D6C6] to-[#F8E4D9]'>
        <div className='flex flex-col md:flex-row justify-between items-center w-full px-4 md:px-20 py-4 md:py-6'>
          <div className='flex justify-between items-center w-full md:w-auto'>
            <h2 className='text-3xl font-bold text-gray-800 hover:text-gray-600 transition-colors duration-300'>Foodie</h2>
            <button onClick={() => setIsOpen(!isOpen)} className='md:hidden hover:bg-gray-100 p-2 rounded-lg transition-colors duration-300'>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
          <div className={`${isOpen ? 'block' : 'hidden'} md:block w-full md:w-auto`}>
            <ul className='flex flex-col md:flex-row gap-3 md:gap-8 items-center justify-center mt-4 md:mt-0'>
                <li className='font-medium text-gray-700 hover:text-gray-900 cursor-pointer transition-colors duration-300'>Home</li>
                <li className='font-medium text-gray-700 hover:text-gray-900 cursor-pointer transition-colors duration-300'>About Us</li>
                <li className='font-medium text-gray-700 hover:text-gray-900 cursor-pointer transition-colors duration-300'>Shop</li>
                <li className='font-medium text-gray-700 hover:text-gray-900 cursor-pointer transition-colors duration-300'>Blog</li>
                <li className='font-medium text-gray-700 hover:text-gray-900 cursor-pointer transition-colors duration-300'>Contact Us</li>
                <button className='bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transform hover:scale-105 transition-all duration-300 font-medium'>Reservation</button>
            </ul>
          </div>
        </div>
    </div>
  )
}