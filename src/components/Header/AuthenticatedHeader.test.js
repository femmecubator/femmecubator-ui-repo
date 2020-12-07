import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { AuthProvider } from 'context/auth';
import Header from 'components/Header/Header';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalProvider } from 'context/global';

jest.mock('../../context/auth');
describe('<Header /> for authenticated users', () => {
  it('should display the logged in menu if user IS authenticated', async () => {
    render(
      <AuthProvider>
        <GlobalProvider>
          <Router>
            <Header />
          </Router>
        </GlobalProvider>
      </AuthProvider>
    );
    await waitFor(() => screen.getByText(/jane.doe/i));
    screen.getByText(/jane.doe/i);
  });
});
