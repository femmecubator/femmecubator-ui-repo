import React from 'react';
import AboutBanner from './AboutBanner';
import AboutContentContainer from './AboutContentContainer';
import AboutSideBar from './AboutSideBar';
import { Grid } from '@material-ui/core';
import Footer from 'components/Footer/Footer';

const AboutContainer = () => {
  return (
    <>
      <AboutBanner />
      <Grid container direction="row" justify="center" alignItems="flex-start">
        <Grid item xs={2}>
          <AboutSideBar />
        </Grid>
        <Grid item xs={10}>
          <AboutContentContainer />
        </Grid>
      </Grid>
      <Footer />
    </>
  );
};

export default AboutContainer;
