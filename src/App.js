import React, { useEffect } from 'react';
import { initialize, pageview } from 'react-ga';
import './App.css';
import { mockServer } from './mock/mockServer';
import { TRACKING_ID } from './utils/constants';
import Header from './components/Header/Header';
import AppRouter from 'routes/AppRouter';

if (process.env.REACT_APP_MOCK_API_TRUE) {
  console.log('starting mock server...');
  mockServer();
}

function App() {
  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      initialize(TRACKING_ID);
      // track page views and language location
      pageview(window.location.pathname + window.location.search);
    }
  }, []);

  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
