import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalProvider } from 'context/global';

if (process.env.NODE_ENV !== 'production') {
  const axe = require('@axe-core/react');
  axe(React, ReactDOM, 1000);
}

ReactDOM.render(
  <GlobalProvider>
    <Router>
      <App />
    </Router>
  </GlobalProvider>,
  document.getElementById('root')
);
