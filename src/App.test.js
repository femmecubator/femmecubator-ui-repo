import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { AuthProvider } from './context/auth';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalProvider } from 'context/global';

describe('<App />', () => {
  test('should render app component', () => {
    const result = render(
      <Router>
        <AuthProvider>
          <GlobalProvider>
            <App />
          </GlobalProvider>
        </AuthProvider>
      </Router>
    );

    expect(result.container.querySelector('#root')).toBeTruthy;
  });
});
