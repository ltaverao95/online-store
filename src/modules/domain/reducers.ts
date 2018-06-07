import { Reducer, combineReducers } from 'redux';

import {

    EntityMap,
    EntityNormalizedObj
    
} from '../utils';
import { 
    InterfaceConfiguration, 
    CommonConfiguration 
} from './';

export namespace Reducers {

    const commonConfiguration: Reducer<CommonConfiguration> = combineReducers<CommonConfiguration>({
        
    });

    export const interfaceConfiguration: Reducer<InterfaceConfiguration> = combineReducers<InterfaceConfiguration>({
        commonConfiguration
    });
}