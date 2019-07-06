import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from '../modules/authentication';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';

const rootReducer = combineReducers({
  auth: authReducer,
  form: formReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer
});

export default rootReducer;