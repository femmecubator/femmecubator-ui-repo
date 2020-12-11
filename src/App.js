import React, { useEffect, useContext } from 'react';
import './App.css';
import { mockServer } from './mock/mockServer';
import Header from './components/Header/Header';
import AppRouter from 'routes/AppRouter';
import { ErrorBoundary } from 'components/ErrorHandling/ErrorBoundary';
import { GlobalContext } from 'context/global';
import { updateView } from 'context/actionCreators';
// import { pageview } from 'react-ga';
import { withRouter } from 'react-router';
import { useLocation } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { initialize, pageview } from 'react-ga';
import Footer from 'components/Footer/Footer';

if (process.env.NODE_ENV === 'production') {
  initialize(process.env.REACT_APP_TRACKING_ID);
  const history = createBrowserHistory();
  history.listen((location) => {
    pageview(location.pathname + location.search);
  });
}
if (process.env.REACT_APP_MOCK_API_TRUE) {
  mockServer();
}

const setResponsiveness = () => {
  return window.innerWidth < 799;
};

function App() {
  const { dispatch } = useContext(GlobalContext);
  const location = useLocation();

  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      pageview(location.pathname + location.search);
    }
    if (setResponsiveness()) dispatch(updateView(setResponsiveness()));
    window.addEventListener('resize', () =>
      dispatch(updateView(setResponsiveness()))
    );
    return () =>
      window.removeEventListener(
        'resize',
        dispatch(updateView(setResponsiveness()))
      );
  }, [dispatch, location.pathname, location.search]);

  return (
    <div className="App">
      <Header />
      <ErrorBoundary>
        <AppRouter />
      </ErrorBoundary>
      <Footer />
    </div>
  );
}

export default withRouter(React.memo(App));
