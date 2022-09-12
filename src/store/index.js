import React from 'react';
import {createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducers from '../store/reducers'
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducers,
    composeEnhancer(applyMiddleware(thunk))
);          

export default store;