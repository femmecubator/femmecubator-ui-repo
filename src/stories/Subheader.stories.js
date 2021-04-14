import React from 'react';
import Subheader from 'components/Subheader/Subheader';
import { ReactComponent as SubheaderIcon } from '../components/Subheader/assets/SubheaderIcon.svg';
import { ReactComponent as WomanArrangingTiles } from '../components/Subheader/assets/WomanArrangingTiles.svg';

export default {
  title: 'Subheader',
  component: Subheader,
};

export const Template = args => <Subheader {...args} />;

export const PrimaryA = Template.bind({});

PrimaryA.args = {
  variant: 'mentors',
  mainLabel: 'Connect with a Mentor',
  subLabel: 'Book 30 mins with a UX Design or Coding Mentor.',
  image: <SubheaderIcon />,
};

export const PrimaryB = Template.bind({});

PrimaryB.args = {
  variant: 'threads',
  mainLabel: 'Start Discussions',
  subLabel: 'Create a thread to get leads on your job hunt.',
  image: <WomanArrangingTiles />,
};
