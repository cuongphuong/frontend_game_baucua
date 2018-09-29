import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import Login from '../Login/Login';
import Logout from '../Login/Logout';
import Register from '../Login/Register';
import Game from '../Game/Game';
class AppRoute extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/game" component={Game} />
                    <Route exact path="/logout" component={Logout} />
                    <Route exact path="/" component={Login} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/register" component={Register} />
                </Switch>
            </div>
        );
    }
}

export default AppRoute;
