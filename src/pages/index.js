import { ConnectedRouter } from 'connected-react-router';
import React from 'react';
import { hot } from 'react-hot-loader';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import DefaultLayoutRoute from '../layouts/DefaultLayout';
import AboutPage from './AboutPage/AboutPage';
import AppPage from './AppPage/AppPage';
import NotFoundPage from './NotFoundPage/NotFoundPage';

const ConnectedSwitch = connect(state => ({
  location: state.location
}))(Switch);

const App = ({ history }) => {
  return (
    <ConnectedRouter history={history}>
      <ConnectedSwitch>
        <DefaultLayoutRoute exact path="/" component={AppPage} />
        <DefaultLayoutRoute path="/about" component={AboutPage} />
        <Route path="*" component={NotFoundPage} />
      </ConnectedSwitch>
    </ConnectedRouter>
  );
};

export default hot(module)(App);
