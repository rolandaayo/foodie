// eslint-disable-next-line no-unused-vars
import React from 'react'

export default function Footer() {
  const quickLinks = [
    { name: 'Home', href: '#' },
    { name: 'Menu', href: '#' },
    { name: 'About Us', href: '#' },
    { name: 'Contact', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Careers', href: '#' }
  ]

  const services = [
    { name: 'Food Delivery', href: '#' },
    { name: 'Catering', href: '#' },
    { name: 'Corporate Orders', href: '#' },
    { name: 'Event Planning', href: '#' },
    { name: 'Gift Cards', href: '#' }
  ]

  const contactInfo = [
    { icon: 'fas fa-map-marker-alt', text: '123 Food Street, Cuisine City, FC 12345' },
    { icon: 'fas fa-phone', text: '(555) 123-4567' },
    { icon: 'fas fa-envelope', text: 'info@foodie.com' },
    { icon: 'fas fa-clock', text: 'Mon-Sun: 8:00 AM - 11:00 PM' }
  ]

  const socialLinks = [
    { icon: 'fab fa-facebook-f', href: '#' },
    { icon: 'fab fa-twitter', href: '#' },
    { icon: 'fab fa-instagram', href: '#' }
  ]

  const footerPolicies = [
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
    { name: 'Cookie Policy', href: '#' }
  ]

  return (
    <div className="bg-[#F2D6C6] text-black py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent hover:from-purple-600 hover:via-pink-500 hover:to-orange-500 transition-all duration-500">Foodie</h2>
            <p className="text-black text-sm md:text-base">Discover delicious meals from around the world, delivered right to your doorstep. We pride ourselves in delivering quality food experiences since 2020.</p>
            <div className="flex space-x-4 pt-4">
              {socialLinks.map((social, index) => (
                <a key={index} href={social.href} className="text-black hover:text-orange-500">
                  <i className={social.icon}></i>
                </a>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-black hover:text-orange-500 transition-colors duration-300">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a href={service.href} className="text-black hover:text-orange-500 transition-colors duration-300">
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="text-black space-y-3">
              {contactInfo.map((info, index) => (
                <p key={index} className="flex items-center">
                  <i className={`${info.icon} mr-2`}></i>{info.text}
                </p>
              ))}
            </div>
            <div className="mt-4">
              <h4 className="font-semibold mb-2">Subscribe to our newsletter</h4>
              <div className="flex">
                <input type="email" placeholder="Enter your email" className="px-4 py-2 rounded-l-md w-full focus:outline-none focus:ring-2 focus:ring-orange-500" />
                <button className="bg-orange-500 text-white px-4 py-2 rounded-r-md hover:bg-orange-600 transition-colors duration-300">Subscribe</button>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-300 mt-8 pt-8 text-center">
          <p className="text-sm text-black">© 2024 Foodie. All rights reserved. Created with ❤️ by rolandaayo</p>
          <div className="mt-4 space-x-4 text-sm">
            {footerPolicies.map((policy, index) => (
              <a key={index} href={policy.href} className="text-black hover:text-orange-500 transition-colors duration-300">
                {policy.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}