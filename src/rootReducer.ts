import { combineReducers, Reducer } from 'redux';

import { AppState } from './modules/domain';

import * as Domain from './modules/domain';
import * as App from './modules/app';

export const combinedReducers: Reducer<AppState> = combineReducers<AppState>({
    interfaceConfiguration: Domain.Reducers.interfaceConfiguration,
    ui: App.Reducers.ui
});