import React from 'react';
import Footer from './Footer';
import { act } from 'react-dom/test-utils';
import { cleanup, render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

describe('<Footer />', () => {
  beforeEach(() => {
    act(() => {
      render(
        <Router>
          <Footer />
        </Router>
      );
    });
  });

  afterEach(cleanup);

  it('should display femmecubator logo', () => {
    expect(screen.queryByTestId('femmecubatorLogo')).toBeInTheDocument();
  });

  it('should display Femmecubator 2020', () => {
    screen.getByText(/Femmecubator © 2020/i);
  });

  it('it should display five svg icons', () => {
    expect(screen.getAllByTestId('SocialSVG').length).toBe(5);
  });
});
