import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react'
import ErrorFallback from "./ErrorFallback";
test('<ErrorFallback>', () => {
    afterEach(cleanup);
    const { debug } = render(<ErrorFallback />);
    console.log(debug());

    // it('should display Femmecubator text logo', () => {
    //     screen.getByText(/femmecubator/i);
    // });
})

