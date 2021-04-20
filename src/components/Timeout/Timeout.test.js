import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Modal } from '../../stories/Timeout.stories';
import { Timeout } from './Timeout';

'use-strict'

jest.useFakeTimers();
const mockTimeout = jest.fn(Timeout);

it('waits one second before showing the modal popup', () => {
  //const mockTimeout = require('./Timeout');
  expect(mockTimeout).not.toBeCalled();
  jest.runAllTimers();
  mockTimeout();
  expect(mockTimeout).toHaveBeenCalled();
  expect(mockTimeout).toHaveBeenCalledTimes(1);
  expect(mockTimeout).toHaveBeenLastCalledWith();
});

it('renders the modal popup', () => {
  render(<Modal />);
  expect(screen.getByText('Your online session')).toBeInTheDocument();
});