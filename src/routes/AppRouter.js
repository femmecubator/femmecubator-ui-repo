import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import { ROUTES } from '../utils/constants';
import ComponentFactory from 'utils/ComponentFactory';

const AppRouter = () => {
  const renderRoutes = ROUTES.map(({ id, path, label, isProtected }) =>
    isProtected ? (
      <ProtectedRoute
        exact
        path={path}
        component={ComponentFactory.create(label)}
        key={id}
      />
    ) : (
      <Route
        exact
        path={path}
        component={ComponentFactory.create(label)}
        key={id}
      />
    )
  );

  return (
    <>
      <Switch>{renderRoutes}</Switch>
    </>
  );
};

export default AppRouter;
