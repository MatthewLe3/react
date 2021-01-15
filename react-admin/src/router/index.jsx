import React, { Component } from 'react'

import { Route, Switch, Redirect } from 'react-router-dom'
import Login from '../pages/Login/Login'
import Content from '../pages/Content'


export default class index extends Component {
    render() {
        return (
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/page" component={Content} />
                <Redirect to="/login" />
            </Switch>
        )
    }
}
