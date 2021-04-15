import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MentorCard from '.';

const properties = {
  firstName: 'Amanda',
  lastName: 'Powell',
  title: 'Coding Mentor',
  mentorSkills:
    'Wireframing, Prototyping, User Research, Customer Journey, Persona',
  bio:
    'Lorem ipsum testing lines limited to an awesomely composed lead sentence or series of posts. Snappy, judgy, tyrannical. Compassionate or narcissistic. It is a placeholderawesomely composed lead sentence or series of posts. Snappy, judgy, tyrannical. Compassionate or narcissistic.Snappy, judgy, tyrannical. Compassionate or narcissistic. It is a placeholder  limited to 280 char text to a max of 5 Compassionate or narcissistic. It is a placeholder  limited to 280 char text to a max of 5 ',
  initials: 'AP',
  _id: 'asdf1234',
};

const handleTestClick = jest.fn();

beforeEach(() =>
  render(<MentorCard {...properties} onTestClick={handleTestClick} />)
);

describe('<MentorCard>', () => {
  test('Mentor name is visible', () => {
    const mentorName = screen.getByTestId('mentorNameField').textContent;
    expect(mentorName).toEqual(
      properties.firstName + ' ' + properties.lastName
    );
  });
  test('Mentor job title is visible', () => {
    const jobTitle = screen.getByTestId('jobTitleField').textContent;
    expect(jobTitle).toBe(properties.title);
  });
  test('Mentor Skills is visible', () => {
    const skillList = screen.getByTestId('skillList').textContent;
    expect(skillList).toBe(properties.mentorSkills);
  });
  test('Mentor bio section is visible', () => {
    const bio = screen.getByTestId('bioSection').textContent;
    expect(bio).toBe(properties.bio);
  });
});

describe('MentorCard Button', () => {
  test('Button visible', () => {
    const bookingButton = screen.getByRole('button').textContent;
    expect(bookingButton).toBe('BOOK ME');
  });
  test('Calls onClick prop when called', () => {
    const button = screen.getByRole('button');
    userEvent.click(button);
    expect(handleTestClick).toHaveBeenCalled();
  });
});
