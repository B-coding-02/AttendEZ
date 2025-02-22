import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const isAdmin = localStorage.getItem('isAdmin'); // Check if admin access is granted
  return isAdmin ? children : <Navigate to="/unauthorized" />;
};

export default ProtectedRoute;
