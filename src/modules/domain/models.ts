import { EntityNormalizedObj } from '../utils';
import { ActionResultDTO } from '../utils/DTO';

interface IdEntityBase {
    id: string;
}

interface ProductCompl {
    id: string;
    title: string;
    description: string;
    url: string;
    price: number;
    currency: string;
}

interface IProductsListViewModel {
    actionResult: ActionResultDTO;
}

interface IProductsModule {
    productsList: Array<ProductCompl>;
    productsListViewModel: IProductsListViewModel;
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
    currencyId: string;
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
    Currency,
    IProductsModule,
    IProductsListViewModel,
    ProductCompl
}