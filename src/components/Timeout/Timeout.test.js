import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Modal } from '../../stories/Timeout.stories';

it('renders the modal popup', () => {
    render(<Modal />);
    expect(screen.getByText('Your online session')).toBeInTheDocument();
})