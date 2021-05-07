import React from 'react';
import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter as Router } from 'react-router-dom';
import LoginForm from '.';
import AuthMock from '../../../utils/auth';

jest.mock('../../../utils/auth');
describe('<LoginForm />', () => {
  const mockOnSubmit = jest.fn();

  beforeAll(() => {
    AuthMock.isLoggedIn.mockImplementation(() => false);
  });

  beforeEach(() => {
    render(
      <Router>
        <LoginForm testOnSubmit={mockOnSubmit} />
      </Router>
    );
  });

  describe('with valid inputs', () => {
    test('calls the onsubmit function', async () => {
      const emailInput = screen.getByRole('textbox', { name: /email/i });
      const passwordInput = screen.getByTestId('password');
      const submitButton = screen.getByRole('button', { name: /SIGN IN/i });

      await act(async () => {
        userEvent.type(emailInput, 'testing@gmail.com');
        userEvent.type(passwordInput, 'abc123');
        userEvent.click(submitButton);
      });

      expect(mockOnSubmit).toHaveBeenCalled();
    });

    test('no alerts/errors should show', async () => {
      const emailInput = screen.getByRole('textbox', { name: /email/i });
      const passwordInput = screen.getByTestId('password');
      const submitButton = screen.getByRole('button', { name: /SIGN IN/i });

      await act(async () => {
        userEvent.type(emailInput, 'testing@gmail.com');
        userEvent.type(passwordInput, 'abc123');
        userEvent.click(submitButton);
      });

      const authError = screen.queryByRole('alert');
      const emailInputError = screen.queryByText('Invalid email format');
      const passwordInputError = screen.queryByText('Password is required');

      expect(authError).toBeNull();
      expect(emailInputError).toBeNull();
      expect(passwordInputError).toBeNull();
    });
  });

  describe('with invalid email', () => {
    test('onSubmit should not be called', async () => {
      const emailInput = screen.getByRole('textbox', { name: /email/i });
      const passwordInput = screen.getByTestId('password');
      const submitButton = screen.getByRole('button', { name: /SIGN IN/i });

      await act(async () => {
        userEvent.type(emailInput, 'testgmail.com');
        userEvent.type(passwordInput, '123');
        userEvent.click(submitButton);
      });

      expect(mockOnSubmit).not.toHaveBeenCalled();
    });

    test('email error should show', async () => {
      const emailInput = screen.getByRole('textbox', { name: /email/i });
      const passwordInput = screen.getByTestId('password');
      const submitButton = screen.getByRole('button', { name: /SIGN IN/i });

      await act(async () => {
        userEvent.type(emailInput, 'testinggmail.com');
        userEvent.type(passwordInput, 'abc123');
        userEvent.click(submitButton);
      });

      const emailInputError = screen.queryByText('Invalid email format');
      const passwordInputError = screen.queryByText('Password is required');

      expect(emailInputError).not.toBeNull();
      expect(passwordInputError).toBeNull();
    });
  });

  describe('with invalid password', () => {
    test('onSubmit should not be called', async () => {
      const emailInput = screen.getByRole('textbox', { name: /email/i });
      const submitButton = screen.getByRole('button', { name: /SIGN IN/i });

      await act(async () => {
        userEvent.type(emailInput, 'test@gmail.com');
        userEvent.click(submitButton);
      });

      expect(mockOnSubmit).not.toHaveBeenCalled();
    });
  });

  describe('with invalid email and password', () => {
    test('onSubmit should not be called', async () => {
      const emailInput = screen.getByRole('textbox', { name: /email/i });
      const submitButton = screen.getByRole('button', { name: /SIGN IN/i });

      await act(async () => {
        userEvent.type(emailInput, 'test@gmailcom');
        userEvent.click(submitButton);
      });

      expect(mockOnSubmit).not.toHaveBeenCalled();
    });

    test('both email/password error should show', async () => {
      const emailInput = screen.getByRole('textbox', { name: /email/i });
      const submitButton = screen.getByRole('button', { name: /SIGN IN/i });

      await act(async () => {
        userEvent.type(emailInput, 'testing@gmailcom');
        userEvent.click(submitButton);
      });

      const emailInputError = screen.queryByText('Invalid email format');
      const passwordInputError = screen.queryByText('Password is required');

      expect(emailInputError).not.toBeNull();
      expect(passwordInputError).not.toBeNull();
    });
  });
});
