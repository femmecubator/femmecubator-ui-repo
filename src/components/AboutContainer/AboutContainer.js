import React, { useState } from 'react';
import AboutBanner from './AboutBanner';
import AboutContentContainer from './AboutContentContainer';
import AboutSideBar from './AboutSideBar';
import Footer from 'components/Footer/Footer';
import useStyles from './AboutContainer.styles';

const AboutContainer = () => {
  const { container, body } = useStyles();
  const [selected, setSelected] = useState('What We Do');

  return (
    <section className={container}>
      <AboutBanner text={selected} />
      <section className={body}>
        <AboutSideBar {...{ selected, setSelected }} />
        <AboutContentContainer selected={selected} />
      </section>
      <Footer />
    </section>
  );
};

export default AboutContainer;
