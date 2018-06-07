import * as React from 'react';
import {
    Panel
} from 'react-bootstrap';

import {
    ProductCompl,
    IProductsListViewModel
} from '../../domain';
import { ProductListItemComponent } from '../../product-list-item/components/ProductListItemComponent';

export interface OwnProps {
    
}

export interface ConnectedState {
    productsList: Array<ProductCompl>;
    productsListViewModel: IProductsListViewModel;
}

export interface ConnectedDispatch {
    
}

export class ProductListComponent extends React.Component<ConnectedState & ConnectedDispatch & OwnProps, undefined>{

    constructor(props: ConnectedState & ConnectedDispatch & OwnProps) {

        super(props);
    }

    render() {

        return (
            <ProductListItemComponent productsList={this.props.productsList} />
        );
    }
}