import React from 'react';
import { render, cleanup, fireEvent, screen } from '@testing-library/react';

import LoginForm from './';

describe('<LoginForm />', () => {
  afterEach(cleanup);

  test('submitting invalid email or password should show warning', () => {
    const { debug, getByTestId } = render(<LoginForm />);

    debug();
  });
});
