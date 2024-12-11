import { useState } from 'react';
import { useCart } from '../context/CartContext';
import Checkout from './Checkout';

export default function Cart({ isOpen, onClose }) {
  const { cart, removeFromCart, updateQuantity, cartTotal } = useCart();
  const [showCheckout, setShowCheckout] = useState(false);

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed right-0 top-0 h-full w-80 bg-white shadow-lg transform transition-transform duration-300 z-50 overflow-y-auto">
        <div className="p-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">Your Cart</h2>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
              ✕
            </button>
          </div>
          
          {cart.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            <>
              {cart.map((item) => (
                <div key={item.id} className="flex items-center gap-4 mb-4 border-b pb-4">
                  <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded" />
                  <div className="flex-1">
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-gray-600">${item.price}</p>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => updateQuantity(item.id, Math.max(0, item.quantity - 1))}
                        className="px-2 py-1 bg-gray-200 rounded"
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="px-2 py-1 bg-gray-200 rounded"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    Remove
                  </button>
                </div>
              ))}
              <div className="mt-4">
                <div className="flex justify-between font-bold">
                  <span>Total:</span>
                  <span>${cartTotal.toFixed(2)}</span>
                </div>
                <button 
                  onClick={() => setShowCheckout(true)}
                  className="w-full bg-orange-500 text-white py-2 rounded-lg mt-4 hover:bg-orange-600"
                >
                  Checkout
                </button>
              </div>
            </>
          )}
        </div>
      </div>

      {showCheckout && (
        <Checkout onClose={() => {
          setShowCheckout(false);
          onClose();
        }} />
      )}
    </>
  );
} 