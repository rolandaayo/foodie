// eslint-disable-next-line no-unused-vars
import React from 'react'

export default function Footer() {
  return (
    <div className="bg-gray-800 text-white py-8 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Foodie</h3>
            <p className="text-gray-400">Discover delicious meals from around the world, delivered right to your doorstep.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Menu</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="text-gray-400">
              <p>123 Food Street</p>
              <p>Cuisine City, FC 12345</p>
              <p>Phone: (555) 123-4567</p>
              <p>Email: info@tastybites.com</p>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>© 2024 rolandaayo. All rights reserved.</p>
        </div>
      </div>
    </div>  )
}
