import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { store } from './store';

import { AppHome } from './modules/app-home/components/AppHome'

const rootApp = document.getElementById('root-app');

ReactDOM.render(
    <Provider store={store}>
        <AppHome />
    </Provider>,
    rootApp
);