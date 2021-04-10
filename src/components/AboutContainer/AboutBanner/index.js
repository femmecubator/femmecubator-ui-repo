import { React, useContext } from 'react';
import TwoWomenImage from './two-women.jpg';
import useStyles from './AboutBanner.styles';
import { Typography } from '@material-ui/core';
import { AboutContext } from '../AboutContext';

const AboutBanner = () => {
  const { container, title } = useStyles();
  const [selected] = useContext(AboutContext);

  return (
    <figure className={container}>
      <img src={TwoWomenImage} alt="Two women of color working" />
      <Typography variant="h2" className={title}>
        {selected}
      </Typography>
    </figure>
  );
};

export default AboutBanner;
