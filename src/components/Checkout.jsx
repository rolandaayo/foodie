import { useState } from 'react';
import PropTypes from 'prop-types';
import { useCart } from '../context/CartContext';
import { useForm } from 'react-hook-form';
import { PaystackButton } from 'react-paystack';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useAuth } from '../context/AuthContext';

// Form validation schema
const schema = yup.object().shape({
  firstName: yup.string().required('First name is required'),
  lastName: yup.string().required('Last name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  address: yup.string().required('Address is required'),
  city: yup.string().required('City is required'),
  zipCode: yup.string()
    .matches(/^\d{5}(-\d{4})?$/, 'Invalid ZIP code')
    .required('ZIP code is required'),
  phoneNumber: yup.string()
    .matches(/^\+?[1-9]\d{1,14}$/, 'Invalid phone number')
    .required('Phone number is required'),
});

const PAYSTACK_PUBLIC_KEY = 'pk_test_dc632dcb524653128c7ffcd7f3c74cd9c2704c79'; // Replace with your test key

export default function Checkout({ onClose }) {
  const { cart, cartTotal, clearCart } = useCart();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [shippingData, setShippingData] = useState(null);
  const { user, addOrder } = useAuth();

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const handleShippingSubmit = (data) => {
    setShippingData(data);
    setStep(2);
  };

  const componentProps = {
    email: shippingData?.email,
    amount: Math.round(cartTotal * 100), // Convert to kobo/cents
    metadata: {
      name: shippingData ? `${shippingData.firstName} ${shippingData.lastName}` : '',
      phone: shippingData?.phoneNumber,
    },
    publicKey: PAYSTACK_PUBLIC_KEY,
    text: loading ? "Processing..." : "Pay Now",
    onSuccess: async (reference) => {
      setLoading(true);
      try {
        const orderData = {
          items: cart,
          total: cartTotal,
          shippingDetails: shippingData,
          paymentReference: reference,
        };
        
        await addOrder(orderData);
        clearCart();
        setStep(3);
      } catch (error) {
        console.error('Order processing failed:', error);
        alert('Failed to process order. Please try again.');
      } finally {
        setLoading(false);
      }
    },
    onClose: () => {
      alert('Payment cancelled');
    }
  };

  if (!user) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
        <div className="bg-white p-6 rounded-lg max-w-md w-full">
          <h2 className="text-xl font-bold mb-4">Please Login</h2>
          <p className="mb-4">You need to be logged in to checkout.</p>
          <button
            onClick={() => {/* Handle login */}}
            className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600"
          >
            Login to Continue
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Checkout</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            ✕
          </button>
        </div>

        {/* Step 1: Order Summary and Shipping Form */}
        {step === 1 && (
          <div className="space-y-4">
            <h3 className="font-semibold">Order Summary</h3>
            {cart.map((item) => (
              <div key={item.id} className="flex justify-between items-center">
                <span>{item.name} x {item.quantity}</span>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
            <div className="border-t pt-2">
              <div className="flex justify-between font-bold">
                <span>Total:</span>
                <span>${cartTotal.toFixed(2)}</span>
              </div>
            </div>

            {/* Shipping Form */}
            <form onSubmit={handleSubmit(handleShippingSubmit)} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">First Name</label>
                  <input
                    {...register('firstName')}
                    className={`mt-1 block w-full rounded-md border ${errors.firstName ? 'border-red-500' : 'border-gray-300'} shadow-sm focus:border-orange-500 focus:ring-orange-500`}
                  />
                  {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Last Name</label>
                  <input
                    {...register('lastName')}
                    className={`mt-1 block w-full rounded-md border ${errors.lastName ? 'border-red-500' : 'border-gray-300'} shadow-sm focus:border-orange-500 focus:ring-orange-500`}
                  />
                  {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName.message}</p>}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  {...register('email')}
                  type="email"
                  className={`mt-1 block w-full rounded-md border ${errors.email ? 'border-red-500' : 'border-gray-300'} shadow-sm focus:border-orange-500 focus:ring-orange-500`}
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                <input
                  {...register('phoneNumber')}
                  className={`mt-1 block w-full rounded-md border ${errors.phoneNumber ? 'border-red-500' : 'border-gray-300'} shadow-sm focus:border-orange-500 focus:ring-orange-500`}
                />
                {errors.phoneNumber && <p className="text-red-500 text-xs mt-1">{errors.phoneNumber.message}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Address</label>
                <input
                  {...register('address')}
                  className={`mt-1 block w-full rounded-md border ${errors.address ? 'border-red-500' : 'border-gray-300'} shadow-sm focus:border-orange-500 focus:ring-orange-500`}
                />
                {errors.address && <p className="text-red-500 text-xs mt-1">{errors.address.message}</p>}
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">City</label>
                  <input
                    {...register('city')}
                    className={`mt-1 block w-full rounded-md border ${errors.city ? 'border-red-500' : 'border-gray-300'} shadow-sm focus:border-orange-500 focus:ring-orange-500`}
                  />
                  {errors.city && <p className="text-red-500 text-xs mt-1">{errors.city.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">ZIP Code</label>
                  <input
                    {...register('zipCode')}
                    className={`mt-1 block w-full rounded-md border ${errors.zipCode ? 'border-red-500' : 'border-gray-300'} shadow-sm focus:border-orange-500 focus:ring-orange-500`}
                  />
                  {errors.zipCode && <p className="text-red-500 text-xs mt-1">{errors.zipCode.message}</p>}
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600"
              >
                Continue to Payment
              </button>
            </form>
          </div>
        )}

        {/* Step 2: Payment */}
        {step === 2 && (
          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Shipping Details</h3>
              <p>{shippingData.firstName} {shippingData.lastName}</p>
              <p>{shippingData.address}</p>
              <p>{shippingData.city}, {shippingData.zipCode}</p>
              <p>{shippingData.email}</p>
              <p>{shippingData.phoneNumber}</p>
            </div>

            <div className="border-t pt-2">
              <div className="flex justify-between font-bold">
                <span>Total to Pay:</span>
                <span>${cartTotal.toFixed(2)}</span>
              </div>
            </div>

            <PaystackButton
              {...componentProps}
              className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 disabled:bg-gray-400"
            />
          </div>
        )}

        {/* Step 3: Success */}
        {step === 3 && (
          <div className="text-center space-y-4">
            <div className="text-green-500 text-5xl">✓</div>
            <h3 className="text-xl font-semibold">Order Confirmed!</h3>
            <p className="text-gray-600">
              Thank you for your order. We&apos;ll send you an email confirmation shortly.
            </p>
            <button
              onClick={onClose}
              className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

Checkout.propTypes = {
  onClose: PropTypes.func.isRequired,
}; 