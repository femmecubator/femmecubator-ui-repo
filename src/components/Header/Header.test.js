import React from 'react';
import { cleanup, render, screen, waitFor, act } from '@testing-library/react';
import { AuthProvider } from 'context/auth';
import Header from 'components/Header/Header';
import { mockServer } from 'mock/mockServer';
// import { act } from 'react-dom/test-utils';
import { BrowserRouter as Router } from 'react-router-dom';

import axios from 'axios';
import { commonMenuData } from 'mock/data';

jest.mock('axios');
/*
if (process.env.REACT_APP_MOCK_API_TRUE) {
  mockServer();
}*/

// Fn's to resize screen
const resizeToMobile = () => {
  global.innerWidth = 600;
  global.dispatchEvent(new Event('resize'));
};

const resizeToDesktop = () => {
  global.innerWidth = 900;
  global.dispatchEvent(new Event('resize'));
};

describe('<Header />', () => {
  beforeEach(() => {
    axios.get.mockImplementationOnce(() => Promise.resolve(commonMenuData));

    act(() => {
      render(
        <AuthProvider>
          <Router>
            <Header />
          </Router>
        </AuthProvider>
      );
    });
  });

  afterEach(cleanup);

  it('should display Femmecubator text logo', () => {
    screen.getByText(/femmecubator/i);
  });

  it('should display the protected menu items if user is authenticated', async () => {
    await act(() => waitFor(() => screen.getByText(/mentors/i)));
    screen.getByText(/mentors/i);

    await act(() => waitFor(() => screen.getByText(/listings/i)));
    screen.getByText(/listings/i);
  });

  it('should display burger menu icon if window is smaller than 799px and should hide burger menu icon if larger', () => {
    resizeToDesktop();
    expect(screen.queryByTestId('drawer-button')).not.toBeInTheDocument();

    resizeToMobile();
    expect(screen.queryByTestId('drawer-button')).toBeInTheDocument();
  });
});
