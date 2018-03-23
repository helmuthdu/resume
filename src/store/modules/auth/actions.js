import { config } from '../../../config';
import { AUTH_LOGIN_FAILED, AUTH_LOGIN_SUCCESS, AUTH_LOGOUT } from './types';

export const doLogin = (email, password) => async dispatch => {
  try {
    const response = await fetch({
      type: 'POST',
      url: `${config.urls.host}/token`,
      headers: {
        Accept: 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: email,
        password: password,
        grant_type: 'password'
      })
    });

    const responseBody = await response.json();

    dispatch({
      type: AUTH_LOGIN_SUCCESS,
      username: responseBody.username,
      email: responseBody.email,
      token: responseBody.access_token,
      expiryDate: responseBody.expires_in
    });
  } catch (err) {
    console.log('ERROR: ', err);
    dispatch({
      type: AUTH_LOGIN_FAILED,
      error: err
    });
  }
};

export const doLogout = () => {
  return dispatch => {
    dispatch({
      type: AUTH_LOGOUT,
      username: null,
      email: null,
      token: null,
      expiryDate: null
    });
  };
};
