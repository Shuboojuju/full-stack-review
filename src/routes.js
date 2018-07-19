import {Route, Switch} from 'react-router-dom';
import React from 'react';
import Login from './components/Login';
import Profile from './components/Profile';
import Words from './components/Words';

export default <Switch>
        <Route exact path='/' render={() => {
            return (
                <div>
                <h1>Welcome to Word Bank</h1>
                </div>
            )
        }} />
        <Route path='/login' component={Login} />
        <Route path='/profile' component={Profile} />
        <Route path='/words' component={Words} />
    </Switch>
