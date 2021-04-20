import React from 'react';
import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Directory from '.';
import request from '../../utils/axiosConfig';

jest.mock('../../utils/axiosConfig', () => {
  return { get: jest.fn() };
});

// jest.mock('../../utils/axiosConfig', () => {
//   const mockData = [
//     {
//       firstName: 'Amanda',
//       lastName: 'Powell',
//       title: 'Coding Mentor',
//       mentorSkills:
//         'Wireframing, Prototyping, User Research, Customer Journey, Persona',
//       bio:
//         'Lorem ipsum testing lines limited to an awesomely composed lead sentence or series of posts. Snappy, judgy, tyrannical. Compassionate or narcissistic. It is a placeholderawesomely composed lead sentence or series of posts. Snappy, judgy, tyrannical. Compassionate or narcissistic.Snappy, judgy, tyrannical. Compassionate or narcissistic. It is a placeholder  limited to 280 char text to a max of 5 Compassionate or narcissistic. It is a placeholder  limited to 280 char text to a max of 5 ',
//       initials: 'AP',
//       _id: 'asllld123',
//     },
//   ];
//   return { get: () => ({ data: mockData }) };
// });

// Testing is within its own env/bubble
// not connected to the given backend(must locally connect/ mock info that is needed from the 'back');
// async if you need to wait for a response from a loading event
// should rendder cards
// should render empty banner when there is no cards

const mockData = [
  {
    firstName: 'Amanda',
    lastName: 'Powell',
    title: 'Coding Mentor',
    mentorSkills:
      'Wireframing, Prototyping, User Research, Customer Journey, Persona',
    bio:
      'Lorem ipsum testing lines limited to an awesomely composed lead sentence or series of posts. Snappy, judgy, tyrannical. Compassionate or narcissistic. It is a placeholderawesomely composed lead sentence or series of posts. Snappy, judgy, tyrannical. Compassionate or narcissistic.Snappy, judgy, tyrannical. Compassionate or narcissistic. It is a placeholder  limited to 280 char text to a max of 5 Compassionate or narcissistic. It is a placeholder  limited to 280 char text to a max of 5 ',
    initials: 'AP',
    _id: 'asllld123',
  },
  {
    firstName: 'Linda',
    lastName: 'Well',
    title: 'Coding Mentor',
    mentorSkills:
      'Wireframing, Prototyping, User Research, Customer Journey, Persona',
    bio:
      'Lorem ipsum testing lines limited to an awesomely composed lead sentence or series of posts. Snappy, judgy, tyrannical. Compassionate or narcissistic. It is a placeholderawesomely composed lead sentence or series of posts. Snappy, judgy, tyrannical. Compassionate or narcissistic.Snappy, judgy, tyrannical. Compassionate or narcissistic. It is a placeholder  limited to 280 char text to a max of 5 Compassionate or narcissistic. It is a placeholder  limited to 280 char text to a max of 5 ',
    initials: 'AP',
    _id: 'asllxd123',
  },
];

describe('<Directory/>', () => {
  // test('Mentor Cards Not Found', async () => {
  //   await act(async () => {
  //     render(<Directory />);
  //     request.get.mockResolvedValue({ data: [] });
  //   });
  // });
  test('Mentor Cards Load', async () => {
    // request.get.mockResolvedValue({ data: mockData });
    await act(async () => request.get.mockResolvedValue({ data: mockData }));

    await act(async () => {
      const { debug } = render(<Directory />);

      debug(screen.getByTestId('mentorListContainer'));
    });
  });
});
