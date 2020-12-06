import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useAuth } from '../context/auth';
const FemmecubatorRoute = ({ component: Component, isProtected, ...rest }) => {
  const {
    authState: { isLoggedIn },
  } = useAuth();
  let route = <Route {...rest} render={(props) => <Component {...props} />} />;

  if (isProtected) {
    route = (
      <Route
        {...rest}
        render={(props) =>
          isLoggedIn ? <Component {...props} /> : <Redirect to="/login" />
        }
      />
    );
  }

  return route;
};

export default FemmecubatorRoute;
