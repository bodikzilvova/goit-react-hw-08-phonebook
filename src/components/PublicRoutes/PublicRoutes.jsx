import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const PublicRoutes = ({ children }) => {
  const isAuth = useSelector(state => state.auth.token);
  return !isAuth ? children : <Navigate to="/" />;
};

export default PublicRoutes;
