import * as React from 'react';
import {
    Nav,
    Navbar,
    NavItem
} from 'react-bootstrap';

export class NavBarComponent extends React.Component<undefined, undefined>{

    render() {

        return (
            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="/">Online Store</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <NavItem eventKey={1} href="/">
                            Home
                        </NavItem>
                        <NavItem eventKey={2} href="/contact">
                            Contact us
                        </NavItem>
                    </Nav>
                    <Nav pullRight>
                        <NavItem eventKey={2} href="/cart">
                            Cart
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}