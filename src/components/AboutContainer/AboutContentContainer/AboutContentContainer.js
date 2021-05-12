import React from 'react';
import useStyles from './AboutContentContainer.styles';
import { WhatWeDo, WhoWeAre, Programs, GetInvolved } from './AboutContentPages';
import { PropTypes } from 'prop-types';

const AboutContentContainer = ({ selected }) => {
  const { container, content } = useStyles();

  const page = () => {
    switch (selected) {
      case 'What We Do':
        return <WhatWeDo />;
      case 'Who We Are':
        return <WhoWeAre />;
      case 'Programs':
        return <Programs />;
      case 'Get Involved':
        return <GetInvolved />;
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
};

export default AboutContentContainer;
