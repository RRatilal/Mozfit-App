import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';


const AppRoutes: React.FC = () => (
    <Switch>
        <Route exact path="/" component={Dashboard} />
    </Switch>
)

export default AppRoutes;