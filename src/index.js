import React from 'react';
import { hydrate, render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './pages';

import store, { history } from './store';

import * as serviceWorker from './serviceWorker';

const target = document.querySelector('#root');

const app = (
  <Provider store={store}>
    <App history={history} />
  </Provider>
);

if (process.env.NODE_ENV === 'production') {
  // If we're running in production, we use hydrate to get fast page loads by just
  // attaching event listeners after the initial render
  hydrate(app, target);
} else {
  // If we're not running on the server, just render like normal
  render(app, target);
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
