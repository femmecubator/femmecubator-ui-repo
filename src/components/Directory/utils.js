export const font = {
  fontFamily: 'Open Sans, sans-serif',
};

export const subheaderProperties = {
  variant: 'mentors',
  mainLabel: 'Connect with a Mentor',
  subLabel: 'Book 30 mins with a UX Design or Coding Mentor.',
};

export const emptySearch = {
  mainLabel: 'Yikes! Your search results came back empty.',
  subLabel: 'Try any of these keyword types:',
  options: ['Last Name', 'First Name', 'Skills', 'Coding or UX Mentor'],
};

export const directoryTabs = tabClass => [
  {
    label: 'Directory',
    id: 'Directory',
    'aria-controls': 'Directory Tab',
    textColor: 'inherit',
    className: tabClass,
  },
  {
    label: 'Calendar',
    id: 'Calendar',
    'aria-controls': 'Calendar Tab',
    tabIndex: '0',
    disabled: true,
  },
];

export const mockMentorProps = {
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
