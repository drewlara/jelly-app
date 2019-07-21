import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducer';
import thunk from 'redux-thunk';
import { reduxFirestore, getFirestore } from 'redux-firestore';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import firebase from '../firebase';

const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
        reduxFirestore(firebase),
        reactReduxFirebase(firebase, { userProfile: 'users', useFirestoreForProfile: true, attachAuthIsReady: true }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )   
);

export default store;