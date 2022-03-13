import { render } from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routes';

import * as serviceWorker from './serviceWorker';
import createStore from './store';

const { store, history } = createStore([]);

const app = (
  <Provider store={store}>
    <AppRouter history={history} routes={[]} />
  </Provider>
);

const root = document.querySelector('#root');

render(app, root);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
