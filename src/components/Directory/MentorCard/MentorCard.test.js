import React from 'react';
import { render, cleanup, screen } from '@testing-library/react';
import MentorCard from './MentorCard';

// describe accepts 2 arguments a string and a function
// MentorCard should have a Mentors name/ icon/ and bio
afterEach(cleanup);
describe('<MentorCard>', () => {
  render(<MentorCard {...properties} />);
});
