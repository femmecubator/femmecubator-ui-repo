import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react'
import { ErrorBoundary } from './ErrorBoundary';


test('<ErrorBoundary>', () => {
    afterEach(cleanup);
    const { debug, getByTestId } = render(<ErrorBoundary />);
    console.log(debug());

    // it('should display Femmecubator text logo', () => {
    //     screen.getByText(/femmecubator/i);
    // });
})

