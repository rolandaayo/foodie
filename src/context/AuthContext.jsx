import { createContext, useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('user');
    return savedUser ? JSON.parse(savedUser) : null;
  });
  const [orders, setOrders] = useState(() => {
    const savedOrders = localStorage.getItem('orders');
    return savedOrders ? JSON.parse(savedOrders) : [];
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
    } else {
      localStorage.removeItem('user');
    }
  }, [user]);

  useEffect(() => {
    localStorage.setItem('orders', JSON.stringify(orders));
  }, [orders]);

  const login = (email, password) => {
    // In a real app, you would validate against a backend
    const mockUser = {
      id: '1',
      email,
      name: email.split('@')[0],
    };
    setUser(mockUser);
    return mockUser;
  };

  const register = (email, password, name) => {
    // In a real app, you would send this to a backend
    const newUser = {
      id: Date.now().toString(),
      email,
      name,
    };
    setUser(newUser);
    return newUser;
  };

  const logout = () => {
    setUser(null);
  };

  const addOrder = (order) => {
    const newOrder = {
      ...order,
      id: Date.now().toString(),
      date: new Date().toISOString(),
      status: 'processing',
      userId: user?.id,
    };
    setOrders(prevOrders => [newOrder, ...prevOrders]);
    return newOrder;
  };

  return (
    <AuthContext.Provider value={{
      user,
      login,
      logout,
      register,
      orders,
      addOrder,
    }}>
      {children}
    </AuthContext.Provider>
  );
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useAuth = () => useContext(AuthContext); 