import * as React from 'react';
import {
    Grid,
    Row,
    Col
} from 'react-bootstrap';

export class AppHome extends React.Component<undefined, undefined>{

    render() {

        return (
            <Grid>
                <Row className="show-grid">
                    <Col xs={12} md={12}>
                        <Row className="show-grid">
                            <div className="col-md-6 col-md-offset-3">
                                
                            </div>
                        </Row>
                    </Col>

                    <br/> <br/> <br/>

                    <Col xs={12} md={12}>
                        <Row className="show-grid">
                            <Col xs={6} md={6}>
                                <Row className="show-grid">
                                    <Col xs={12} md={12}>
                                        
                                    </Col>
                                    <Col xs={12} md={12}>
                                        
                                    </Col>
                                </Row>
                            </Col>
                            <Col xs={6} md={6}>
                                
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Grid>
        );
    }
}