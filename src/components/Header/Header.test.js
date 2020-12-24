import React, { useState as useStateMock } from 'react';
import { cleanup, render, screen, waitFor } from '@testing-library/react';
import { AuthProvider } from 'context/auth';
import Header from 'components/Header/Header';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalProvider } from 'context/global';
import { DEFAULT_COMMON_MENU } from 'utils/constants';
import MobileHeader from './MobileHeader';
import DesktopHeader from './DesktopHeader';

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: jest.fn(),
}));

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: () => ({
    pathname: 'fakedomain.com:3000/mentors',
  }),
}));

describe('<Header />', () => {
  beforeEach(async () => {
    const initState = {
      menuHeaders: DEFAULT_COMMON_MENU.headers,
      userName: '',
      title: '',
      anchorEl: false,
      drawerOpen: false,
    };
    const setState = jest
      .fn()
      .mockImplementationOnce((prevState = initState) => prevState);
    useStateMock.mockImplementation((initState) => [initState, setState]);

    render(
      <AuthProvider>
        <GlobalProvider>
          <Router>
            <Header>
              <DesktopHeader />
              <MobileHeader />
            </Header>
          </Router>
        </GlobalProvider>
      </AuthProvider>
    );
  });

  afterEach(cleanup);

  it('should display Femmecubator text logo', async () => {
    screen.getByRole('link', { name: /femmecubator/i });
  });

  it('should display the general menu if user IS NOT authenticated', async () => {
    waitFor(() => {
      screen.getByRole('button', { name: /what we do/i });
      screen.getByRole('button', { name: /resources/i });
      screen.getByRole('button', { name: /log in/i });
      screen.getByRole('button', { name: /join us/i });
    });
  });
});
