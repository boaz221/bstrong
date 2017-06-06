import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Home from '../Home/Home';
import Login from '../Login/Login';
import MyArea from '../MyArea/MyArea';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import LoginSession from '../Login/LoginSession.service';

const LoginSessionInstance = new LoginSession();

export default function AppRoutes() {
    return (
        <Router>
            <Switch className="app-routes-container">
                <Route path="/login" component={Login}/>
                <PrivateRoute path="/my-area" component={MyArea} authed={LoginSessionInstance.isUserLogged()}/>
                <PrivateRoute component={Home} authed={LoginSessionInstance.isUserLogged()}/>
            </Switch>
        </Router>
    );
}