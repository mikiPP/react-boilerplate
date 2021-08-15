import React from 'react';
import { Route, Switch } from 'react-router';
import Navbar from '../components/Navbar';
import { HOME_URL } from '../utils/urls';
import '../styles/base/_base.scss';
import HomePage from './Home';

const Main = () => (
  <main className="app">
    <Navbar />
    {/* TODO: AÑADIR RUTAS */}
    <Switch>
      <Route exact path={HOME_URL} component={HomePage} />
    </Switch>
  </main>
);

export default Main;
