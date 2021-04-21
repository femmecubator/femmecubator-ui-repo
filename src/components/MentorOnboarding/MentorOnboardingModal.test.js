import React from 'react';
import { render, screen } from '@testing-library/react';
import MentorOnboardingModal from './MentorOnboardingModal';
import { act } from 'react-dom/test-utils';
import userEvent from '@testing-library/user-event';

const mockOnSubmit = jest.fn();
describe('<MentorOnboardingModal />', () => {
  beforeEach(() => {
    render(<MentorOnboardingModal mockOnSubmit={mockOnSubmit} />);
  });

  test('should submit with valid inputs', async () => {
    const openModal = screen.getByText('Open Modal');

    userEvent.click(openModal);
    const bio = screen.getByPlaceholderText('Add bio here.');
    const skills = screen.getByPlaceholderText('Select Skills');
    const phone = screen.getByPlaceholderText('718-777-4545');
    const timezone = screen.getAllByTestId('timezone');
    const googlemeet = screen.getByPlaceholderText('Add google meet link');
    const submitButton = screen.getByText("I'M GOOD TO GO!");

    await act(async () => {
      userEvent.type(
        bio,
        'Narwhal prism snackwave pop-up, wayfarers kinfolk asymmetrical poke. Flexitarian cliche williamsburg drinking vinegar shabby chic slow-carb pug semiotics pop-up. Cliche williamsburg drinking vinegar shabby.'
      );
      userEvent.type(phone, '917-677-9700');
      userEvent.type(timezone, 'GMT-06:00');
      userEvent.type(googlemeet, 'meet.google.com/oer-yjhx-sia');
      userEvent.type(skills, 'Algorithms,Big Data');

      userEvent.click(submitButton);
    });

    console.log(bio.value);
    expect(mockOnSubmit).toHaveBeenCalled();
    console.log(submitButton.value);
  });
});
