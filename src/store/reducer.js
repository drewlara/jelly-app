import { combineReducers } from 'redux';
import authReducer from '../modules/authentication';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';

const rootReducer = combineReducers({
  auth: authReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer
});

export default rootReducer;