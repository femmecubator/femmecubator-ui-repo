import React from 'react';
import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { GlobalProvider } from 'context/global';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from 'context/auth';
import LoginForm from './';

describe('<LoginForm />', () => {
  const mockOnSubmit = jest.fn();

  beforeEach(() => {
    jest.resetAllMocks();
    render(
      <AuthProvider>
        <GlobalProvider>
          <Router>
            <LoginForm testOnSubmit={mockOnSubmit} />
          </Router>
        </GlobalProvider>
      </AuthProvider>
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
      const passwordInputError = screen.queryByText('Enter a password');

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

    test('authError and email error should show', async () => {
      const emailInput = screen.getByRole('textbox', { name: /email/i });
      const passwordInput = screen.getByTestId('password');
      const submitButton = screen.getByRole('button', { name: /SIGN IN/i });

      await act(async () => {
        userEvent.type(emailInput, 'testinggmail.com');
        userEvent.type(passwordInput, 'abc123');
        userEvent.click(submitButton);
      });

      const authError = screen.queryByRole('alert');
      const emailInputError = screen.queryByText('Invalid email format');
      const passwordInputError = screen.queryByText('Enter a password');

      expect(authError).not.toBeNull();
      expect(emailInputError).not.toBeNull();
      expect(passwordInputError).toBeNull();
    });
  });

  describe('with invalid password', () => {
    test('onSubmit should not be called', async () => {
      const emailInput = screen.getByRole('textbox', { name: /email/i });
      const passwordInput = screen.getByTestId('password');
      const submitButton = screen.getByRole('button', { name: /SIGN IN/i });

      await act(async () => {
        userEvent.type(emailInput, 'test@gmail.com');
        userEvent.type(passwordInput, '');
        userEvent.click(submitButton);
      });

      expect(mockOnSubmit).not.toHaveBeenCalled();
    });

    test('authError and password error should show', async () => {
      const emailInput = screen.getByRole('textbox', { name: /email/i });
      const passwordInput = screen.getByTestId('password');
      const submitButton = screen.getByRole('button', { name: /SIGN IN/i });

      await act(async () => {
        userEvent.type(emailInput, 'testing@gmail.com');
        userEvent.type(passwordInput, '');
        userEvent.click(submitButton);
      });

      const authError = screen.queryByRole('alert');
      const emailInputError = screen.queryByText('Invalid email format');
      const passwordInputError = screen.queryByText('Enter a password');

      expect(authError).not.toBeNull();
      expect(emailInputError).toBeNull();
      expect(passwordInputError).not.toBeNull();
    });
  });

  describe('with invalid email and password', () => {
    test('onSubmit should not be called', async () => {
      const emailInput = screen.getByRole('textbox', { name: /email/i });
      const passwordInput = screen.getByTestId('password');
      const submitButton = screen.getByRole('button', { name: /SIGN IN/i });

      await act(async () => {
        userEvent.type(emailInput, 'test@gmailcom');
        userEvent.type(passwordInput, '');
        userEvent.click(submitButton);
      });

      expect(mockOnSubmit).not.toHaveBeenCalled();
    });

    test('authError and both email/password error should show', async () => {
      const emailInput = screen.getByRole('textbox', { name: /email/i });
      const passwordInput = screen.getByTestId('password');
      const submitButton = screen.getByRole('button', { name: /SIGN IN/i });

      await act(async () => {
        userEvent.type(emailInput, 'testing@gmailcom');
        userEvent.type(passwordInput, '');
        userEvent.click(submitButton);
      });

      const authError = screen.queryByRole('alert');
      const emailInputError = screen.queryByText('Invalid email format');
      const passwordInputError = screen.queryByText('Enter a password');

      expect(authError).not.toBeNull();
      expect(emailInputError).not.toBeNull();
      expect(passwordInputError).not.toBeNull();
    });
  });
});
