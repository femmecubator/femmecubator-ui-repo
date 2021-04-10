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
    const images = [];
    for (let i = 0; i < 6; i++) {
      images.push(
        <Grid key={i} item className={photoContainer}>
          <img
            src="https://i.ibb.co/LtxhtWs/Screen-Shot-2021-04-10-at-3-47-10-PM.png"
            alt="Cat"
          />
        </Grid>
      );
    }
    return images;
  };

  return (
    <>
      <PhotoSection text="AppDev Volunteer Team" getImagesFn={getImages} />
      <PhotoSection text="Operations Team" getImagesFn={getImages} />
    </>
  );
};

export default WhoWeAre;
