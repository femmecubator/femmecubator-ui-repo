import React from 'react';
import useStyles from './AboutContentContainer.styles';
import WhatWeDo from './AboutContentPages/WhatWeDo';
import WhoWeAre from './AboutContentPages/WhoWeAre';
import Programs from './AboutContentPages/Programs';
import { PropTypes } from 'prop-types';

const AboutContentContainer = ({ selected }) => {
  const { container, content } = useStyles();

  const getPage = () => {
    let page;
    switch (selected) {
      case 'What We Do':
        page = <WhatWeDo />;
        break;
      case 'Who We Are':
        page = <WhoWeAre />;
        break;
      case 'Programs':
        page = <Programs />;
        break;
      default:
        <WhatWeDo />;
    }
    return page;
  };

  return (
    <section className={container}>
      <article className={content}>{getPage()}</article>
    </section>
  );
};

AboutContentContainer.propTypes = {
  selected: PropTypes.string,
};

export default AboutContentContainer;
