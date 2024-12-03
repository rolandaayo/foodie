/* eslint-disable no-unused-vars */
import React from "react";

export default function Hero() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center px-4 md:px-44 min-h-[90vh] py-8 text-center bg-[#F2D6C6] gap-8 flex-wrap">
      <div className="bg-purple-300 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 w-full md:max-w-[250px] md:w-auto">
        <img
          className="mx-auto w-16 h-16 mb-4"
          src="/images/promo-icon-1.svg"
        />
        <h2 className="text-2xl font-bold mb-3">Maxican Pizza</h2>
        <p className="text-gray-600 mb-4">
          Food is any substance consumed to provide nutritional support for an
          organism.
        </p>
        <img className="mx-auto w-full rounded-lg" src="/images/promo-1.png" />
      </div>

      <div className="bg-blue-300 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 w-full md:max-w-[250px] md:w-auto">
        <img
          className="mx-auto w-16 h-16 mb-4"
          src="/images/promo-icon-2.svg"
        />
        <h2 className="text-2xl font-bold mb-3">Soft Drinks</h2>
        <p className="text-gray-600 mb-4">
          Food is any substance consumed to provide nutritional support for an
          organism.
        </p>
        <img className="mx-auto w-full rounded-lg" src="/images/promo-2.png" />
      </div>

      <div className="bg-green-300 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 w-full md:max-w-[250px] md:w-auto">
        <img
          className="mx-auto w-16 h-16 mb-4"
          src="/images/promo-icon-3.svg"
        />
        <h2 className="text-2xl font-bold mb-3">French Fry</h2>
        <p className="text-gray-600 mb-4">
          Food is any substance consumed to provide nutritional support for an
          organism.
        </p>
        <img className="mx-auto w-full rounded-lg" src="/images/promo-3.png" />
      </div>

      <div className="bg-yellow-300 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 w-full md:max-w-[250px] md:w-auto">
        <img
          className="mx-auto w-16 h-16 mb-4"
          src="/images/promo-icon-4.svg"
        />
        <h2 className="text-2xl font-bold mb-3">Burger Kingo</h2>
        <p className="text-gray-600 mb-4">
          Food is any substance consumed to provide nutritional support for an
          organism.
        </p>
        <img className="mx-auto w-full rounded-lg" src="/images/promo-4.png" />
      </div>
    </div>
  );
}