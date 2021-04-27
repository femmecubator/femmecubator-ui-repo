import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import Auth from 'utils/auth';
const FemmecubatorRoute = ({ component: Component, isProtected, ...rest }) => {
  let route = <Route {...rest} render={props => <Component {...props} />} />;

  if (isProtected) {
    route = (
      <Route
        {...rest}
        render={props =>
          Auth.isLoggedIn() ? (
            <Component {...props} />
          ) : (
            <Redirect to="/login" />
          )
        }
      />
    );
  }

  return route;
};

export default FemmecubatorRoute;
