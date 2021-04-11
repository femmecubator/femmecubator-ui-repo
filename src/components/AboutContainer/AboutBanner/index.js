import React from 'react';
import TwoWomenImage from './two-women.jpg';
import useStyles from './AboutBanner.styles';
import { Typography } from '@material-ui/core';
import PropTypes from 'prop-types';

const AboutBanner = ({ text }) => {
  const { container, title } = useStyles();

  return (
    <figure className={container}>
      <img {...{ src: TwoWomenImage, alt: 'Two women of color working' }} />
      <Typography {...{ variant: 'h2', className: title }}>{text}</Typography>
    </figure>
  );
};

export default AboutBanner;

AboutBanner.propTypes = {
  text: PropTypes.string,
};
