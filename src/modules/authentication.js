import jwtDecode from 'jwt-decode';
import { SubmissionError } from 'redux-form';
import AppConfig from '../config';
import { ErrorUtils } from '../utils';
import { LocalStorageUtils } from '../utils';

const { API_BASE_URL } = AppConfig;
const { saveAuthToken, clearAuthToken } = LocalStorageUtils;
const { normalizeResponseErrors } = ErrorUtils;

const initialState = {
  authToken: null,
  currentUser: null,
  loading: false,
  error: null
}

/* Constants */
export const SET_AUTH_TOKEN = 'SET_AUTH_TOKEN';
export const CLEAR_AUTH = 'CLEAR_AUTH';
export const AUTH_REQUEST = 'AUTH_REQUEST';
export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const AUTH_ERROR = 'AUTH_ERROR';

/* Actions */
export const setAuthToken = authToken => ({
  type: SET_AUTH_TOKEN,
  authToken
});

export const clearAuth = () => ({
  type: CLEAR_AUTH
});

export const authRequest = () => ({
  type: AUTH_REQUEST
});

export const authSuccess = currentUser => ({
  type: AUTH_SUCCESS,
  currentUser
});

export const authError = error => ({
  type: AUTH_ERROR,
  error
});

export const login = (username, password) => dispatch => {
  dispatch(authRequest());
  return (
      fetch(`${API_BASE_URL}/auth/login`, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
              username,
              password
          })
      })
          .then(res => normalizeResponseErrors(res))
          .then(res => res.json())
          .then(({authToken}) => {
            const decodedToken = jwtDecode(authToken);
            dispatch(setAuthToken(authToken));
            dispatch(authSuccess(decodedToken.user));
            saveAuthToken(authToken);
          })
          .catch(err => {
              const {code} = err;
              const message =
                  code === 401
                      ? 'Incorrect username or password'
                      : 'Unable to login, please try again';
              dispatch(authError(err));
              return Promise.reject(
                  new SubmissionError({
                      _error: message
                  })
              );
          })
  );
};

export const refreshAuthToken = () => (dispatch, getState) => {
  dispatch(authRequest());
  const authToken = getState().auth.authToken;
  return fetch(`${API_BASE_URL}/auth/refresh`, {
      method: 'POST',
      headers: {
          Authorization: `Bearer ${authToken}`
      }
  })
      .then(res => normalizeResponseErrors(res))
      .then(res => res.json())
      .then(({authToken}) => {
        const decodedToken = jwtDecode(authToken);
        dispatch(setAuthToken(authToken));
        dispatch(authSuccess(decodedToken.user));
        saveAuthToken(authToken);
      })
      .catch(err => {
          dispatch(authError(err));
          dispatch(clearAuth());
          clearAuthToken(authToken);
      });
};

export const actions = {
  setAuthToken,
  clearAuth,
  authSuccess,
  authError,
  login,
  refreshAuthToken
}

/* Action Handlers */
const ACTION_HANDLERS = {
  [SET_AUTH_TOKEN]: (state, action) =>
    Object.assign({}, state, {
      authToken: action.authToken
    }),
  [CLEAR_AUTH]: (state) => 
    Object.assign({}, state, {
      authToken: null,
      currentUser: null
    }),
  [AUTH_REQUEST]: (state) =>
    Object.assign({}, state, {
      loading: true,
      error: null
    }),
  [AUTH_SUCCESS]: (state, action) =>
    Object.assign({}, state, {
      loading: false,
      currentUser: action.currentUser
    }),
  [AUTH_ERROR]: (state, action) =>
    Object.assign({}, state, {
      loading: false,
      error: action.error
    })
}


/* Reducer */
export default function authReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
}