import React, { useEffect } from 'react';
import { initialize, pageview } from 'react-ga';
import './App.css';
import { mockServer } from './mock/mockServer';
import { TRACKING_ID } from './utils/constants';
import Header from './components/Header/Header';
import AppRouter from 'routes/AppRouter';
import { ErrorBoundary } from 'components//ErrorHandling/ErrorBoundary';
import ErrorTest from 'components/ErrorHandling/ErrorTest';

if (process.env.REACT_APP_MOCK_API_TRUE) {
  console.log('starting mock server...');
  mockServer();
}

function App() {
  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      initialize(TRACKING_ID);
      pageview(window.location.pathname + window.location.search);
    }
  }, []);

  return (
    <div className="App">
      <ErrorBoundary>
        <Header />
      </ErrorBoundary>
      <ErrorBoundary>
        <AppRouter />
      </ErrorBoundary>
      {/* <ErrorBoundary>
        <ErrorTest heroName="Batman" />
      </ErrorBoundary>
      <ErrorBoundary>
        <ErrorTest heroName="Superman" />
      </ErrorBoundary> */}
      <ErrorBoundary>
        <ErrorTest heroName="Joker" />
      </ErrorBoundary>
    </div>
  );
}

export default App;
