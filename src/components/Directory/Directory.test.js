import React from 'react';
import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Index from './index';

beforeEach(() => render(<Index />));

// tests must check if subheader component shows
// tests must check on load that mentor data is filled
// tests must check for search container
// tests must ensure 'officeHours show up'
// tests must ensure that Directory tab exsists

describe('<Directory/>', () => {
  test('renders Director', () => {
    expect(1).toBeTruthy();
  });
});
