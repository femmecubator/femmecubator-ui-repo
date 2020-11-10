import React from 'react';
import { render, cleanup, fireEvent, getByText } from '@testing-library/react'
import ErrorFallback from "./ErrorFallback";



const reload = jest.fn();
describe("<ErrorFallback />", () => {
    it("renders correct error image", () => {
        const { getByTestId } = render(<ErrorFallback />);
        const errorImg = getByTestId('errorIllustration');
        expect(errorImg.tagName).toBe('IMG');
        expect(errorImg).toHaveAttribute('src', 'errorIllustration.svg')
    });

    it("renders error text", () => {
        const { getByRole } = render(<ErrorFallback />);
        const errorTitle = getByRole('heading');
        expect(errorTitle).toHaveTextContent(`We're having trouble loading this page.`)

    })

    it("it reloads page on click", () => {
        const { getByTestId, container } = render(<ErrorFallback onClick={reload} />);
        const reloadButton = getByTestId('reloadButton');
        fireEvent.click(reloadButton)
        expect(reload).toHaveBeenCalledTimes(1);
    })
})
