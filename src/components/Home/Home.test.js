import React from 'react';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import Home, {
  StyledButton,
  BlueOutlineButton,
  WhiteButton,
} from 'components/Home/Home';
import { act } from 'react-dom/test-utils';
import secondImage from './assets/secondimage.jpg';

const resizeToMobile = () => {
  global.innerWidth = 600;
  global.dispatchEvent(new Event('resize'));
};

const resizeToDesktop = () => {
  global.innerWidth = 900;
  global.dispatchEvent(new Event('resize'));
};

describe('<Home />', () => {
  beforeEach(() => {
    act(() => {
      render(<Home />);
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
      name: /three ladies sitting and working on their laptops/i,
    });
  });

  it('should display Carousel if window is smaller than 799px and should hide Carousel if larger', () => {});

  it('should fire a click event for all buttons', () => {
    const handleClick = jest.fn();
    const { getByText } = render(
      <>
        <BlueOutlineButton onClick={handleClick}>
          BLUE OUTLINE
        </BlueOutlineButton>
        <StyledButton onClick={handleClick}>BLUE FILLED</StyledButton>
        <WhiteButton onClick={handleClick}>WHITE BUTTON</WhiteButton>
      </>
    );
    fireEvent.click(getByText(/BLUE OUTLINE/i));
    fireEvent.click(getByText(/BLUE FILLED/i));
    fireEvent.click(getByText(/WHITE BUTTON/i));
    expect(handleClick).toHaveBeenCalledTimes(3);
  });
});
