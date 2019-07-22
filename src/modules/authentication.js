import { toast } from 'react-toastify';
import codeToMsg from 'normalizers/error';

const initialState = {
  error: null,
  isLoading: false
};

/* Constants */
export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const AUTH_ERROR = 'AUTH_ERROR';
export const CLEAR_AUTH = 'CLEAR_AUTH';
export const AUTH_REQUEST = 'AUTH_REQUEST';

/* Actions */
export const authRequest = () => ({
  type: AUTH_REQUEST
});

export const clearAuth = () => ({
  type: CLEAR_AUTH
});

export const authSuccess = () => ({
  type: AUTH_SUCCESS
});

export const authError = error => ({
  type: AUTH_ERROR,
  error
});

export const signIn = (credentials) => (dispatch, getState, { getFirebase }) => {
  dispatch({ type: 'AUTH_REQUEST' })
  const firebase = getFirebase();
  firebase.auth().signInWithEmailAndPassword(
    credentials.email,
    credentials.password
  ).then(() => {
    dispatch({
      type: 'AUTH_SUCCESS'
    });
  }).catch((error) => {
    dispatch({
      type: 'AUTH_ERROR',
      error
    });
    toast.error(codeToMsg(error));
  });
};

export const signOut = () => (dispatch, getState, { getFirebase }) => {
  const firebase = getFirebase();
  firebase.auth().signOut().then(() => {
    dispatch({
      type: 'CLEAR_AUTH'
    })
    toast.success('Logged out succesfully.');
  });
};

export const signUp = (newUser) => (dispatch, gesState, { getFirebase, getFirestore }) => {
  dispatch({ type: 'AUTH_REQUEST' });
  const firebase = getFirebase();
  const firestore = getFirestore();

  firebase.auth().createUserWithEmailAndPassword(
    newUser.email,
    newUser.password
  ).then((resp) => {
    return firestore.collection('users').doc(resp.user.uid).set({
      firstName: newUser.firstName,
      lastName: newUser.lastName
    })
  }).then(() => {
    dispatch({ type: 'AUTH_SUCCESS' });
    toast.success('Account created.');
  }).catch((error) => {
    dispatch({ type: 'AUTH_ERROR', error });
    toast.error(codeToMsg(error));
  })
}

export const actions = {
  clearAuth,
  authSuccess,
  authError,
  signIn,
  signOut,
  signUp
};

/* Action Handlers */
const ACTION_HANDLERS = {
  [CLEAR_AUTH]: (state) =>
    Object.assign({}, state, initialState),

  [AUTH_REQUEST]: (state) =>
    Object.assign({}, state, {
      isLoading: true,
      error: null
    }),

  [AUTH_SUCCESS]: (state) =>
    Object.assign({}, state, {
      isLoading: false,
      error: null
    }),

  [AUTH_ERROR]: (state, action) =>
    Object.assign({}, state, {
      isLoading: false,
      error: action.error
    })
}

/* Reducer */
export default function authReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
};