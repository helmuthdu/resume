// @flow
import { ConnectedRouter } from 'connected-react-router';
import React, { lazy, Suspense } from 'react';
import { hot } from 'react-hot-loader';
import { Redirect } from 'react-router';
import { Route, Switch } from 'react-router-dom';

import NotFoundPage from './NotFoundPage/NotFoundPage';

const DefaultLayoutRoute = lazy(() => import('../layouts/DefaultLayout'));
const AboutPage = lazy(() => import('./AboutPage/AboutPage'));
const HomePage = lazy(() => import('./HomePage/HomePage'));

export const AppRoutes = ({ routes }: any) => {
  return (
    <Suspense fallback={null}>
      <Switch>
        {routes && routes.length && routes.reduce((a, b) => [...a, b], [])}
        <DefaultLayoutRoute exact path="/" component={HomePage} />
        <DefaultLayoutRoute path="/about" component={AboutPage} />
        <Route path="/not-found" component={NotFoundPage} />
        <Redirect to="/not-found" />
      </Switch>
    </Suspense>
  );
};

export const AppRouter = ({ history, routes }: any) => {
  return (
    <ConnectedRouter history={history}>
      <AppRoutes routes={routes} />
    </ConnectedRouter>
  );
};

export default hot(module)(AppRouter);
