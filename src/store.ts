import * as redux from 'redux';
import { createStore, Action, Dispatch, Middleware, Store as ReduxStore } from 'redux';
import thunk, { ThunkAction } from 'redux-thunk';

const { default: immutableStateInvariant } = require('redux-immutable-state-invariant');

import { combinedReducers } from './rootReducer';
import { appState } from './initialState';

declare const __DEV__: string; // from webpack
let ISDEV: boolean = false;
if (__DEV__ == "dev") {
    console.log("dev stage");
    ISDEV = true;
}

const middlewares = __DEV__ ?
    [immutableStateInvariant(), thunk] :
    [thunk];

declare let window: any;

export const store = createStore(
    combinedReducers,
    appState,
    redux.compose(redux.applyMiddleware(...middlewares), window.devToolsExtension ? window.devToolsExtension() : (f: any) => f)
);