import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import AboutContainer from './AboutContainer';
import { BrowserRouter as Router } from 'react-router-dom';

describe('<AboutContainer />', () => {
  beforeEach(() => {
    render(
      <Router>
        <AboutContainer />
      </Router>
    );
  });

  const optionLabels = ['What We Do', 'Who We Are', 'Programs', 'Get Involved'];

  it.skip('should display banner image', () => {
    const image = screen.getByAltText('Two women of color working');
    expect(image.src).toContain('two-women');
  });

  it.skip('should display navigation bar with correct options', () => {
    optionLabels.forEach(optionLabel => screen.getByTestId(optionLabel));
  });

  it.skip('should fire a click event for all menu options', () => {
    optionLabels.forEach(optionLabel => {
      const optionLink = screen.getByTestId(optionLabel);
      fireEvent.click(optionLink);
    });
  });

  it.skip('should display corresponding title when an option is clicked', () => {
    optionLabels.forEach(optionLabel => {
      const optionLink = screen.getByTestId(optionLabel);
      const title = screen.getByTestId('title');
      fireEvent.click(optionLink);
      expect(title).toHaveTextContent(optionLabel);
    });
  });
});
