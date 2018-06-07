import { createSelector } from 'reselect';

import {
    EntityNormalizedObj,
    Services as UtilsServices
} from '../utils';
import {
    AppState,
    ProductComplete,
    Product,
    ProductDetail,
    IProductsListViewModel,
    ProductCompl,
    Currency
} from '../domain';

export namespace Selectors {

    export namespace Products {

        export const getProductsMap = (appState: AppState): EntityNormalizedObj<Product> => {

            if (!appState.interfaceConfiguration.domainConfiguration.productConfiguration.productsMap) {
                return new EntityNormalizedObj<Product>();
            }

            return appState.interfaceConfiguration.domainConfiguration.productConfiguration.productsMap;
        };

        export const getProductDetailMap = (appState: AppState): EntityNormalizedObj<ProductDetail> => {

            if (!appState.interfaceConfiguration.domainConfiguration.productConfiguration.productDetailMap) {
                return new EntityNormalizedObj<ProductDetail>();
            }

            return appState.interfaceConfiguration.domainConfiguration.productConfiguration.productDetailMap;
        };

        export const getProductCompleteMap = (appState: AppState): EntityNormalizedObj<ProductComplete> => {

            if (!appState.interfaceConfiguration.domainConfiguration.productConfiguration.productsComplete) {
                return new EntityNormalizedObj<ProductComplete>();
            }

            return appState.interfaceConfiguration.domainConfiguration.productConfiguration.productsComplete;
        };

        export const getCurrencyMap = (appState: AppState): EntityNormalizedObj<Currency> => {

            if (!appState.interfaceConfiguration.domainConfiguration.productConfiguration.currencyMap) {
                return new EntityNormalizedObj<Currency>();
            }

            return appState.interfaceConfiguration.domainConfiguration.productConfiguration.currencyMap;
        };

        export const getProductsList = createSelector(
            [getProductsMap],
            (getProductsMap: EntityNormalizedObj<Product>): Array<Product> => {
                return UtilsServices.getArrayFromMap<Product>(getProductsMap);
            }
        );

        export const getProductDetailList = createSelector(
            [getProductDetailMap],
            (getProductDetailMap: EntityNormalizedObj<ProductDetail>): Array<ProductDetail> => {
                return UtilsServices.getArrayFromMap<ProductDetail>(getProductDetailMap);
            }
        );

        export const getProductCompleteList = createSelector(
            [getProductCompleteMap],
            (getProductCompleteMap: EntityNormalizedObj<ProductComplete>): Array<ProductComplete> => {
                return UtilsServices.getArrayFromMap<ProductComplete>(getProductCompleteMap);
            }
        );

        export const getCurrencyList = createSelector(
            [getCurrencyMap],
            (getCurrencyMap: EntityNormalizedObj<Currency>): Array<Currency> => {
                return UtilsServices.getArrayFromMap<Currency>(getCurrencyMap);
            }
        );

        export const getAllCompleteProductList = createSelector(
            [
                getProductsList,
                getProductDetailList,
                getProductCompleteList,
                getCurrencyList
            ],
            (productsList: Array<Product>,
                productDetailList: Array<ProductDetail>,
                productCompleteList: Array<ProductComplete>,
                currencyList: Array<Currency>): Array<ProductCompl> => {

                let completeProductList = new Array<ProductCompl>();

                if(!productsList){
                    return completeProductList;
                }

                if(!productDetailList){
                    return completeProductList;
                }

                if(!productCompleteList){
                    return completeProductList;
                }

                for (let i = 0; i < productCompleteList.length; i++) {
                    
                    let currentProductId = productCompleteList[i].id;
                    let currentProduct: Product = productsList.find((product: Product) => product.id == currentProductId);
                    let currentProductDetail: ProductDetail = productDetailList.find((productDetail: ProductDetail) => productDetail.id == currentProductId);
                    let currentCurrency: Currency = currencyList.find((currency: Currency) => currency.id == currentProductDetail.currencyId);

                    completeProductList.push(
                        {
                            id: currentProduct.id,
                            title: currentProduct.title,
                            description: currentProductDetail.description,
                            url: currentProductDetail.url,
                            price: currentProductDetail.price,
                            currency: currentCurrency.currency
                        }
                    );
                }

                return completeProductList;
            }
        );
    }

    export namespace productsListViewModel {

        export const getProductsListViewModel = (appState: AppState): IProductsListViewModel => appState.ui.productsModule.productsListViewModel;
    }
}