import React from 'react';
import useStyles from './AboutContentContainer.styles';
import { WhatWeDo, WhoWeAre, Programs } from './AboutContentPages';
import { PropTypes } from 'prop-types';

const AboutContentContainer = ({ selected }) => {
  const { container, content } = useStyles();

  const page = (() => {
    let result;
    switch (selected) {
      case 'What We Do':
        result = <WhatWeDo />;
        break;
      case 'Who We Are':
        result = <WhoWeAre />;
        break;
      case 'Programs':
        result = <Programs />;
        break;
      default:
        <WhatWeDo />;
    }
    return result;
  })();

  return (
    <section className={container}>
      <article className={content}>{page}</article>
    </section>
  );
};

AboutContentContainer.propTypes = {
  selected: PropTypes.string,
};

export default AboutContentContainer;
