import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { AuthProvider } from 'context/auth';
import Header from 'components/Header/Header';
import { mockServer } from 'mock/mockServer';
if (process.env.REACT_APP_MOCK_API_TRUE) {
  mockServer();
}
describe('<Header />', () => {
  beforeEach(() => {
    render(
      <AuthProvider>
        <Header />
      </AuthProvider>
    );
  });
  it('should display the protected menu items if user is authenticated', async () => {
    await waitFor(() => screen.getByText(/mentors/i));
    screen.getByText(/mentors/i);

    await waitFor(() => screen.getByText(/listings/i));
    screen.getByText(/listings/i);
  });
});
