import React from 'react';
import { cleanup, render, screen, waitFor } from '@testing-library/react';
import { AuthProvider } from 'context/auth';
import Header from 'components/Header/Header';
import { act } from 'react-dom/test-utils';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalProvider } from 'context/global';
import App from '../../App';

const resizeToMobile = () => {
  global.innerWidth = 600;
  global.dispatchEvent(new Event('resize'));
};

const resizeToDesktop = () => {
  global.innerWidth = 900;
  global.dispatchEvent(new Event('resize'));
};

let mockIsLoggedIn = false;

jest.mock('../../context/auth', () => ({
  ...jest.requireActual('../../context/auth'),
  useAuth: () => ({
    auth: {
      isLoggedIn: () => mockIsLoggedIn,
    },
  }),
}));

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: () => ({
    pathname: 'fakedomain.com:3000/mentors',
  }),
}));

describe('<Header />', () => {
  beforeEach(async () => {
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

  afterEach(cleanup);

  it('should display Femmecubator text logo', () => {
    screen.getByRole('link', { name: /femmecubator/i });
  });

  it('should display the general menu if user IS NOT authenticated', async () => {
    screen.getByRole('button', { name: /get involved/i });

    await waitFor(() => screen.getByText(/log in/i));
    screen.getByText(/log in/i);

    expect(document.getElementById('app-header')).toHaveTextContent(/donate/i);
  });

  xit('should display the logged in menu if user IS authenticated', async () => {
    mockIsLoggedIn = true;

    await waitFor(() => screen.getByText(/Jane D./i));
    screen.getByText(/Jane D./i);
  });

  it('should display burger menu icon if window is smaller than 799px and should hide burger menu icon if larger', async () => {
    await act(async () => resizeToDesktop());
    expect(screen.queryByTestId('drawer-button')).not.toBeInTheDocument();

    await act(async () => resizeToMobile());
    expect(screen.queryByTestId('drawer-button')).toBeInTheDocument();
  });
});
