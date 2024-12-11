/* eslint-disable no-unused-vars */
import React from "react";
import { useCart } from '../context/CartContext';

export default function Foods() {
  const { addToCart } = useCart();
  
  const foodItems = [
    {
      id: 1,
      discount: "15",
      image: "/images/food-menu-1.png",
      category: "Chicken",
      name: "Fried Chicken Unlimited",
      price: 49.00,
      originalPrice: 69.00
    },
    {
      id: 2,
      discount: "10",
      image: "/images/food-menu-2.png",
      category: "Noddles",
      name: "Burger King Whopper",
      price: 49.00,
      originalPrice: 69.00
    },
    {
      id: 3,
      discount: "25",
      image: "/images/food-menu-3.png",
      category: "Pizzas",
      name: "White Castle Pizzas",
      price: 49.00,
      originalPrice: 69.00
    },
    {
      id: 4,
      discount: "65",
      image: "/images/food-menu-4.png",
      category: "Burrito",
      name: "Bell Burrito Supreme",
      price: 49.00,
      originalPrice: 69.00
    },
    {
      id: 5,
      discount: "95",
      image: "/images/food-menu-5.png",
      category: "Nuggets",
      name: "Kung Pao Chicken BBQ",
      price: 49.00,
      originalPrice: 69.00
    },
    {
      id: 6,
      discount: "75",
      image: "/images/food-menu-6.png",
      category: "Chicken",
      name: "Wendy Chicken",
      price: 49.00,
      originalPrice: 69.00
    }
  ];

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
        {foodItems.map((item) => (
          <div key={item.id} className="bg-white p-4 sm:p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 w-[90%] sm:w-full md:w-80">
            <p className="bg-red-500 text-white w-16 text-center py-1 rounded-full mb-4">-{item.discount}%</p>
            <img src={item.image} alt={item.name} className="w-full h-48 sm:h-56 object-cover rounded-lg mb-4" />
            <p className="text-gray-500 font-medium">{item.category}</p>
            <h2 className="text-lg sm:text-xl font-bold text-[#2C3E50] my-2">{item.name}</h2>
            <p className="text-gray-600 mb-4">Price: <span className="text-green-600 font-bold">${item.price}</span> <span className="line-through text-gray-400">${item.originalPrice}</span></p>
            <button 
              onClick={() => addToCart(item)}
              className="w-full bg-[#E67E22] hover:bg-[#D35400] text-white py-2 rounded-lg transition-colors duration-300"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}