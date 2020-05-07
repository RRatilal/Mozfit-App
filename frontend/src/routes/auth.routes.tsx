import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Signin from '../pages/signin';
import Signup from '../pages/Signup';
import Reset from '../pages/Reset';


const AuthRoutes: React.FC = () => (
    <Switch>
        <Route path="/" exact component={Signin} />
        <Route path="/signup" component={Signup} />
        <Route path="/reset" component={Reset} />
    </Switch>
)

export default AuthRoutes;