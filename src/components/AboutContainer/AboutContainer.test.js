import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import AboutContainer from './AboutContainer';
import { act } from 'react-dom/test-utils';
import { BrowserRouter as Router } from 'react-router-dom';

describe('<AboutContainer />', () => {
  beforeEach(() => {
    act(() => {
      render(
        <Router>
          <AboutContainer />
        </Router>
      );
    });
  });

  const optionLabels = ['What We Do', 'Who We Are', 'Programs', 'Get Involved'];

  it('should display banner image', () => {
    const image = screen.getByAltText('Two women of color working');
    expect(image.src).toContain('two-women');
  });

  it('should display navigation bar with correct options', () => {
    optionLabels.forEach((optionLabel) => screen.getByTestId(optionLabel));
  });

  it('should fire a click event for all menu options', () => {
    optionLabels.forEach((optionLabel) => {
      let optionLink = screen.getByTestId(optionLabel);
      fireEvent.click(optionLink);
    });
  });

  it('should display corresponding title when an option is clicked', async () => {
    await optionLabels.forEach((optionLabel) => {
      let optionLink = screen.getByTestId(optionLabel);
      let title = screen.getByTestId('title');
      fireEvent.click(optionLink);
      expect(title).toHaveTextContent(optionLabel);
    });
  });
});
