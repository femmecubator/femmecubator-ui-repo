import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { AuthProvider } from './context/auth';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalProvider } from 'context/global';

describe('<App />', () => {
  test('should render app component', () => {
    const { getByText } = render(
      <Router>
        <AuthProvider>
          <GlobalProvider>
            <App />
          </GlobalProvider>
        </AuthProvider>
      </Router>
    );
    const linkElement = getByText(/Femmecubator/i);
    expect(linkElement).toBeInTheDocument();
  });
});
