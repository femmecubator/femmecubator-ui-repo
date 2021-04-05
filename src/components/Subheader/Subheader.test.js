import React from 'react';
import { render, cleanup, screen } from '@testing-library/react';
import Subheader from './Subheader';
import userEvent from '@testing-library/user-event';

afterEach(cleanup);

jest.mock('../../utils/auth');
console.error = jest.fn();
const properties = { variant: 'mentors', mainLabel: '' };
const handleClick = jest.fn();

describe('<Subheader/>', () => {
  test('<Subheader/>', () => {
    render(<Subheader {...properties} />);
    expect(console.error).not.toHaveBeenCalled();
  });

  test('Should Remove the Header', () => {
    render(<Subheader {...properties} testClick={handleClick} />);
    userEvent.click(screen.getByRole('button'));
    expect(handleClick).toBeCalled();
  });
});
