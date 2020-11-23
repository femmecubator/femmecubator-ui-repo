import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { AuthProvider } from './context/auth';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalProvider } from 'context/global';

ReactDOM.render(
  <AuthProvider>
    <GlobalProvider>
      <Router>
        <App />
      </Router>
    </GlobalProvider>
  </AuthProvider>,
  document.getElementById('root')
);
