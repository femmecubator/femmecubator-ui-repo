import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import useStyles from '../AboutContentContainer.styles';
import { PropTypes } from 'prop-types';

const PhotoSection = ({ text, images }) => {
  const { title, photosContainer } = useStyles();
  return (
    <>
      <Typography {...{ variant: 'h2', className: title }}>{text}</Typography>
      <Grid container {...{ spacing: 3, className: photosContainer }}>
        {images}
      </Grid>
    </>
  );
};

PhotoSection.propTypes = {
  text: PropTypes.string,
  images: PropTypes.arrayOf(PropTypes.element),
};

const WhoWeAre = () => {
  const { photoContainer } = useStyles();

  const images = (() => {
    const result = [];
    const catPngs = [
      'https://i.ibb.co/LtxhtWs/Screen-Shot-2021-04-10-at-3-47-10-PM.png',
      'https://i.ibb.co/fMdtQgb/Screen-Shot-2021-04-10-at-4-06-56-PM.png',
      'https://i.ibb.co/yV4JYWz/Screen-Shot-2021-04-10-at-4-07-04-PM.png',
    ];

    for (let i = 0; i < 6; i++) {
      let catIdx = i % catPngs.length;
      result.push(
        <Grid key={i} item className={photoContainer}>
          <img src={catPngs[catIdx]} alt="Cat" />
        </Grid>
      );
    }
    return result;
  })();

  return (
    <>
      <PhotoSection {...{ text: 'AppDev Volunteer Team', images }} />
      <PhotoSection {...{ text: 'Operations Team', images }} />
    </>
  );
};

export default WhoWeAre;
