import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Workout from '../pages/Workout';
import Exercise from '../pages/Exercise';
import { Details, Create } from '../pages/Details';


export const AppRoutes: React.FC = () => (
    <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="*" children={() => <h1>Page not Found</h1>} />
    </Switch>
);

export const AdminRoutes = [
    {
        path: "/workout",
        main: () => <Workout />
    },
    {
        path: "/exercise",
        main: () => <Exercise />
    },
    {
        path: "/create",
        main: () => <Create />
    },
    {
        path: "/details",
        main: () => <Details />
    }
];