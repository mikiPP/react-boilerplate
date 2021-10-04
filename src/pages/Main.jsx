import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import Navbar from '../components/Navbar';
import { HOME_URL, LOGIN_URL } from '../utils/urls';
import '../styles/base/_base.scss';
import HomePage from './Home';
import LoginPage from './Login';

const Main = () => (
  <main className="app">
    <Navbar />
    <Switch>
      <Route exact path={HOME_URL} component={HomePage} />
      <Route exact path={LOGIN_URL} component={LoginPage} />
      <Redirect to={HOME_URL} />
    </Switch>
  </main>
);

export default Main;
