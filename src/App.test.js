import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { AuthProvider } from './context/auth';

describe('<App />', () => {
  test('should render app component', () => {
    const { getByText } = render(
      <AuthProvider>
        <App />
      </AuthProvider>
    );
    const linkElement = getByText(/Femmecubator/i);
    expect(linkElement).toBeInTheDocument();
  });
});
