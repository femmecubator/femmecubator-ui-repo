import React from 'react';
import { act, render, screen } from '@testing-library/react';
import { mockMentorProps } from './utils';
import Directory from '.';
import request from '../../utils/axiosConfig';

jest.mock('../../utils/axiosConfig', () => {
  return { get: jest.fn() };
});

const mockData = [mockMentorProps];

describe('<Directory/>', () => {
  test('Mentor Directory to be Empty', async () => {
    request.get.mockResolvedValue({ data: [] });
    await act(async () => {
      render(<Directory />);
    });
    const loadIcon = screen.getByRole('progressbar');
    expect(loadIcon).toBeTruthy();
  });

  test('Mentor Cards Load', async () => {
    request.get.mockResolvedValue({ data: mockData });
    await act(async () => {
      render(<Directory />);
    });
    const container = screen.getByTestId('mentorListContainer');
    const mentorCount = container.childElementCount;
    expect(mockData.length).toBe(mentorCount);
  });
});
