import React from 'react';
import { render, screen, within } from '@testing-library/react';
import { emptySearch } from '../utils';
import EmptyDirectory from './index';

beforeEach(() => {
  render(<EmptyDirectory {...emptySearch} />);
});
describe('<EmptyDirectory/>', () => {
  test('Should Show MainText', () => {
    const mainText = screen.getByTestId('mainText');
    expect(mainText.textContent).toBe(emptySearch.mainLabel);
  });
  test('Should Show SubText', () => {
    const subText = screen.getByTestId('subText');
    expect(subText.textContent).toBe(emptySearch.subLabel);
  });
  test('Should list options', () => {
    const optionList = screen.getByRole('list');
    const { getAllByRole } = within(optionList);
    const items = getAllByRole('listitem');
    expect(items.length).toBe(emptySearch.options.length);
  });
});
