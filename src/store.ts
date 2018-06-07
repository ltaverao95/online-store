import * as redux from 'redux';
import { createStore } from 'redux';
import thunk, { ThunkAction } from 'redux-thunk';

const { default: immutableStateInvariant } = require('redux-immutable-state-invariant');

import { combinedReducers } from './rootReducer';
import { appState } from './initialState';
import { UtilsConstants } from './modules/utils';
import { AppState } from './modules/domain';

declare const __DEV__: string; // from webpack
let ISDEV: boolean = false;
if (__DEV__ == UtilsConstants.DEVELOPMENT) {
    console.log("dev stage");
} else {
    console.log("prod stage");
}

const middlewares = __DEV__ ?
    [immutableStateInvariant(), thunk] :
    [thunk];

declare let window: any;

export const getStore = (appStateParam: AppState) => {

    if (__DEV__ == UtilsConstants.DEVELOPMENT) {
        return createStore(
            combinedReducers,
            appStateParam,
            redux.compose(redux.applyMiddleware(...middlewares), window.devToolsExtension ? window.devToolsExtension() : (f: any) => f)
        );
    }

    return createStore(
        combinedReducers,
        appStateParam,
        redux.compose(redux.applyMiddleware(...middlewares))
    );
}

const store = getStore(appState);

export {
    store
}