import { Reducer, combineReducers } from 'redux';

import {

    EntityMap,
    EntityNormalizedObj
    
} from '../utils';

import { ActionTypes } from './actionTypes';

import {
    InterfaceConfiguration, 
    DomainConfiguration,
    ProductConfiguration,
    Product,
    ProductDetail,
    ProductComplete,
    Currency,
    Services
} from './';

export namespace Reducers {

    namespace ProductsMap {

        const byId = (state: EntityMap<Product> = new EntityMap<Product>(), action: ActionTypes.Action): EntityMap<Product> => {

            switch(action.type)
            {
                case ActionTypes.ADD_PRODUCT:
                    let entityStorageService = new Services.EntityMapStorageService();
                    return entityStorageService.storeById<Product>(state, action.product);
            }

            return state;
        }

        const allIds = (state: Array<string> = new Array<string>(), action: ActionTypes.Action): Array<string> => {

            switch(action.type)
            {
                case ActionTypes.ADD_PRODUCT:
                    let entityStorageService = new Services.EntityMapStorageService();
                    return entityStorageService.storeByAllIds(state, action.product);
            }

            return state;
        }

        export const productsMapReducer: Reducer<EntityNormalizedObj<Product>> = combineReducers<EntityNormalizedObj<Product>>({
            byId,
            allIds
        });
    }

    namespace ProductDetailMap {

        const byId = (state: EntityMap<ProductDetail> = new EntityMap<ProductDetail>(), action: ActionTypes.Action): EntityMap<ProductDetail> => {

            switch(action.type)
            {
                case ActionTypes.ADD_PRODUCT_DETAIL:
                    let entityStorageService = new Services.EntityMapStorageService();
                    return entityStorageService.storeById<ProductDetail>(state, action.productDetail);
            }

            return state;
        }

        const allIds = (state: Array<string> = new Array<string>(), action: ActionTypes.Action): Array<string> => {

            switch(action.type)
            {
                case ActionTypes.ADD_PRODUCT_DETAIL:
                    let entityStorageService = new Services.EntityMapStorageService();
                    return entityStorageService.storeByAllIds(state, action.productDetail);
            }

            return state;
        }

        export const productDetailMapReducer: Reducer<EntityNormalizedObj<ProductDetail>> = combineReducers<EntityNormalizedObj<ProductDetail>>({
            byId,
            allIds
        });
    }

    namespace ProductsCompleteMap {

        const byId = (state: EntityMap<ProductComplete> = new EntityMap<ProductComplete>(), action: ActionTypes.Action): EntityMap<ProductComplete> => {

            switch(action.type)
            {
                case ActionTypes.ADD_PRODUCT_COMPLETED:
                    let entityStorageService = new Services.EntityMapStorageService();
                    return entityStorageService.storeById<ProductComplete>(state, action.productComplete);
            }

            return state;
        }

        const allIds = (state: Array<string> = new Array<string>(), action: ActionTypes.Action): Array<string> => {

            switch(action.type)
            {
                case ActionTypes.ADD_PRODUCT_COMPLETED:
                    let entityStorageService = new Services.EntityMapStorageService();
                    return entityStorageService.storeByAllIds(state, action.productComplete);
            }

            return state;
        }

        export const productCompleteMapReducer: Reducer<EntityNormalizedObj<ProductComplete>> = combineReducers<EntityNormalizedObj<ProductComplete>>({
            byId,
            allIds
        });
    }

    namespace CurrencyMap {

        const byId = (state: EntityMap<Currency> = new EntityMap<Currency>(), action: ActionTypes.Action): EntityMap<Currency> => {

            switch(action.type)
            {
                case ActionTypes.ADD_CURRENCY:
                    let entityStorageService = new Services.EntityMapStorageService();
                    return entityStorageService.storeById<Currency>(state, action.currency);
            }

            return state;
        }

        const allIds = (state: Array<string> = new Array<string>(), action: ActionTypes.Action): Array<string> => {

            switch(action.type)
            {
                case ActionTypes.ADD_CURRENCY:
                    let entityStorageService = new Services.EntityMapStorageService();
                    return entityStorageService.storeByAllIds(state, action.currency);
            }

            return state;
        }

        export const currencyMapReducer: Reducer<EntityNormalizedObj<Currency>> = combineReducers<EntityNormalizedObj<Currency>>({
            byId,
            allIds
        });
    }

    const productConfiguration: Reducer<ProductConfiguration> = combineReducers<ProductConfiguration>({
        productsMap: ProductsMap.productsMapReducer,
        productDetailMap: ProductDetailMap.productDetailMapReducer,
        productsComplete: ProductsCompleteMap.productCompleteMapReducer,
        currencyMap: CurrencyMap.currencyMapReducer
    });

    const domainConfiguration: Reducer<DomainConfiguration> = combineReducers<DomainConfiguration>({
        productConfiguration
    });

    export const interfaceConfiguration: Reducer<InterfaceConfiguration> = combineReducers<InterfaceConfiguration>({
        domainConfiguration
    });
}