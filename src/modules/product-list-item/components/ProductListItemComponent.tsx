import * as React from 'react';
import {
    Grid,
    Row,
    Col,
    Thumbnail,
    Button
} from 'react-bootstrap';
import { ProductCompl } from '../../domain';

interface OwnProps {
    productsList: Array<ProductCompl>;
}

export class ProductListItemComponent extends React.Component<OwnProps, undefined>{

    constructor(props: OwnProps) {

        super(props);
    }

    render() {

        return (
            <Grid>
                <Row>
                    {
                        this.props.productsList.map((product: ProductCompl, index: number) => {
                            return (
                                <Col xs={6} md={3} key={index}>
                                    <Thumbnail alt="171x180" src={product.url}>
                                        <h3>{product.title}</h3>
                                        <p>{product.description}</p>
                                        <p>
                                            <Button bsStyle="primary" onClick={this.onClick.bind(this, product)}>Detail</Button>&nbsp;
                                        </p>
                                    </Thumbnail>
                                </Col>
                            );
                        })
                    }
                </Row>
            </Grid>
        );
    }

    private onClick(product: ProductCompl) {

        if (!product) {
            return;
        }

        console.log(product);
    }
}