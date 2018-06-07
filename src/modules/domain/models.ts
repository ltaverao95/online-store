import { EntityNormalizedObj } from '../utils';

interface IdEntityBase {
    id: string;
}

class Product{
    id: string;
    title: string;
    productDetailId: string;
}

class ProductDetail{
    id: string;
    description: string;
    url: string;
    price: number;
    currencyId: string;
}

class Currency{
    id: string;
    title: string;
    currency: string;
}

class ProductComplete{
    id: string;
    productId: string;
    productDetailId: string;
}

class ProductConfiguration{
    productsMap: EntityNormalizedObj<Product>;
    productDetailMap: EntityNormalizedObj<ProductDetail>;
    productsComplete: EntityNormalizedObj<ProductComplete>;
    currencyMap: EntityNormalizedObj<Currency>;
}

class DomainConfiguration{
    productConfiguration: ProductConfiguration
}

class InterfaceConfiguration{
    domainConfiguration: DomainConfiguration;
}

export {
    ProductConfiguration,
    DomainConfiguration,
    InterfaceConfiguration,
    IdEntityBase,
    Product,
    ProductDetail,
    ProductComplete,
    Currency
}