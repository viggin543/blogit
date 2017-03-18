import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import reduxImutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';

export default function configureStore(initialState) {
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(thunk, reduxImutableStateInvariant())
        //checout react slingshot for example .
        // add here support to hot reload 
        // add suport to redux firefox plugin

    );
}