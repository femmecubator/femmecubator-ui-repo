import React from 'react';
import MentorCard from '../components/Directory/MentorCard';
import { mockMentorProps } from '../components/Directory/utils';
export default {
  title: 'Mentor Card',
  component: MentorCard,
};

export const Template = args => <MentorCard {...args} />;

export const PrimaryCard = Template.bind({});
PrimaryCard.args = mockMentorProps;
