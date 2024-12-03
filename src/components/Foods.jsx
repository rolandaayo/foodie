/* eslint-disable no-unused-vars */
import React from "react";

export default function Foods() {
  return (
    <div className="bg-[#F2D6C6] py-16 ">
      <div className="text-center mb-12">
        <h2 className="text-4xl sm:text-3xl font-bold text-[#2C3E50] mb-4">Our Delicious Foods</h2>
        <p className="text-lg sm:text-base text-gray-600 max-w-2xl mx-auto px-4">
          Food is any substance consumed to provide nutritional support for an
          organism.
        </p>
      </div>

      <div className="flex items-center justify-center gap-4 sm:gap-8 px-2 sm:px-4 md:px-24 flex-wrap">
        <div className="bg-white p-4 sm:p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 w-[90%] sm:w-full md:w-80">
          <p className="bg-red-500 text-white w-16 text-center py-1 rounded-full mb-4">-15%</p>
          <img src="/images/food-menu-1.png" className="w-full h-48 sm:h-56 object-cover rounded-lg mb-4" />
          <p className="text-gray-500 font-medium">Chicken</p>
          <h2 className="text-lg sm:text-xl font-bold text-[#2C3E50] my-2">Fried Chicken Unlimited</h2>
          <p className="text-gray-600 mb-4">Price: <span className="text-green-600 font-bold">$49.00</span> <span className="line-through text-gray-400">$69.00</span></p>
          <button className="w-full bg-[#E67E22] hover:bg-[#D35400] text-white py-2 rounded-lg transition-colors duration-300">Order Now</button>
        </div>

        <div className="bg-white p-4 sm:p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 w-[90%] sm:w-full md:w-80">
          <p className="bg-red-500 text-white w-16 text-center py-1 rounded-full mb-4">-10%</p>
          <img src="/images/food-menu-2.png" className="w-full h-48 sm:h-56 object-cover rounded-lg mb-4" />
          <p className="text-gray-500 font-medium">Noddles</p>
          <h2 className="text-lg sm:text-xl font-bold text-[#2C3E50] my-2">Burger King Whopper</h2>
          <p className="text-gray-600 mb-4">Price: <span className="text-green-600 font-bold">$49.00</span> <span className="line-through text-gray-400">$69.00</span></p>
          <button className="w-full bg-[#E67E22] hover:bg-[#D35400] text-white py-2 rounded-lg transition-colors duration-300">Order Now</button>
        </div>

        <div className="bg-white p-4 sm:p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 w-[90%] sm:w-full md:w-80">
          <p className="bg-red-500 text-white w-16 text-center py-1 rounded-full mb-4">-25%</p>
          <img src="/images/food-menu-3.png" className="w-full h-48 sm:h-56 object-cover rounded-lg mb-4" />
          <p className="text-gray-500 font-medium">Pizzas</p>
          <h2 className="text-lg sm:text-xl font-bold text-[#2C3E50] my-2">White Castle Pizzas</h2>
          <p className="text-gray-600 mb-4">Price: <span className="text-green-600 font-bold">$49.00</span> <span className="line-through text-gray-400">$69.00</span></p>
          <button className="w-full bg-[#E67E22] hover:bg-[#D35400] text-white py-2 rounded-lg transition-colors duration-300">Order Now</button>
        </div>

        <div className="bg-white p-4 sm:p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 w-[90%] sm:w-full md:w-80">
          <p className="bg-red-500 text-white w-16 text-center py-1 rounded-full mb-4">-65%</p>
          <img src="/images/food-menu-4.png" className="w-full h-48 sm:h-56 object-cover rounded-lg mb-4" />
          <p className="text-gray-500 font-medium">Burrito</p>
          <h2 className="text-lg sm:text-xl font-bold text-[#2C3E50] my-2">Bell Burrito Supreme</h2>
          <p className="text-gray-600 mb-4">Price: <span className="text-green-600 font-bold">$49.00</span> <span className="line-through text-gray-400">$69.00</span></p>
          <button className="w-full bg-[#E67E22] hover:bg-[#D35400] text-white py-2 rounded-lg transition-colors duration-300">Order Now</button>
        </div>

        <div className="bg-white p-4 sm:p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 w-[90%] sm:w-full md:w-80">
          <p className="bg-red-500 text-white w-16 text-center py-1 rounded-full mb-4">-95%</p>
          <img src="/images/food-menu-5.png" className="w-full h-48 sm:h-56 object-cover rounded-lg mb-4" />
          <p className="text-gray-500 font-medium">Nuggets</p>
          <h2 className="text-lg sm:text-xl font-bold text-[#2C3E50] my-2">Kung Pao Chicken BBQ</h2>
          <p className="text-gray-600 mb-4">Price: <span className="text-green-600 font-bold">$49.00</span> <span className="line-through text-gray-400">$69.00</span></p>
          <button className="w-full bg-[#E67E22] hover:bg-[#D35400] text-white py-2 rounded-lg transition-colors duration-300">Order Now</button>
        </div>

        <div className="bg-white p-4 sm:p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 w-[90%] sm:w-full md:w-80">
          <p className="bg-red-500 text-white w-16 text-center py-1 rounded-full mb-4">-75%</p>
          <img src="/images/food-menu-6.png" className="w-full h-48 sm:h-56 object-cover rounded-lg mb-4" />
          <p className="text-gray-500 font-medium">Chicken</p>
          <h2 className="text-lg sm:text-xl font-bold text-[#2C3E50] my-2">Wendy Chicken</h2>
          <p className="text-gray-600 mb-4">Price: <span className="text-green-600 font-bold">$49.00</span> <span className="line-through text-gray-400">$69.00</span></p>
          <button className="w-full bg-[#E67E22] hover:bg-[#D35400] text-white py-2 rounded-lg transition-colors duration-300">Order Now</button>
        </div>
      </div>
    </div>
  );
}