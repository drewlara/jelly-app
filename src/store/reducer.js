import { combineReducers } from 'redux';
import authReducer from '../modules/authentication';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';
import {reducer as formReducer} from 'redux-form';

const rootReducer = combineReducers({
  auth: authReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer,
  form: formReducer
});

export default rootReducer;