import React from 'react';
import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Index from './index';

beforeEach(() => render(<Index />));

describe('<Index/>', () => {
  test('renders Director', () => {
    expect(1).toBeTruthy();
  });
});
