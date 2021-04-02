import React from 'react';
import { render, cleanup, screen } from '@testing-library/react';
import MentorCard from './MentorCard';

// describe accepts 2 arguments a string and a function
describe('<MentorCard>', () => {
  render(<MentorCard {...properties} />);
});
