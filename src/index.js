import React from 'react';
import { anchorate } from 'anchorate';
import { render } from 'react-dom';
import { connect, Provider } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';

import { DefaultLayoutRoute } from './layouts/DefaultLayout';
import AboutPage from './pages/AboutPage/AboutPage';
import App from './pages/AppPage/AppPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

import registerServiceWorker from './registerServiceWorker';
import store, { history } from './store';

const target = document.querySelector('#root');

history.listen(() => {
  anchorate();
});

const ConnectedSwitch = connect(state => ({
  location: state.location
}))(Switch);

render(
  <Provider store={store}>
    <ConnectedRouter history={history} basename={process.env.PUBLIC_URL}>
      <ConnectedSwitch>
        <Route exact path="/">
          <Redirect to="/home"/>
        </Route>
        <DefaultLayoutRoute path="/home" component={App}/>
        <DefaultLayoutRoute path="/about" component={AboutPage}/>
        <Route path="*" component={NotFoundPage}/>
      </ConnectedSwitch>
    </ConnectedRouter>
  </Provider>,
  target
);
registerServiceWorker();
