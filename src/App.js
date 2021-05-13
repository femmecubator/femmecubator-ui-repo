import React, { useEffect } from 'react';
import './App.css';

import Header from './components/Header/Header';
import Timeout from './components/Timeout/Timeout';
import AppRouter from 'routes/AppRouter';
import { ErrorBoundary } from 'components/ErrorHandling/ErrorBoundary';
import { withRouter } from 'react-router';
import { useLocation } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { initialize, pageview } from 'react-ga';

if (process.env.NODE_ENV === 'production') {
  initialize(process.env.REACT_APP_TRACKING_ID);
  const history = createBrowserHistory();
  history.listen(location => {
    pageview(location.pathname + location.search);
  });
}
if (process.env.REACT_APP_MOCK_API_TRUE) {
  const mockServer = require('./mock/mockServer');
  mockServer();
}

function App() {
  const location = useLocation();

  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      pageview(location.pathname + location.search);
    }
  }, [location.pathname, location.search]);

  // TODO: will need to fix tabIndex on profile drop down after prod deployment
  return (
    <div className="App">
      <Timeout>
        <Header />
        <ErrorBoundary>
          <AppRouter />
        </ErrorBoundary>
      </Timeout>
    </div>
  );
}

export default withRouter(React.memo(App));
