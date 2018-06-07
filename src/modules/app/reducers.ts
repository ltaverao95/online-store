import { Reducer, combineReducers } from 'redux';

import {

    //State
    UI

} from '../domain';

export namespace Reducers {

    export const ui: Reducer<UI> = combineReducers<UI>({
        productsModule: null
    });
}