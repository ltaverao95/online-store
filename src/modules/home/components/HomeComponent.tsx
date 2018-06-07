import * as React from 'react';

import { ProductsListContainer } from '../../product-list/containers/ProductListContainer';

export class HomeComponent extends React.Component<undefined, undefined>{

    render() {

        return (
            <ProductsListContainer />
        );
    }
}