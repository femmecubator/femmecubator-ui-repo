import { getRoles } from '@testing-library/dom';
import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import Auth from 'utils/auth';
import { getUserRole } from 'utils/cookies';
import { userRoles } from 'utils/constants';

const FemmecubatorRoute = ({
  component: Component,
  isProtected,
  adminRoute,
  path,
  ...rest
}) => {
  let route = <Route {...rest} render={props => <Component {...props} />} />;

  if (isProtected) {
    if (adminRoute) {
      route = (
        <Route
          {...rest}
          render={props =>
            Auth.isLoggedIn() ? (
              getUserRole() === userRoles.admin ? (
                <Component {...props} />
              ) : (
                <Redirect to="/" />
              )
            ) : (
              <Redirect to="/login" />
            )
          }
        />
      );
    } else {
      route = (
        <Route
          {...rest}
          render={props =>
            Auth.isLoggedIn() ? (
              getUserRole() !== userRoles.admin ? (
                <Component {...props} />
              ) : (
                <Redirect to="/" />
              )
            ) : (
              <Redirect to="/login" />
            )
          }
        />
      );
    }
  } else {
    route = (
      <Route
        {...rest}
        render={props =>
          Auth.isLoggedIn() ? (
            getUserRole() !== userRoles.admin ? (
              <Component {...props} />
            ) : (
              <Redirect to="/backoffice" />
            )
          ) : (
            <Component {...props} />
          )
        }
      />
    );
  }

  return route;
};

export default FemmecubatorRoute;
