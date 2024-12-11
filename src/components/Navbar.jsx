/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import Cart from './Cart';
import AuthModal from './AuthModal';
import OrderHistory from './OrderHistory';

export default function Navbar() {
  const { cart } = useCart();
  const { user, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isOrderHistoryOpen, setIsOrderHistoryOpen] = useState(false);

  const cartItemsCount = cart.reduce((total, item) => total + item.quantity, 0);

  const handleLogout = () => {
    logout();
  };

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
                
                {user && (
                  <li>
                    <button
                      onClick={() => setIsOrderHistoryOpen(true)}
                      className="text-gray-600 hover:text-gray-900 cursor-pointer relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-orange-500 after:left-0 after:-bottom-1 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
                    >
                      Orders
                    </button>
                  </li>
                )}

                {/* Cart Icon */}
                <li className="relative">
                  <button
                    onClick={() => setIsCartOpen(!isCartOpen)}
                    className="text-gray-600 hover:text-gray-900"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    {cartItemsCount > 0 && (
                      <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                        {cartItemsCount}
                      </span>
                    )}
                  </button>
                </li>

                {/* Auth Buttons */}
                {user ? (
                  <div className="relative group">
                    <button className="flex items-center space-x-2 text-gray-700 hover:text-gray-900">
                      <span>{user.name}</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 hidden group-hover:block">
                      <button
                        onClick={handleLogout}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                      >
                        Logout
                      </button>
                    </div>
                  </div>
                ) : (
                  <button
                    onClick={() => setIsAuthModalOpen(true)}
                    className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition-colors"
                  >
                    Login / Sign Up
                  </button>
                )}
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
            <li className="text-gray-600 hover:text-gray-900 cursor-pointer">Home</li>
            <li className="text-gray-600 hover:text-gray-900 cursor-pointer">About Us</li>
            <li className="text-gray-600 hover:text-gray-900 cursor-pointer">Shop</li>
            <li className="text-gray-600 hover:text-gray-900 cursor-pointer">Blog</li>
            <li className="text-gray-600 hover:text-gray-900 cursor-pointer">Contact Us</li>
            {user && (
              <li>
                <button
                  onClick={() => setIsOrderHistoryOpen(true)}
                  className="text-gray-600 hover:text-gray-900 w-full text-left"
                >
                  Orders
                </button>
              </li>
            )}
            {user ? (
              <li>
                <button
                  onClick={handleLogout}
                  className="text-gray-600 hover:text-gray-900 w-full text-left"
                >
                  Logout
                </button>
              </li>
            ) : (
              <li>
                <button
                  onClick={() => setIsAuthModalOpen(true)}
                  className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition-colors w-full"
                >
                  Login / Sign Up
                </button>
              </li>
            )}
          </ul>
        </div>
      </div>

      {/* Modals */}
      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} />
      <OrderHistory isOpen={isOrderHistoryOpen} onClose={() => setIsOrderHistoryOpen(false)} />

      <div className="h-16"></div>
    </>
  );
}