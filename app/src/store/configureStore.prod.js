import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import thunk from 'redux-thunk';

export default function configureStore(initialState) {
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(thunk)
        //checout react slingshot for example .
        // add here support to hot reload 
        // add suport to redux firefox plugin

    );
}