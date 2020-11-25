import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import AppWrapper from './appWrapper';
import ReactNotification from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';

class App extends Component {
  render() {
    return (
      <div>
        <ReactNotification />
        <Route path="/" component={AppWrapper} />
      </div>
    );
  }
}

export default App;
