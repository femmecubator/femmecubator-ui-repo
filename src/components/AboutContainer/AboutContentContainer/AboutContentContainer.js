import React from 'react';
import useStyles from './AboutContentContainer.styles';
import {
  WhatWeDo,
  WhoWeAre,
  Community,
  Support,
  Volunteer,
  ContactUs,
} from './AboutContentPages';
import { PropTypes } from 'prop-types';

const AboutContentContainer = ({ selected, setSelected }) => {
  const { container, content } = useStyles();

  const page = () => {
    switch (selected) {
      case 'What We Do':
        return <WhatWeDo />;
      case 'Who We Are':
        return <WhoWeAre />;
      case 'Community':
        return <Community />;
      case 'Support':
        return <Support />;
      case 'Volunteer':
        return <Volunteer {...{ selected, setSelected }} />;
      case 'Contact Us':
        return <ContactUs />;
      default:
        return <WhatWeDo />;
    }
  };

  return (
    <section className={container}>
      <article className={content}>{page()}</article>
    </section>
  );
};

AboutContentContainer.propTypes = {
  selected: PropTypes.string,
  setSelected: PropTypes.func,
};

export default AboutContentContainer;
