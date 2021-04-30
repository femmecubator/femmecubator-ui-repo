import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Modal } from '../../stories/Timeout.stories';
import { Timeout } from './Timeout';

'use-strict'

jest.useFakeTimers();

it.skip('waits before showing the modal popup', () => {
  const mockTimeout = jest.fn(Timeout);
  expect(mockTimeout).not.toBeCalled();
  jest.runAllTimers();
  mockTimeout();
  expect(mockTimeout).toHaveBeenCalled();
  expect(mockTimeout).toHaveBeenCalledTimes(1);
});

it.skip('renders the modal popup', () => {
  render(<Modal />);
  expect(screen.getByText('Your online session')).toBeInTheDocument();
});