import React from 'react';
import MentorCard from '../components/Directory/MentorCard/MentorCard';

export default {
  title: 'Mentor Card',
  component: MentorCard,
};

export const Template = (args) => <MentorCard {...args} />;

export const PrimaryCard = Template.bind({});

PrimaryCard.args = {
  // arguments you want to pass to the child component
  mentorName: 'Amanda Powell',
  jobTitle: 'UX Design Mentor',
  mentorSkills:
    'Wireframing, Prototyping, User Research, Customer Journey, Persona',
  bio:
    'Lorem ipsum testing lines limited to an awesomely composed lead sentence or series of posts. Snappy, judgy, tyrannical. Compassionate or narcissistic. It is a placeholder limited to 280 char text to a max of 5 lines then get truncated w3 dot ellipses...',
  initials: 'AP',
};
