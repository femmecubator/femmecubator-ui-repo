import React from 'react';
import { act, render, screen } from '@testing-library/react';
import { mockMentorProps } from './utils';
import userEvent from '@testing-library/user-event';
import Directory from '.';
import request from '../../utils/axiosConfig';

jest.mock('../../utils/axiosConfig', () => {
  return { get: jest.fn() };
});

// jest.mock('../../utils/axiosConfig', () => {
//   const mockData = [
//  mockMentorProps
//   ];
//   return { get: () => ({ data: mockData }) };
// });

// Testing is within its own env/bubble
// not connected to the given backend(must locally connect/ mock info that is needed from the 'back');
// async if you need to wait for a response from a loading event
// should rendder cards
// should render empty banner when there is no cards

const mockData = [mockMentorProps];

describe('<Directory/>', () => {
  test('Mentor Cards Not Found', async () => {
    await act(async () => {
      render(<Directory />);
      request.get.mockResolvedValue({ data: [] });
    });
  });
  // test('Mentor Cards Load', async () => {
  //   // request.get.mockResolvedValue({ data: mockData });
  //   console.log(mockData);
  //   await act(async () => request.get.mockResolvedValue({ data: mockData }));

  //   await act(async () => {
  //     const { debug } = render(<Directory />);

  //     debug(screen.getByTestId('mentorListContainer'));
  //   });
  // });
});
