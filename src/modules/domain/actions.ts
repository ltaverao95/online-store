import { 
    ActionTypes,
    Product,
    ProductDetail,
    ProductComplete,
    Currency
} from './';

export namespace Actions{

    export const storeProduct = (product: Product) => ({
        type: ActionTypes.ADD_PRODUCT,
        product
    });

    export const storeProductDetail = (productDetail: ProductDetail) => ({
        type: ActionTypes.ADD_PRODUCT_DETAIL,
        productDetail
    });

    export const storeProductComplete = (productComplete: ProductComplete) => ({
        type: ActionTypes.ADD_PRODUCT_COMPLETED,
        productComplete
    });

    export const storeCurrency = (currency: Currency) => ({
        type: ActionTypes.ADD_CURRENCY,
        currency
    });
}