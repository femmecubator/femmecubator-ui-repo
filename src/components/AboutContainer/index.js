import React, { useState } from 'react';
import AboutBanner from './AboutBanner';
import AboutContentContainer from './AboutContentContainer';
import AboutSideBar from './AboutSideBar';
import { Grid } from '@material-ui/core';
import Footer from 'components/Footer/Footer';

const AboutContainer = () => {
  const [selected, setSelected] = useState('What We Do');

  return (
    <>
      <AboutBanner selected={selected} />
      <Grid
        container
        {...{ direction: 'row', justify: 'center', alignItems: 'flex-start' }}
      >
        <Grid item xs={2}>
          <AboutSideBar {...{ selected, setSelected }} />
        </Grid>
        <Grid item xs={10}>
          <AboutContentContainer selected={selected} />
        </Grid>
      </Grid>
      <Footer />
    </>
  );
};

export default AboutContainer;
