import React from 'react';
import { render, cleanup, fireEvent, queryByTestId } from '@testing-library/react';
import { act } from 'react-dom/test-utils'; 

import { GlobalProvider } from 'context/global';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from 'context/auth';
import LoginForm from './';


describe('<LoginForm />', () => {
  let component
  let mockOnSubmit

  describe('with valid inputs', () => {
    beforeAll(() => {
      jest.resetAllMocks();
      mockOnSubmit = jest.fn();
      component = (
        <AuthProvider>
          <GlobalProvider>
            <Router>
              <LoginForm testOnSubmit={mockOnSubmit} />
            </Router>
          </GlobalProvider>
        </AuthProvider>
      );
    });
    afterAll(cleanup);

    test('calls the onsubmit function', async () => {
      const { getByTestId, container } = render(component);

      await act(async () => {
        fireEvent.change(getByTestId('Email'), { target: { value: "test@gmail.com"} });
        fireEvent.change(getByTestId('Password'), { target: { value: "123"} });
      });

      await act(async () => {
        fireEvent.click(getByTestId('submit'));
      });
      expect(container.innerHTML).not.toMatch('Invalid email format');
      expect(mockOnSubmit).toHaveBeenCalled();
    });
    
    test('auth error should not show', async () => {
      const { queryByTestId } = render(component);
      const authError = queryByTestId('authError');
      expect(authError).toBeNull();
    });

    test('no error messages should show under inputs', async () => {
      const { container } = render(component);
      expect(container.innerHTML).not.toMatch('Invalid email format');
      expect(container.innerHTML).not.toMatch('Enter a password');
    });

  });

  describe('with invalid email', () => {
    test.todo('renders the email validation error')
  });

  describe('with invalid password', () => {
    test.todo('renders the password validation error')
  });
});
