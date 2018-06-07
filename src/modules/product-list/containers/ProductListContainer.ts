import * as React from 'react';
import * as redux from 'redux';
import { connect } from 'react-redux';

import {
    AppState
} from '../../domain';

import {
    OwnProps,
    ConnectedState,
    ConnectedDispatch,
    ProductListComponent,
} from '../components/ProductListComponent';

import {
    Selectors
} from '../selectors';

const mapStateToProps = (appState: AppState): ConnectedState => ({
    productsList: Selectors.Products.getAllCompleteProductList(appState),
    productsListViewModel: Selectors.productsListViewModel.getProductsListViewModel(appState)
});

export const ProductsListContainer: React.ComponentClass<OwnProps> =
    connect<ConnectedState, ConnectedDispatch, OwnProps>(mapStateToProps)(ProductListComponent);