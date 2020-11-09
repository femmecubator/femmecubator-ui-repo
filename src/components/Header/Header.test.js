import React, { useContext as useContextMock } from 'react';
import { cleanup, render, screen, waitFor } from '@testing-library/react';
import { AuthProvider } from 'context/auth';
import Header from 'components/Header/Header';
import { mockServer } from 'mock/mockServer';
import { act } from 'react-dom/test-utils';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalProvider } from 'context/global';
import App from '../../App';

if (process.env.REACT_APP_TESTING) {
  mockServer();
}

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
    act(() => {
      render(
        <AuthProvider>
          <GlobalProvider>
            <Router>
              <App>
                <Header />
              </App>
            </Router>
          </GlobalProvider>
        </AuthProvider>
      );
    });
  });

  afterEach(cleanup);

  it('should display Femmecubator text logo', () => {
    screen.getByText(/femmecubator/i);
  });

  it('should display the protected menu items if user is authenticated', async () => {
    await waitFor(() => screen.getByText(/mentors/i));
    screen.getByText(/mentors/i);

    await waitFor(() => screen.getByText(/listings/i));
    screen.getByText(/listings/i);
  });

  it('should display burger menu icon if window is smaller than 799px and should hide burger menu icon if larger', () => {
    resizeToDesktop();
    expect(screen.queryByTestId('drawer-button')).not.toBeInTheDocument();

    resizeToMobile();
    expect(screen.queryByTestId('drawer-button')).toBeInTheDocument();
  });
});
