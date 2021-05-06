import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { mockMentorProps } from '../utils';
import MentorCard from '.';

const handleTestClick = jest.fn();

beforeEach(() =>
  render(<MentorCard {...mockMentorProps} onTestClick={handleTestClick} />)
);

describe('<MentorCard>', () => {
  test('Mentor name is visible', () => {
    const mentorName = screen.getByTestId('mentorNameField').textContent;
    expect(mentorName).toEqual(
      mockMentorProps.firstName + ' ' + mockMentorProps.lastName
    );
  });
  test('Mentor job title is visible', () => {
    const jobTitle = screen.getByTestId('jobTitleField').textContent;
    expect(jobTitle).toBe(mockMentorProps.title);
  });
  test('Mentor Skills is visible', () => {
    const skillList = screen.getByTestId('skillList').textContent;
    expect(skillList).toBe(mockMentorProps.mentorSkills);
  });
  test('Mentor bio section is visible', () => {
    const bio = screen.getByTestId('bioSection').textContent;
    expect(bio).toBe(mockMentorProps.bio);
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
