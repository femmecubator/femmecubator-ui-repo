import React from 'react';
import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter as Router } from 'react-router-dom';
import MentorOnboardingModal from './';
import AuthMock from '../../../utils/auth';

jest.mock('../../../utils/auth');
describe('<MentorOnboardingModal />', () => {
  const mockOnSubmit = jest.fn();

  beforeAll(() => {
    AuthMock.isLoggedIn.mockImplementation(() => false);
  });

  beforeEach(() => {
    render(
      <Router>
        <MentorOnboardingModal testOnSubmit={mockOnSubmit} />
      </Router>
    );
  });

  describe('with valid inputs', () => {
    test('calls the onsubmit function', async () => {
      const bioInput = screen.getByRole('textbox', { name: /bio/i });
      const passwordInput = screen.getByTestId('password');
      const submitButton = screen.getByRole('button', { name: /Open Modal/i });

      await act(async () => {
        userEvent.type(bioInput, 'testing@gmail.com');
        userEvent.type(passwordInput, 'abc123');
        userEvent.click(submitButton);
      });

      expect(mockOnSubmit).toHaveBeenCalled();
    });

    test('no alerts/errors should show', async () => {
      const bioInput = screen.getByRole('textbox', { name: /email/i });
      const passwordInput = screen.getByTestId('password');
      const submitButton = screen.getByRole('button', { name: /SIGN IN/i });

      await act(async () => {
        userEvent.type(bioInput, 'testing@gmail.com');
        userEvent.type(passwordInput, 'abc123');
        userEvent.click(submitButton);
      });

      const authError = screen.queryByRole('alert');
      const bioInputError = screen.queryByText('Invalid email format');
      const passwordInputError = screen.queryByText('Password is required');

      expect(authError).toBeNull();
      expect(bioInputError).toBeNull();
      expect(passwordInputError).toBeNull();
    });
  });

  describe('with invalid email', () => {
    test('onSubmit should not be called', async () => {
      const bioInput = screen.getByRole('textbox', { name: /email/i });
      const passwordInput = screen.getByTestId('password');
      const submitButton = screen.getByRole('button', { name: /SIGN IN/i });

      await act(async () => {
        userEvent.type(bioInput, 'testgmail.com');
        userEvent.type(passwordInput, '123');
        userEvent.click(submitButton);
      });

      expect(mockOnSubmit).not.toHaveBeenCalled();
    });

    test('email error should show', async () => {
      const bioInput = screen.getByRole('textbox', { name: /email/i });
      const passwordInput = screen.getByTestId('password');
      const submitButton = screen.getByRole('button', { name: /SIGN IN/i });

      await act(async () => {
        userEvent.type(bioInput, 'testinggmail.com');
        userEvent.type(passwordInput, 'abc123');
        userEvent.click(submitButton);
      });

      const bioInputError = screen.queryByText('Invalid email format');
      const passwordInputError = screen.queryByText('Password is required');

      expect(bioInputError).not.toBeNull();
      expect(passwordInputError).toBeNull();
    });
  });

  describe('with invalid password', () => {
    test('onSubmit should not be called', async () => {
      const bioInput = screen.getByRole('textbox', { name: /email/i });
      const passwordInput = screen.getByTestId('password');
      const submitButton = screen.getByRole('button', { name: /SIGN IN/i });

      await act(async () => {
        userEvent.type(bioInput, 'test@gmail.com');
        userEvent.type(passwordInput, '');
        userEvent.click(submitButton);
      });

      expect(mockOnSubmit).not.toHaveBeenCalled();
    });
  });

  describe('with invalid email and password', () => {
    test('onSubmit should not be called', async () => {
      const bioInput = screen.getByRole('textbox', { name: /email/i });
      const passwordInput = screen.getByTestId('password');
      const submitButton = screen.getByRole('button', { name: /SIGN IN/i });

      await act(async () => {
        userEvent.type(bioInput, 'test@gmailcom');
        userEvent.type(passwordInput, '');
        userEvent.click(submitButton);
      });

      expect(mockOnSubmit).not.toHaveBeenCalled();
    });

    test('both email/password error should show', async () => {
      const bioInput = screen.getByRole('textbox', { name: /email/i });
      const passwordInput = screen.getByTestId('password');
      const submitButton = screen.getByRole('button', { name: /SIGN IN/i });

      await act(async () => {
        userEvent.type(bioInput, 'testing@gmailcom');
        userEvent.type(passwordInput, '');
        userEvent.click(submitButton);
      });

      const bioInputError = screen.queryByText('Invalid email format');
      const passwordInputError = screen.queryByText('Password is required');

      expect(bioInputError).not.toBeNull();
      expect(passwordInputError).not.toBeNull();
    });
  });
});