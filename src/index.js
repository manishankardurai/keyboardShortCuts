import React from 'react';
import ReactDOM from 'react-dom';
import './example/index.css';
import App from './example/App';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);
