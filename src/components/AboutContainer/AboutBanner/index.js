import React from 'react';
import TwoWomenImage from './two-women.jpg';
import useStyles from './AboutBanner.styles';
import { Typography } from '@material-ui/core';

const AboutBanner = () => {
  const { container, overlay, title } = useStyles();
  return (
    <figure className={container}>
      <img src={TwoWomenImage} alt="Two women of color working" />
      <div className={overlay} ariaHidden="true"></div>
      <Typography variant="h2" className={title}>
        What We Do
      </Typography>
    </figure>
  );
};

export default AboutBanner;
