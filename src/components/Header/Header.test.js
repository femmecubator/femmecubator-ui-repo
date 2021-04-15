import React, { useState as useStateMock } from 'react';
import { cleanup, render, screen, waitFor } from '@testing-library/react';
import Header from 'components/Header/Header';
import { BrowserRouter as Router } from 'react-router-dom';
import { DEFAULT_COMMON_MENU } from 'utils/constants';

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
    useStateMock.mockImplementation(initState => [initState, setState]);

    render(
      <Router>
        <Header />
      </Router>
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
