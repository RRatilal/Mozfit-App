import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../pages/Home';
import Workout from '../pages/Workout';


export const AppRoutes: React.FC = () => (
    <div className="dashboard-container">
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/workout" component={Workout} />
            <Route path="*" children={() => <h1>Page not Found</h1>} />
        </Switch>
    </div>
);