import * as React from 'react';
import { renderRoutes } from 'react-router-config';
import { HeaderFeature } from '../view/Header';

export const App = ({ route }) => (
    <React.Fragment>
        <HeaderFeature />
        {renderRoutes(route.routes)}
    </React.Fragment>
);