import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useAuth } from '../context/auth';

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const { auth } = useAuth();

  return (
    <Route
      {...rest}
      render={(props) =>
        auth.isLoggedIn() ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default ProtectedRoute;
