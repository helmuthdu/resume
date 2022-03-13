import { ConnectedRouter } from 'connected-react-router';
import PropTypes from 'prop-types';
import React, { lazy, Suspense } from 'react';
import { Redirect } from 'react-router';
import { Route, Switch } from 'react-router-dom';

import NotFoundPage from './NotFoundPage/NotFoundPage';

const DefaultLayoutRoute = lazy(() => import('../layouts/DefaultLayout'));
const AboutPage = lazy(() => import('./AboutPage/AboutPage'));
const HomePage = lazy(() => import('./HomePage/HomePage'));

export const AppRoutes = ({ routes }) => {
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

AppRoutes.propTypes = {
  routes: PropTypes.array.isRequired
};

AppRoutes.defaultProps = {
  routes: []
};

export const AppRouter = ({ history, routes }) => {
  return (
    <ConnectedRouter history={history}>
      <AppRoutes routes={routes} />
    </ConnectedRouter>
  );
};

AppRouter.propTypes = {
  history: PropTypes.any.isRequired,
  routes: PropTypes.array.isRequired
};

export default AppRouter;
