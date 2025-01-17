import React from 'react';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children, roles }) {
  const isLoggedIn = sessionStorage.getItem('loggedIn');
  const userRole = sessionStorage.getItem('role');

  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  if (roles && !roles.includes(userRole)) {
    // Redirect if the user's role is not allowed
    return <Navigate to="/unauthorized" />;
  }

  return children;
}

export default ProtectedRoute;
