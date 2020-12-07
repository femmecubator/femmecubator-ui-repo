import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { AuthProvider } from './context/auth';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalProvider } from 'context/global';
import ReactGA from 'react-ga';
import { TRACKING_ID } from 'utils/constants';

if (process.env.NODE_ENV === 'production') {
  ReactGA.initialize(TRACKING_ID);
}

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
