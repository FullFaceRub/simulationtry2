import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Shelf from './components/Shelf';
import Bin from './components/Bin';


export default (
    <Switch>
        <Route exact path ='/' component = {Home}/>
        <Route path = '/shelf/:class' component = {Shelf}/>
        <Route path = '/bin/:ID' component = {Bin}/>
    </Switch>
)
