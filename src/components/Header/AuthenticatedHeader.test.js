import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import Header from 'components/Header/Header';
import { BrowserRouter as Router } from 'react-router-dom';
import AuthMock from '../../utils/auth';

jest.mock('../../utils/auth');
describe('<Header /> for authenticated users', () => {
  it('should display the logged in menu if user IS authenticated', async () => {
    AuthMock.isLoggedIn.mockImplementationOnce(() => true);
    render(
      <Router>
        <Header />
      </Router>
    );
    await waitFor(() => screen.getByText(/jane.doe/i));
    screen.getByText(/jane.doe/i);
  });
});
