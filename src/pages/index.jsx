import { ConnectedRouter } from 'connected-react-router';
import React, { lazy, Suspense } from 'react';
import { hot } from 'react-hot-loader';
import { Redirect } from 'react-router';
import { Route, Switch } from 'react-router-dom';

const DefaultLayoutRoute = lazy(() => import('../layouts/DefaultLayout'));
const AboutPage = lazy(() => import('./AboutPage/AboutPage'));
const HomePage = lazy(() => import('./HomePage/HomePage'));
const NotFoundPage = lazy(() => import('./NotFoundPage/NotFoundPage'));

export const App = ({ history }) => (
  <ConnectedRouter history={history}>
    <Suspense fallback={null}>
      <Switch>
        <DefaultLayoutRoute exact path="/" component={HomePage} />
        <DefaultLayoutRoute path="/about" component={AboutPage} />
        <Route path="/not-found" component={NotFoundPage} />
        <Redirect to="/not-found" />
      </Switch>
    </Suspense>
  </ConnectedRouter>
);

export default hot(module)(App);
