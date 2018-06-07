import * as React from 'react';
import {
    Panel
} from 'react-bootstrap';

import {
    IProduct,
    IProductsListViewModel
} from '../../domain';

export interface OwnProps {
    
}

export interface ConnectedState {
    productsList: Array<IProduct>;
    productsListViewModel: IProductsListViewModel;
}

export interface ConnectedDispatch {
    setDataSourceRequestSelected: (dataSourceRequestId: number) => void;
}

export class ProductListComponent extends React.Component<ConnectedState & ConnectedDispatch & OwnProps, undefined>{

    constructor(props: ConnectedState & ConnectedDispatch & OwnProps) {

        super(props);
    }

    render() {

        return (
            <Panel>
                               
            </Panel>
        );
    }
}