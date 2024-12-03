/* eslint-disable no-unused-vars */
import React, { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="fixed top-0 left-0 w-full bg-[#F2D6C6] shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between p-10 items-center h-16">
            <div className="flex-shrink-0">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent hover:from-purple-600 hover:via-pink-500 hover:to-orange-500 transition-all duration-500">Foodie</h2>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none"
              >
                <svg
                  className="h-6 w-6"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>

            <div className="hidden md:block">
              <ul className="flex space-x-8 items-center">
                <li className="text-gray-600 hover:text-gray-900 cursor-pointer relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-orange-500 after:left-0 after:-bottom-1 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300">Home</li>
                <li className="text-gray-600 hover:text-gray-900 cursor-pointer relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-orange-500 after:left-0 after:-bottom-1 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300">About Us</li>
                <li className="text-gray-600 hover:text-gray-900 cursor-pointer relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-orange-500 after:left-0 after:-bottom-1 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300">Shop</li>
                <li className="text-gray-600 hover:text-gray-900 cursor-pointer relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-orange-500 after:left-0 after:-bottom-1 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300">Blog</li>
                <li className="text-gray-600 hover:text-gray-900 cursor-pointer relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-orange-500 after:left-0 after:-bottom-1 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300">Contact Us</li>
                <button className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition-colors">
                  Reservation
                </button>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`fixed top-0 left-0 w-64 h-full bg-white shadow-lg transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out md:hidden z-50`}
      >
        <div className="p-4">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
          >
            <svg
              className="h-6 w-6"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <ul className="mt-8 space-y-4">
            <li className="text-gray-600 hover:text-gray-900 cursor-pointer relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-orange-500 after:left-0 after:-bottom-1 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300">Home</li>
            <li className="text-gray-600 hover:text-gray-900 cursor-pointer relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-orange-500 after:left-0 after:-bottom-1 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300">About Us</li>
            <li className="text-gray-600 hover:text-gray-900 cursor-pointer relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-orange-500 after:left-0 after:-bottom-1 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300">Shop</li>
            <li className="text-gray-600 hover:text-gray-900 cursor-pointer relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-orange-500 after:left-0 after:-bottom-1 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300">Blog</li>
            <li className="text-gray-600 hover:text-gray-900 cursor-pointer relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-orange-500 after:left-0 after:-bottom-1 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300">Contact Us</li>
            <button className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition-colors w-full">
              Reservation
            </button>
          </ul>
        </div>
      </div>

      <div className="h-16"></div>
    </>
  );
}