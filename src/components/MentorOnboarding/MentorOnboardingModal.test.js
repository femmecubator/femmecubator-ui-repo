import React from 'react';
import { render, screen, waitFor, within } from '@testing-library/react';
import MentorOnboardingModal from './MentorOnboardingModal';
import { act } from 'react-dom/test-utils';
import userEvent from '@testing-library/user-event';
import { Subtitles } from '@material-ui/icons';

const mockOnSubmit = jest.fn();
describe('<MentorOnboardingModal />', () => {
  beforeEach(() => {
    render(<MentorOnboardingModal opened={true} mockOnSubmit={mockOnSubmit} />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test.skip('should submit with valid inputs', async () => {
    const bio = screen.getByRole('textbox', { name: 'Add a Bio (128 char)' });
    // const skills = screen.getByTestId('skills');
    const skills = screen.getByLabelText(
      'Skills (eg. tech stack, anything you can offer help with.)'
    );
    const phone = screen.getByRole('textbox', { name: 'Phone' });
    // const timezone = screen.getByTestId('timezone');
    const googlemeet = screen.getByRole('textbox', {
      name: 'Add a google meet:',
    });
    const submitButton = screen.getByRole('button', {
      name: "I'M GOOD TO GO!",
    });

    console.log(skills);

    await act(async () => {
      userEvent.type(
        bio,
        'Narwhal prism snackwave pop-up, wayfarers kinfolk asymmetrical poke.'
      );
      userEvent.type(phone, '123-123-1234');
      userEvent.type(googlemeet, 'meet.google.com/asd-asdf-asd');
      userEvent.click(skills);
      userEvent.type(skills, 'a');
      // userEvent.type(skills, '{enter}');
      userEvent.click(submitButton);
    });
    expect(mockOnSubmit).toHaveBeenCalled();
  });
});
