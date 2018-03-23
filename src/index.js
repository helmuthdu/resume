import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';

import { DefaultLayoutRoute } from './layouts/DefaultLayout';
import AboutPage from './pages/AboutPage/AboutPage';
import App from './pages/AppPage/AppPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

import registerServiceWorker from './registerServiceWorker';
import store, { history } from './store';

const target = document.querySelector('#root');

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path="/">
          <Redirect to="/home"/>
        </Route>
        <DefaultLayoutRoute path="/home" component={App}/>
        <DefaultLayoutRoute path="/about" component={AboutPage}/>
        <Route path="*" component={NotFoundPage}/>
      </Switch>
    </ConnectedRouter>
  </Provider>,
  target
);
registerServiceWorker();
