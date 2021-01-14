import React, { Component } from 'react'

import { Route, Switch, Redirect } from 'react-router-dom'
import Home from '../pages/Admin/Home'
import Login from '../pages/Login/Login'


export default class index extends Component {
    render() {
        return (
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/page/home" component={Home} />
                <Redirect to="/login" />
            </Switch>
        )
    }
}
