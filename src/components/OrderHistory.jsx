import PropTypes from 'prop-types';
import { useAuth } from '../context/AuthContext';

export default function OrderHistory({ isOpen, onClose }) {
  const { orders, user } = useAuth();

  const userOrders = orders.filter(order => order.userId === user?.id);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto m-4">
        <div className="flex justify-between items-center mb-6 sticky top-0 bg-white py-2">
          <h2 className="text-2xl font-bold">Order History</h2>
          <button 
            onClick={onClose} 
            className="text-gray-500 hover:text-gray-700 p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {userOrders.length === 0 ? (
          <div className="text-center py-12">
            <svg className="w-16 h-16 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
            <p className="text-gray-500 text-lg">No orders yet</p>
            <p className="text-gray-400 mt-2">Your order history will appear here</p>
          </div>
        ) : (
          <div className="space-y-4">
            {userOrders.map((order) => (
              <div key={order.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-center mb-2">
                  <div>
                    <span className="font-semibold text-lg">Order #{order.id.slice(-8)}</span>
                    <p className="text-sm text-gray-500">
                      {new Date(order.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit'
                      })}
                    </p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm ${
                    order.status === 'completed' ? 'bg-green-100 text-green-800' :
                    order.status === 'processing' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                  </span>
                </div>

                <div className="space-y-2 mt-4">
                  {order.items.map((item) => (
                    <div key={item.id} className="flex items-center justify-between py-2 border-b last:border-0">
                      <div className="flex items-center gap-3">
                        <img 
                          src={item.image} 
                          alt={item.name} 
                          className="w-12 h-12 object-cover rounded"
                        />
                        <div>
                          <p className="font-medium">{item.name}</p>
                          <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
                        </div>
                      </div>
                      <span className="font-medium">${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-4 pt-2 border-t">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm text-gray-500">Shipping Address:</p>
                      <p className="text-sm">{order.shippingDetails?.address}</p>
                      <p className="text-sm">{order.shippingDetails?.city}, {order.shippingDetails?.zipCode}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-500">Total Amount:</p>
                      <p className="text-xl font-bold text-orange-500">${order.total.toFixed(2)}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

OrderHistory.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
}; 