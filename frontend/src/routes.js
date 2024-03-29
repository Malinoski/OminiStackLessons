import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import New from './pages/New';

export default function Routes(){
    return (
        <BrowserRouter>

            {/* Only one route will be displayed */}
            <Switch>
                <Route path="/" exact component={Login} /> { /* exact: This prevent all the other urls with has '/' be called */}
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/new" component={New} />
            </Switch>
        </BrowserRouter>
    )
}