import React from 'react';
import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Directory from './';
import { directoryTabs } from './utils';

beforeEach(() => render(<Directory />));

// tests must check if subheader component shows
// tests must check on load that mentor data is filled
// tests must check for search container
// tests must ensure 'officeHours show up'
// tests must ensure that Directory tab exsists

const mockData = [
  {
    mentorName: 'Amanda Powell',
    jobTitle: 'Coding Mentor',
    mentorSkills:
      'Wireframing, Prototyping, User Research, Customer Journey, Persona',
    bio:
      'Lorem ipsum testing lines limited to an awesomely composed lead sentence or series of posts. Snappy, judgy, tyrannical. Compassionate or narcissistic. It is a placeholderawesomely composed lead sentence or series of posts. Snappy, judgy, tyrannical. Compassionate or narcissistic.Snappy, judgy, tyrannical. Compassionate or narcissistic. It is a placeholder  limited to 280 char text to a max of 5 Compassionate or narcissistic. It is a placeholder  limited to 280 char text to a max of 5 ',
    initials: 'AP',
    _id: 'asllld123',
  },
  {
    mentorName: 'Alex Powell',
    jobTitle: 'Coding Mentor',
    mentorSkills:
      'Wireframing, Prototyping, User Research, Customer Journey, Persona',
    bio:
      'Lorem ipsum testing lines limited to an awesomely composed lead sentence or series of posts. Snappy, judgy, tyrannical. Compassionate or narcissistic. It is a placeholderawesomely composed lead sentence or series of posts. Snappy, judgy, tyrannical. Compassionate or narcissistic.Snappy, judgy, tyrannical. Compassionate or narcissistic. It is a placeholder  limited to 280 char text to a max of 5 Compassionate or narcissistic. It is a placeholder  limited to 280 char text to a max of 5 ',
    initials: 'AP',
    _id: 'asllxd123',
  },
];
describe('<Directory/>', async () => {
  test('renders Directory', async () => {
    // const { rerender } = render(<Directory />);
    // rerender(<Directory />);
    jest.spyOn(global, 'fetch').mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockData),
      })
    );

    const directoryHeader = screen.getByTestId('directoryHeader');
    console.log('DIRECTORY HEADER', directoryHeader);
    expect(directoryHeader.textContent).toBe('Office Hours');
  });
});
