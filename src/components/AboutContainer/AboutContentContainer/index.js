import React, { useContext } from 'react';
import useStyles from './AboutContentContainer.styles';
import WhatWeDo from './AboutContentPages/WhatWeDo';
import { AboutContext } from '../AboutContext';
import WhoWeAre from './AboutContentPages/WhoWeAre';
import Programs from './AboutContentPages/Programs';

const AboutContentContainer = () => {
  const { container, content } = useStyles();
  const [selected] = useContext(AboutContext);

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

export default AboutContentContainer;
