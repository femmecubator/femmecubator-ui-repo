import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import RegistrationForm from './index';
import { act } from 'react-dom/test-utils';
import { GlobalProvider } from 'context/global';
import { BrowserRouter as Router } from 'react-router-dom';

describe('<RegistrationForm />', () => {
  it('should check if the submit button handler has been called', async () => {
    const mockOnSubmit = jest.fn();

    const { getByTestId } = render(
      <GlobalProvider>
        <Router>
          <RegistrationForm onSubmit={mockOnSubmit} />
        </Router>
      </GlobalProvider>
    );
    await act(async () => {
      fireEvent.input(getByTestId('firstName'), { target: { value: 'John' } });
      fireEvent.input(getByTestId('lastName'), { target: { value: 'Doe' } });
      fireEvent.input(getByTestId('prefLoc'), { target: { value: 'NY' } });
      fireEvent.input(getByTestId('title'), {
        target: { value: 'Software Engineer' },
      });
      fireEvent.input(getByTestId('email'), {
        target: { value: 'johndoe@gmail.com' },
      });
      fireEvent.input(getByTestId('userName'), {
        target: { value: 'john.doe' },
      });
      fireEvent.input(getByTestId('password'), {
        target: { value: 'JDoe12345!' },
      });
      fireEvent.input(getByTestId('retypePassword'), {
        target: { value: 'JDoe12345!' },
      });
    });

    await act(async () => {
      fireEvent.submit(getByTestId('submit'));
    });
    expect(mockOnSubmit).toHaveBeenCalled();
  });

  it('should validate errors for required fields', async () => {
    const mockOnSubmit = jest.fn();
    const { getByTestId, container } = render(
      <GlobalProvider>
        <Router>
          <RegistrationForm onSubmit={mockOnSubmit} />
        </Router>
      </GlobalProvider>
    );

    await act(async () => {
      fireEvent.submit(getByTestId('submit'));
    });
    const passwordError = await screen.findAllByText('Password is required');

    expect(container.innerHTML).toMatch('First name is required');
    expect(container.innerHTML).toMatch('Last name is required');
    expect(container.innerHTML).toMatch('Preferred Location is required');
    expect(container.innerHTML).toMatch('Title is required');
    expect(container.innerHTML).toMatch('Email is required');
    expect(container.innerHTML).toMatch('User name is required');
    expect(passwordError).toHaveLength(2);
  });

  it('should validate error for fields with invalid format', async () => {
    const mockOnSubmit = jest.fn();

    const { getByTestId, container } = render(
      <GlobalProvider>
        <Router>
          <RegistrationForm onSubmit={mockOnSubmit} />
        </Router>
      </GlobalProvider>
    );
    await act(async () => {
      fireEvent.input(getByTestId('firstName'), { target: { value: '1234' } });
      fireEvent.input(getByTestId('lastName'), { target: { value: '1234' } });
      fireEvent.input(getByTestId('prefLoc'), { target: { value: '11' } });
      fireEvent.input(getByTestId('title'), {
        target: { value: 'Software Engineer1' },
      });
      fireEvent.input(getByTestId('email'), {
        target: { value: 'johndoe' },
      });
      fireEvent.input(getByTestId('userName'), {
        target: { value: 'john.doe1@' },
      });
      fireEvent.input(getByTestId('password'), {
        target: { value: 'a1234567' },
      });
      fireEvent.input(getByTestId('retypePassword'), {
        target: { value: 'a1234567!' },
      });
    });

    await act(async () => {
      fireEvent.submit(getByTestId('submit'));
    });

    const onlyLetters = await screen.findAllByText(
      'Must only contain letters (A-Z, a-z)'
    );

    expect(container.innerHTML).toMatch(
      'Must only contain letters and spaces(A-Z, a-z)'
    );
    expect(container.innerHTML).toMatch('Invalid email format');
    expect(container.innerHTML).toMatch(
      'Only contains alphanumeric characters, underscore and dot'
    );
    expect(container.innerHTML).toMatch('Invalid password: (A-z 0-9 @$!%*?%)');
    expect(onlyLetters).toHaveLength(3);
  });
});
