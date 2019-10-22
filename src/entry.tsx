import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store';
import { BrowserRouter as Router } from 'react-router-dom';
import { routes } from './config/routes';
import { renderRoutes } from 'react-router-config';

const store = configureStore();
ReactDOM.render(
    <Provider store={store}>
        <Router>
            {renderRoutes(routes)}
        </Router>
    </Provider>,
    document.getElementById('root'));