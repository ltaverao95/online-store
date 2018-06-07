import { 
    Product,
    ProductDetail,
    ProductComplete,
    Currency
} from './';

export namespace ActionTypes{

    export namespace Types{

        export type ADD_PRODUCT = "domain/ADD_PRODUCT";
        export type ADD_PRODUCT_DETAIL = "domain/ADD_PRODUCT_DETAIL";
        export type ADD_PRODUCT_COMPLETED = "domain/ADD_PRODUCT_COMPLETED";
        export type ADD_CURRENCY = "domain/ADD_CURRENCY";
    }

    export const ADD_PRODUCT: Types.ADD_PRODUCT = "domain/ADD_PRODUCT";
    export const ADD_PRODUCT_DETAIL: Types.ADD_PRODUCT_DETAIL = "domain/ADD_PRODUCT_DETAIL";
    export const ADD_PRODUCT_COMPLETED: Types.ADD_PRODUCT_COMPLETED = "domain/ADD_PRODUCT_COMPLETED";
    export const ADD_CURRENCY: Types.ADD_CURRENCY = "domain/ADD_CURRENCY";

    export type Action = 
        {type: Types.ADD_PRODUCT, product: Product} |
        {type: Types.ADD_PRODUCT_DETAIL, productDetail: ProductDetail} |
        {type: Types.ADD_PRODUCT_COMPLETED, productComplete: ProductComplete} |
        {type: Types.ADD_CURRENCY, currency: Currency}
}