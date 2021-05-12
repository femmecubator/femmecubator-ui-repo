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

it('checks that the Make a Donation button appears', () => {
  render(<GetInvolved />);
  //const handleClick = jest.fn();
  const Button = screen.getByTestId('donateButton');
  //fireEvent.click(Button);
  expect(Button).toHaveTextContent('MAKE A DONATION');
});

it('checks that the Support on Patreon button appears', () => {
  render(<GetInvolved />);
  //const handleClick = jest.fn();
  const Button = screen.getByTestId('patreonButton');
  //fireEvent.click(Button);
  expect(Button).toHaveTextContent('SUPPORT ON PATREON');
});

it('checks that the Mentor Signup button appears', () => {
  render(<GetInvolved />);
  //const handleClick = jest.fn();
  const Button = screen.getByTestId('mentorButton');
  //fireEvent.click(Button);
  expect(Button).toHaveTextContent('SIGN UP TO BE A MENTOR');
});

it('checks that the Volunteer Signup button appears', () => {
  render(<GetInvolved />);
  //const handleClick = jest.fn();
  const Button = screen.getByTestId('volunteerButton');
  //fireEvent.click(Button);
  expect(Button).toHaveTextContent('APPLY TO VOLUNTEER');
});