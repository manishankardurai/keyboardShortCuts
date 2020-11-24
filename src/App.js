import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import AppWrapper from './pages/appWrapper';

class App extends Component {
  render() {
    return (
      <div>
          <Route path='/' component={AppWrapper}></Route>
      </div>
    );
  }
}

export default App;