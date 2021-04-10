import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import useStyles from '../AboutContentContainer.styles';

const PhotoSection = ({ text, getImagesFn }) => {
  const { title, photosContainer } = useStyles();
  return (
    <>
      <Typography variant="h2" className={title}>
        {text}
      </Typography>
      <hr />
      <Grid container spacing={3} className={photosContainer}>
        {getImagesFn()}
      </Grid>
    </>
  );
};

const WhoWeAre = () => {
  const { photoContainer } = useStyles();

  const getImages = () => {
    const formattedImages = [];
    const catPngs = [
      'https://i.ibb.co/LtxhtWs/Screen-Shot-2021-04-10-at-3-47-10-PM.png',
      'https://i.ibb.co/fMdtQgb/Screen-Shot-2021-04-10-at-4-06-56-PM.png',
      'https://i.ibb.co/yV4JYWz/Screen-Shot-2021-04-10-at-4-07-04-PM.png',
    ];

    for (let i = 0; i < 6; i++) {
      let catIdx = i % catPngs.length;
      formattedImages.push(
        <Grid key={i} item className={photoContainer}>
          <img src={catPngs[catIdx]} alt="Cat" />
        </Grid>
      );
    }
    return formattedImages;
  };

  return (
    <>
      <PhotoSection text="AppDev Volunteer Team" getImagesFn={getImages} />
      <PhotoSection text="Operations Team" getImagesFn={getImages} />
    </>
  );
};

export default WhoWeAre;
