import React from 'react';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import Home from 'components/Home/Home';
import { act } from 'react-dom/test-utils';
import secondImage from './assets/secondimage.jpg';
import { BrowserRouter as Router } from 'react-router-dom';

describe('<Home />', () => {
  beforeEach(() => {
    act(() => {
      render(
        <Router>
          <Home />
        </Router>
      );
    });
  });

  afterEach(cleanup);

  it('should display first header', () => {
    screen.getByText(/Hey Girl, Get Connected!/i);
  });

  it('should display background image', () => {
    expect(screen.getByTestId('background')).toHaveStyle(
      `background-image: url(${secondImage})`
    );
  });

  it('should display the top Image', () => {
    screen.getByRole('img', {
      name: /Three women of color with laptops working together in an open office./i,
    });
  });

  it('should fire a click event for all buttons', () => {
    const buttons = screen.getAllByRole('button');
    buttons.forEach((bttn) => {
      fireEvent.click(bttn);
    });
  });
});
