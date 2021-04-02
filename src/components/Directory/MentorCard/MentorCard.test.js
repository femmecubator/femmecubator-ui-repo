import React from 'react';
import { render, cleanup, screen } from '@testing-library/react';
import MentorCard from './MentorCard';

// describe accepts 2 arguments a string and a function
// MentorCard should have a Mentors name/ icon/ and bio
// when running test your specific file npm run test <filename>
afterEach(cleanup);
const properties = {
  mentorName: 'Amanda Powell',
  jobTitle: 'Coding Mentor',
  mentorSkills:
    'Wireframing, Prototyping, User Research, Customer Journey, Persona',
  bio:
    'Lorem ipsum testing lines limited to an awesomely composed lead sentence or series of posts. Snappy, judgy, tyrannical. Compassionate or narcissistic. It is a placeholderawesomely composed lead sentence or series of posts. Snappy, judgy, tyrannical. Compassionate or narcissistic.Snappy, judgy, tyrannical. Compassionate or narcissistic. It is a placeholder  limited to 280 char text to a max of 5 Compassionate or narcissistic. It is a placeholder  limited to 280 char text to a max of 5 ',
  initials: 'AP',
};
describe('<MentorCard>', () => {
  test('Render Mentor Card', () => {
    console.log(expect(properties.mentorName).toBeTruthy());
    render(<MentorCard {...properties} />);
  });
});
