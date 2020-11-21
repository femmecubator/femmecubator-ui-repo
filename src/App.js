import React, { useEffect, useContext } from 'react';
import { initialize, pageview } from 'react-ga';
import './App.css';
import { mockServer } from './mock/mockServer';
import { TRACKING_ID } from './utils/constants';
import Header from './components/Header/Header';
import AppRouter from 'routes/AppRouter';
import Home from 'components/Home/Home';
import { ErrorBoundary } from 'components/ErrorHandling/ErrorBoundary';
import { GlobalContext } from 'context/global';
import { updateView } from 'context/actionCreators';

if (process.env.REACT_APP_MOCK_API_TRUE) {
  mockServer();
}

const setResponsiveness = () => {
  return window.innerWidth < 799;
};

function App() {
  const { dispatch } = useContext(GlobalContext);

  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      initialize(TRACKING_ID);
      pageview(window.location.pathname + window.location.search);
    }
    if(setResponsiveness())
      dispatch(updateView(setResponsiveness()));
    window.addEventListener('resize', () =>
      dispatch(updateView(setResponsiveness()))
    );
    return () =>
      window.removeEventListener(
        'resize',
        dispatch(updateView(setResponsiveness()))
      );
  }, [dispatch]);

  return (
    <div className="App">
      <Header />
      <ErrorBoundary>
        <AppRouter />
      </ErrorBoundary>
    </div>
  );
}

export default React.memo(App);
