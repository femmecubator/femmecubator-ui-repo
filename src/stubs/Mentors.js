import React from 'react';
import Subheader from '../components/Subheader/Subheader.js';
import { ReactComponent as SubheaderIcon } from '../components/Subheader/assets/SubheaderIcon.svg';

const Mentors = () => {
  const subheaderProperties = {
    variant: 'mentors',
    mainLabel: 'Connect with a Mentor',
    subLabel: 'Book 30 mins with a UX Design or Coding Mentor.',
    image: <SubheaderIcon />,
  };
  return (
    <>
      <Subheader {...subheaderProperties} />
      Mentors
    </>
  );
};

export default Mentors;
