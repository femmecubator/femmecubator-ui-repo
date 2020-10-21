import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import { routes } from '../utils/constants';

const AppRouter = () => {
  const renderRoutes = routes.map(({ path, component, isProtected }, key) =>
    isProtected ? (
      <ProtectedRoute exact path={path} component={component} key={key} />
    ) : (
      <Route exact path={path} component={component} key={key} />
    )
  );

  return (
    <div>
      <Switch>{renderRoutes}</Switch>
    </div>
  );
};

export default AppRouter;
