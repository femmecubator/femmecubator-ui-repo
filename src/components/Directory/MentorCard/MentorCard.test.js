import React from 'react';
import { render, cleanup, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MentorCard from './MentorCard';

// describe accepts 2 arguments a string and a function
// MentorCard should have a Mentors name/ icon/ and bio
// when running test your specific file npm run test <filename>
// each testing needs its own rendered item/ set up the enviornment so that that section can be tested start with a render
// than you can set up expectations of what you want to see.
// check that each of these properties exist and show up in the card
// check if the button can be clicked and is visible
afterEach(cleanup);
const handleClick = jest.fn();

const properties = {
  mentorName: 'Amanda Powell',
  jobTitle: 'Coding Mentor',
  mentorSkills:
    'Wireframing, Prototyping, User Research, Customer Journey, Persona',
  bio:
    'Lorem ipsum testing lines limited to an awesomely composed lead sentence or series of posts. Snappy, judgy, tyrannical. Compassionate or narcissistic. It is a placeholderawesomely composed lead sentence or series of posts. Snappy, judgy, tyrannical. Compassionate or narcissistic.Snappy, judgy, tyrannical. Compassionate or narcissistic. It is a placeholder  limited to 280 char text to a max of 5 Compassionate or narcissistic. It is a placeholder  limited to 280 char text to a max of 5 ',
  initials: 'AP',
  _id: 'asdf1234',
};

describe('<MentorCard>', () => {
  test('Mentor name is visible', () => {
    render(<MentorCard {...properties} />);
    const mentorName = screen.getByTestId('mentorNameField').textContent;
    expect(mentorName).toBe(properties.mentorName);
  });
  test('Mentor job title is visible', () => {
    render(<MentorCard {...properties} />);
    const jobTitle = screen.getByTestId('jobTitleField').textContent;
    expect(jobTitle).toBe(properties.jobTitle);
  });
  test('Mentor Skills is visible', () => {
    render(<MentorCard {...properties} />);
    const skillList = screen.getByTestId('skillList').textContent;
    expect(skillList).toBe(properties.mentorSkills);
  });
  test('Mentor bio section is visible', () => {
    render(<MentorCard {...properties} />);
    const bio = screen.getByTestId('bioSection').textContent;
    expect(bio).toBe(properties.bio);
  });
});

describe('MentorCard Button', () => {
  test('Button visible', () => {
    render(<MentorCard {...properties} />);
    const bookingButton = screen.getByRole('button').textContent;
    expect(bookingButton).toBe('BOOK ME');
  });
  test('Calls onClick prop when called', () => {
    render(<MentorCard {...properties} />);
    // const bookingButton = screen.getByRole('button');
    const button = screen.getByRole('button');
    userEvent.click(button);
    expect(console.error).not.toHaveBeenCalled();
  });
});
