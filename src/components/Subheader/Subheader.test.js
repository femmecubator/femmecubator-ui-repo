import React from 'react';
import { render, cleanup, screen } from '@testing-library/react';
import Subheader from './Subheader';
import userEvent from '@testing-library/user-event';

afterEach(cleanup);

jest.mock('../../utils/auth');
// eslint-disable-next-line no-console
console.error = jest.fn();
const properties = { variant: 'mentors', mainLabel: '' };
const handleClick = jest.fn();

describe('<Subheader/>', () => {
  test('<Subheader/>', () => {
    render(<Subheader {...properties} />);
    // eslint-disable-next-line no-console
    expect(console.error).not.toHaveBeenCalled();
  });

  test('Should Remove the Header', () => {
    render(<Subheader {...properties} testClick={handleClick} />);
    userEvent.click(screen.getByRole('button'));
    expect(handleClick).toBeCalled();
  });
});
