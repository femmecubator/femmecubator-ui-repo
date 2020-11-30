import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import ErrorFallback from './ErrorFallback';

describe('<ErrorFallback />', () => {
  afterEach(cleanup);
  it('renders correct error image', () => {
    const { getByTestId } = render(<ErrorFallback />);
    const errorImg = getByTestId('errorIllustration').getAttribute('src');
    expect(errorImg).toBe('errorIllustration.svg');
  });

  it('renders error text', () => {
    const { getByRole } = render(<ErrorFallback />);
    const errorTitle = getByRole('heading');
    expect(errorTitle).toHaveTextContent(
      `We're having trouble loading this page.`
    );
  });

  it('it reloads page on click', () => {
    delete window.location;
    window.location = { reload: jest.fn() };
    expect(window.location.reload).not.toHaveBeenCalled();
    const { getByTestId } = render(
      <ErrorFallback onClick={window.location.reload} />
    );
    const reloadButton = getByTestId('reloadButton');
    fireEvent.click(reloadButton);
    expect(window.location.reload).toHaveBeenCalledTimes(1);
  });
});
