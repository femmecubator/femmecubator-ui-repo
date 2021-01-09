import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import RegistrationSuccess from './index';
import { Button } from '@material-ui/core';

const onClickButtonModal = jest.fn();

describe('<RegistrationSuccess />', () => {
  const titleText = 'This is the title';
  const bodyText = 'This is the body';

  beforeEach(() => {
    render(
      <RegistrationSuccess
        openModal={true}
        titleText={titleText}
        bodyText={bodyText}
        button={
          <Button
            {...{
              variant: 'contained',
              color: 'primary',
              onClick: onClickButtonModal,
            }}
          >
            Go to Main Page
          </Button>
        }
      />
    );
  });

  it('should display the modal', () => {
    expect(screen.getByTestId('registration-success-modal')).toBeTruthy();
  });

  it('should render logos, title, body, and button correctly', () => {
    screen.getByTestId('modal-logo-femmecubator');
    screen.getByTestId('modal-logo-check-circle');
    screen.getByRole('heading', {
      name: (content) => content === titleText,
    });
    screen.getByText((content) => content === bodyText);
    fireEvent.click(
      screen.getByRole('button', {
        name: /go to main page/i,
      })
    );
    expect(onClickButtonModal).toHaveBeenCalled();
  });
});
