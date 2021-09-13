import React from 'react';
import { render, screen, waitFor, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MentorOnboardingModal from './MentorOnboardingModal';

describe('<MentorOnboardingModal />', () => {
  const mockOnSubmit = jest.fn();
  jest.setTimeout(10000);

  beforeEach(() => {
    render(<MentorOnboardingModal opened={true} mockOnSubmit={mockOnSubmit} />);
  });

  test('should submit with valid inputs', async () => {
    const bio = screen.getByRole('textbox', {
      name: 'Add a Bio (128 char)' || 'Bio',
    });
    const skills = screen.getByTestId('skills');
    const phone = screen.getByRole('textbox', { name: 'Phone' });
    const timezone = screen.getByTestId('timezone');
    const googlemeet = screen.getByRole('textbox', {
      name: 'Add a google meet:',
    });
    const submitButton = screen.getByRole('button', {
      name: "I'M GOOD TO GO!",
    });

    await act(async () => {
      userEvent.type(bio, 'Narwhal prism snackwave pop-up.');
      userEvent.click(skills);
      userEvent.keyboard('{a}');
      await waitFor(() => screen.getByRole('listbox'));
      userEvent.keyboard('{ArrowDown}{Enter}');
      userEvent.type(phone, '123-123-1234');
      userEvent.click(timezone);
      userEvent.keyboard('{ArrowDown}');
      await waitFor(() => screen.getByRole('listbox'));
      userEvent.keyboard('{ArrowDown}{Enter}');
      userEvent.type(googlemeet, 'meet.google.com/asd-asdf-asd');

      userEvent.click(submitButton);
    });
    expect(mockOnSubmit).toHaveBeenCalled();
  });

  test('should not submit with invalid inputs', async () => {
    const bio = screen.getByRole('textbox', { name: 'Add a Bio (128 char)' });
    const skills = screen.getByTestId('skills');
    const phone = screen.getByRole('textbox', { name: 'Phone' });
    const timezone = screen.getByTestId('timezone');
    const googlemeet = screen.getByRole('textbox', {
      name: 'Add a google meet:',
    });
    const submitButton = screen.getByRole('button', {
      name: "I'M GOOD TO GO!",
    });

    await act(async () => {
      const bioText = 'Narwhal prism snackwave pop-up.';
      userEvent.type(bio, bioText.repeat(5));
      userEvent.click(skills);
      userEvent.keyboard('{a}');
      await waitFor(() => screen.getByRole('listbox'));
      userEvent.keyboard('{ArrowDown}{Enter}');
      userEvent.type(phone, '123-a123-1242');
      userEvent.click(timezone);
      userEvent.keyboard('{ArrowDown}');
      await waitFor(() => screen.getByRole('listbox'));
      userEvent.keyboard('{ArrowDown}{Enter}');
      userEvent.type(googlemeet, 'meetgooglecom/asd-asdf-asd');
      userEvent.click(submitButton);
    });

    screen.getByText('Bio must be no more than 128 characters');
    screen.getByText('Phone number is not valid');
    screen.getByText('Google meet link is not valid');

    expect(mockOnSubmit).not.toHaveBeenCalled();
  });

  test('should not submit with no inputs', async () => {
    const submitButton = screen.getByRole('button', {
      name: "I'M GOOD TO GO!",
    });

    await act(async () => {
      userEvent.click(submitButton);
    });

    screen.getByText('Bio is required');
    screen.getByText('One skill is required');
    screen.getByText('Phone number is required');
    screen.getByText('Timezone is required');
    screen.getByText('Google meet is required');

    expect(mockOnSubmit).not.toHaveBeenCalled();
  });
});
