import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
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

  it.skip('should check if the submit button handler has been called', async () => {
    await act(async () => {
      fireEvent.input(screen.getByTestId('firstName'), {
        target: { value: 'John' },
      });
      fireEvent.input(screen.getByTestId('lastName'), {
        target: { value: 'Doe' },
      });
      /* fireEvent.input(screen.getByTestId('prefLoc'), {
        target: { value: 'NY' },
      }); */
      fireEvent.input(screen.getByTestId('title'), {
        target: { value: 'Software Engineer' },
      });
      fireEvent.input(screen.getByTestId('email'), {
        target: { value: 'johndoe@gmail.com' },
      });
      /* fireEvent.input(screen.getByTestId('userName'), {
        target: { value: 'john.doe' },
      }); */
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

  it.skip('should validate errors for required fields', async () => {
    await act(async () => {
      fireEvent.submit(screen.getByTestId('submit'));
    });
    const passwordError = await screen.findAllByText('Password is required');

    screen.getByText(/first name is required/i);
    screen.getByText(/first name is required/i);
    screen.getByText(/preferred location is required/i);
    screen.getByText(/title is required/i);
    screen.getByText(/email is required/i);
    screen.getByText(/user name is required/i);
    expect(passwordError).toHaveLength(2);
  });

  it.skip('should validate error for fields with invalid format', async () => {
    await act(async () => {
      fireEvent.input(screen.getByTestId('firstName'), {
        target: { value: '1234' },
      });
      fireEvent.input(screen.getByTestId('lastName'), {
        target: { value: '1234' },
      });
      fireEvent.input(screen.getByTestId('prefLoc'), {
        target: { value: '1234' },
      });
      fireEvent.input(screen.getByTestId('title'), {
        target: { value: '1234' },
      });
      fireEvent.input(screen.getByTestId('email'), {
        target: { value: 'johndoe' },
      });
      fireEvent.input(screen.getByTestId('userName'), {
        target: { value: 'john.doe1@' },
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
    screen.getByText(
      /only contains alphanumeric characters, underscore and dot/i
    );
    screen.getByText(/invalid password format/i);
    screen.getByText(/passwords do not match./i);
    expect(onlyLetters).toHaveLength(4);
  });
});