import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import GetInvolved from './GetInvolved';

('use strict');

it('renders the page and shows the headings', () => {
  render(<GetInvolved />);
  expect(
    screen.getByText('We are proudly volunteer-driven')
  ).toBeInTheDocument();
  expect(screen.getByText('Donate')).toBeInTheDocument();
  expect(screen.getByText('Grow with us')).toBeInTheDocument();
  expect(screen.getByText('Mentor')).toBeInTheDocument();
  expect(screen.getByText('Volunteer')).toBeInTheDocument();
});

const Button = ({ onClick, children }) => (
  <button onClick={onClick}>{children}</button>
);

it('checks that the Make a Donation button is clickable', () => {
  const handleClick = jest.fn();
  render(<Button onClick={handleClick}>MAKE A DONATION</Button>);
  fireEvent.click(screen.getByText(/make a donation/i));
  expect(handleClick).toHaveBeenCalledTimes(1);
});

it('checks that the Support on Patreon button is clickable', () => {
  const handleClick = jest.fn();
  render(<Button onClick={handleClick}>SUPPORT ON PATREON</Button>);
  fireEvent.click(screen.getByText(/support on patreon/i));
  expect(handleClick).toHaveBeenCalledTimes(1);
});

it('checks that the Sign Up to be a Mentor button is clickable', () => {
  const handleClick = jest.fn();
  render(<Button onClick={handleClick}>SIGN UP TO BE A MENTOR</Button>);
  fireEvent.click(screen.getByText(/sign up to be a mentor/i));
  expect(handleClick).toHaveBeenCalledTimes(1);
});

it('checks that the Apply to Volunteer button is clickable', () => {
  const handleClick = jest.fn();
  render(<Button onClick={handleClick}>APPLY TO VOLUNTEER</Button>);
  fireEvent.click(screen.getByText(/apply to volunteer/i));
  expect(handleClick).toHaveBeenCalledTimes(1);
});
