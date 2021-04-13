import React from 'react';
import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MentorSearchBar from './MentorSearchBar';

const mockOnSubmit = jest.fn();
beforeEach(() => render(<MentorSearchBar mockOnSubmit={mockOnSubmit} />));

describe('<MentorSearhBar/>', () => {
  test('Search Button is Present', () => {
    const submitButton = screen.getByRole('button');
    expect(submitButton.textContent).toBe('Search');
  });
  test('Search Input Field to be Present', () => {
    const searchInput = screen.getByLabelText('Search');
    expect(searchInput).toHaveTextContent('');
  });

  test('Calls on Submit function', async () => {
    const searchInput = screen.getByPlaceholderText('Name, Title, Keywords');
    const submitButton = screen.getByRole('button');

    await act(async () => {
      userEvent.type(searchInput, 'carl');
      userEvent.click(submitButton);
    });
    expect(mockOnSubmit).toHaveBeenCalledTimes(1);
  });
});
