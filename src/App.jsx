/* eslint-disable no-unused-vars */
import React from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Hero2 from './components/Hero2'
import Foods from './components/Foods'
import Burger from './components/Burger'
import { CartProvider } from './context/CartContext';
import Cart from './components/Cart';
import { AuthProvider } from './context/AuthContext';

export default function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <div>
          <Navbar/>
          <Header/>
          <Hero/>
          <Hero2/>
          <Foods/>
          <Burger/>
          <Cart />
          <Footer/>
        </div>
      </CartProvider>
    </AuthProvider>
  )
}
