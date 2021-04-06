import React from 'react';
import { render, fireEvent, screen, cleanup } from '@testing-library/react';
import RegistrationForm from './index';
import { act } from 'react-dom/test-utils';
import { BrowserRouter as Router } from 'react-router-dom';
import AuthMock from '../../../utils/auth';

jest.mock('../../../utils/auth');
const mockOnSubmit = jest.fn();
describe('<RegistrationForm />', () => {
  beforeAll(() => {
    AuthMock.isLoggedIn.mockImplementation(() => false);
  });
  beforeEach(() => {
    render(
      <Router>
        <RegistrationForm mockOnSubmit={mockOnSubmit} />
      </Router>
    );
  });

  afterEach(() => {
    cleanup();
  });

  it('should check that titles and mentor and mentee buttons render to page', async () => {
    await act(async () => {
      const formTitle = screen.getByText('Create account');
      expect(formTitle).toBeInTheDocument();

      const formSubtitle = screen.getByText('Have an existing account?');
      expect(formSubtitle).toBeInTheDocument();

      const loginLink = screen.getByText('Login');
      expect(loginLink).toBeInTheDocument();

      const chipSelectText = screen.getByText('I want to sign up as a:');
      expect(chipSelectText).toBeInTheDocument();

      const mentorSelect = screen.getByText('Mentor');
      expect(mentorSelect).toBeInTheDocument();
      fireEvent.click(mentorSelect);

      const menteeSelect = screen.getByText('Mentee');
      expect(menteeSelect).toBeInTheDocument();
      fireEvent.click(menteeSelect);
    });
  });

  it('should check if the submit button handler has been called', async () => {
    await act(async () => {
      fireEvent.click(
        screen.getByRole('button', {
          name: /mentor/i,
        })
      );
      fireEvent.input(screen.getByTestId('firstName'), {
        target: { value: 'John' },
      });
      fireEvent.input(screen.getByTestId('lastName'), {
        target: { value: 'Doe' },
      });
      fireEvent.input(screen.getByTestId('title'), {
        target: { value: 'Software Engineer' },
      });
      fireEvent.input(screen.getByTestId('email'), {
        target: { value: 'johndoe@gmail.com' },
      });
      fireEvent.input(screen.getByTestId('password'), {
        target: { value: 'JDoe12345!' },
      });
      fireEvent.input(screen.getByTestId('retypePassword'), {
        target: { value: 'JDoe12345!' },
      });
    });

    await act(async () => {
      fireEvent.submit(screen.getByTestId('submit'));
    });
    expect(mockOnSubmit).toHaveBeenCalled();
  });

  it('should validate errors for required fields', async () => {
    await act(async () => {
      fireEvent.submit(screen.getByTestId('submit'));
    });
    const passwordError = await screen.findAllByText('Password is required');

    screen.getByText(/first name is required/i);
    screen.getByText(/first name is required/i);
    screen.getByText(/title is required/i);
    screen.getByText(/email is required/i);
    expect(passwordError).toHaveLength(2);
  });

  it('should validate error for fields with invalid format', async () => {
    await act(async () => {
      fireEvent.input(screen.getByTestId('firstName'), {
        target: { value: '1234' },
      });
      fireEvent.input(screen.getByTestId('lastName'), {
        target: { value: '1234' },
      });
      fireEvent.input(screen.getByTestId('title'), {
        target: { value: '1234' },
      });
      fireEvent.input(screen.getByTestId('email'), {
        target: { value: 'johndoe' },
      });
      fireEvent.input(screen.getByTestId('password'), {
        target: { value: 'a1234567' },
      });
      fireEvent.input(screen.getByTestId('retypePassword'), {
        target: { value: 'a1234567!' },
      });
    });

    await act(async () => {
      fireEvent.submit(screen.getByTestId('submit'));
    });

    const onlyLetters = await screen.findAllByText(
      /must only contain letters/i
    );
    screen.getByText(/invalid email format/i);
    screen.getByText(/invalid password format/i);
    screen.getByText(/passwords do not match./i);
    expect(onlyLetters).toHaveLength(3);
  });
});
