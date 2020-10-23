import React from 'react';
import { Switch } from 'react-router-dom';
import FemmecubatorRoute from './FemmecubatorRoute';
import { ROUTES } from 'utils/constants';
import ComponentFactory from 'utils/ComponentFactory';

const AppRouter = () => {
  const renderRoutes = ROUTES.map((route) => {
    return (
      <FemmecubatorRoute
        key={route.id}
        exact
        path={route.path}
        {...route}
        component={ComponentFactory.create(route.label)}
      />
    );
  });

  return (
    <>
      <Switch>{renderRoutes}</Switch>
    </>
  );
};

export default AppRouter;
