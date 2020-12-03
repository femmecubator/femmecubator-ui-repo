import React from 'react';
import { cleanup, render, screen, waitFor } from '@testing-library/react';
import { AuthProvider } from 'context/auth';
import Header from 'components/Header/Header';
import { act } from 'react-dom/test-utils';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalProvider } from 'context/global';
import App from '../../App';
import { server, rest } from 'testServer';

const resizeToMobile = () => {
  global.innerWidth = 600;
  global.dispatchEvent(new Event('resize'));
};

const resizeToDesktop = () => {
  global.innerWidth = 900;
  global.dispatchEvent(new Event('resize'));
};

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: () => ({
    pathname: 'fakedomain.com:3000/mentors',
  }),
}));

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
    screen.getByRole('link', { name: /femmecubator/i });
  });

  it('should display the general menu if user IS NOT authenticated', async () => {
    screen.getByRole('button', { name: /get involved/i });

    await waitFor(() => screen.getByText(/log in/i));
    screen.getByText(/log in/i);

    await waitFor(() => screen.getAllByText(/donate/i));
    screen.getAllByText(/donate/i);
  });

  it('should display the logged in menu if user IS authenticated', async () => {
    server.use(
      rest.get('http://local.femmecubator.com:3000', (_req, res, ctx) => {
        return res(
          ctx.status(200),
          ctx.json({
            data: {
              data: {
                headers: [
                  { id: 1, label: 'Home', href: '/' },
                  { id: 2, label: 'Listings', href: '/listings' },
                  { id: 3, label: 'Mentors', href: '/mentors' },
                  { id: 4, label: 'Get Involved', href: '/get-involved' },
                  { id: 5, label: 'Notifications', href: '/notifications' },
                  { id: 7, label: 'Settings', href: '/settings' },
                  { id: 8, label: 'Log Out', href: '/logout' },
                ],
                role_id: 1,
                title: 'UX Designer',
                userName: 'Jane D.',
              },
            },
          })
        );
      })
    );

    await waitFor(() => screen.getByText(/Jane D./i));
    screen.getByText(/Jane D./i);
  });

  it('should display burger menu icon if window is smaller than 799px and should hide burger menu icon if larger', () => {
    resizeToDesktop();
    expect(screen.queryByTestId('drawer-button')).not.toBeInTheDocument();

    resizeToMobile();
    expect(screen.queryByTestId('drawer-button')).toBeInTheDocument();
  });
});
