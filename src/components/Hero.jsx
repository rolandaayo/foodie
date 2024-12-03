/* eslint-disable no-unused-vars */
import React from "react";

export default function Hero() {
  const items = [
    {
      bgColor: "bg-purple-300",
      icon: "/images/promo-icon-1.svg",
      title: "Maxican Pizza",
      image: "/images/promo-1.png"
    },
    {
      bgColor: "bg-blue-300",
      icon: "/images/promo-icon-2.svg",
      title: "Soft Drinks",
      image: "/images/promo-2.png"
    },
    {
      bgColor: "bg-green-300",
      icon: "/images/promo-icon-3.svg",
      title: "French Fry",
      image: "/images/promo-3.png"
    },
    {
      bgColor: "bg-yellow-300",
      icon: "/images/promo-icon-4.svg",
      title: "Burger Kingo",
      image: "/images/promo-4.png"
    }
  ];

  return (
    <div className="flex flex-col md:flex-row items-center justify-center px-4 md:px-44 min-h-[90vh] py-8 text-center bg-[#F2D6C6] gap-8 flex-wrap">
      {items.map((item, index) => (
        <div key={index} className={`${item.bgColor} p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 w-full md:max-w-[250px] md:w-auto`}>
          <img
            className="mx-auto w-16 h-16 mb-4"
            src={item.icon}
          />
          <h2 className="text-2xl font-bold mb-3">{item.title}</h2>
          <p className="text-gray-600 mb-4">
            Food is any substance consumed to provide nutritional support for an
            organism.
          </p>
          <img className="mx-auto w-full rounded-lg" src={item.image} />
        </div>
      ))}
    </div>
  );
}