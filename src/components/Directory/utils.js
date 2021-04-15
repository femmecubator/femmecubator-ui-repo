import React from 'react';
import { ReactComponent as SubheaderIcon } from '../Subheader/assets/SubheaderIcon.svg';
// import useStyles from './Directory.styles';
// const { directoryTab } = useStyles({
//   isMobile,
// });
export const subheaderProperties = {
  variant: 'mentors',
  mainLabel: 'Connect with a Mentor',
  subLabel: 'Book 30 mins with a UX Design or Coding Mentor.',
  image: <SubheaderIcon />,
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
