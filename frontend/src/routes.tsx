import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Signin from './pages/signin';
import Signup from './pages/Signup';
import Reset from './pages/Reset';

import Dashboard from './pages/Dashboard';


export default function MainRoutes() {
    return (
        <Switch>
            <Route path="/" exact component={Signin} />
            <Route path="/signup" component={Signup} />
            <Route path="/reset" component={Reset} />

            <Route path="/dashboard" component={Dashboard} />
        </Switch>
    )
}