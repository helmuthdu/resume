import { initialState } from './state';
import { AUTH_LOGIN_FAILED, AUTH_LOGIN_SUCCESS, AUTH_LOGOUT } from './types';

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_LOGIN_FAILED:
      return {
        ...state,
        isLogged: false
      };

    case AUTH_LOGIN_SUCCESS:
      return {
        ...state,
        username: action.username,
        email: action.email,
        token: action.token,
        expiryDate: action.expiryDate,
        isLogged: true
      };

    case AUTH_LOGOUT:
      return {
        ...state,
        username: null,
        email: null,
        token: null,
        expiryDate: null,
        isLogged: false
      };

    default:
      return state;
  }
};