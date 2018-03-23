import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import { authReducer } from './auth';
import { counterReducer } from './counter';
import { uiReducer } from './ui';

export default combineReducers({
  auth: authReducer,
  counter: counterReducer,
  router: routerReducer,
  ui: uiReducer,
});
