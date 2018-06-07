import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from "react-router-dom";

import { store } from './store';

import { NavBarComponent } from './modules/nav-bar/components/NavBarComponent';
import { HomeComponent } from './modules/home/components/HomeComponent';
import { ContactComponent } from './modules/contact/components/ContactComponent';
import { CartComponent } from './modules/cart/components/CartComponent';

const rootApp = document.getElementById('root-app');

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <div>
                <NavBarComponent />

                <Route exact path="/" component={HomeComponent} />
                <Route path="/contact" component={ContactComponent} />
                <Route path="/cart" component={CartComponent} />
            </div>
        </Router>
    </Provider>,
    rootApp
);