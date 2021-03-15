import React from 'react';
import Card from './MentorCard/card';
import Subheader from '../Subheader/Subheader';
import { ReactComponent as SubheaderIcon } from '../Subheader/assets/SubheaderIcon.svg';
const index = () => {
  const subheaderProperties = {
    variant: 'mentors',
    mainLabel: 'Connect with a Mentor',
    subLabel: 'Book 30 mins with a UX Design or Coding Mentor.',
    image: <SubheaderIcon />,
  };
  return (
    <section aria-label="Mentor Directory">
      <Subheader {...subheaderProperties} />
      <div className="search">Search Bar</div>
      <div className="MentorCardContainter">
        <Card />
      </div>
    </section>
  );
};

export default index;
