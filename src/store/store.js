import { createStore, applyMiddleware, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from '../modules/authentication.js';
import thunk from 'redux-thunk';
import { LocalStorageUtils } from '../utils';
import { setAuthToken, refreshAuthToken } from '../modules/authentication';

const { loadAuthToken } = LocalStorageUtils;

const store = createStore(
    combineReducers({
        form: formReducer,
        auth: authReducer
    }),
    applyMiddleware(thunk)
    
);

const authToken = loadAuthToken();
if (authToken) {
    const token = authToken;
    store.dispatch(setAuthToken(token));
    store.dispatch(refreshAuthToken());
}

export default store;