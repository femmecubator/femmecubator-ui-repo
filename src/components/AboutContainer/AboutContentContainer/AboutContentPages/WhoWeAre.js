import React from 'react';
import { Typography, Grid, useMediaQuery } from '@material-ui/core';
import useStyles from '../AboutContentContainer.styles';
import { PropTypes } from 'prop-types';
import { MOBILE_MEDIA_QUERY } from 'utils/constants';
//import { Person } from '@material-ui/icons';

const PhotoSection = ({ text, images, imagesTwo }) => {
  const { title, photosContainer } = useStyles();
  const isMobile = useMediaQuery(MOBILE_MEDIA_QUERY);

  return (
    <>
      <Typography {...{ variant: 'h2', className: title }}>{text}</Typography>
      <Grid
        {...{
          container: true,
          spacing: 10,
          direction: 'row',
          className: photosContainer,
          justify: isMobile ? 'center' : 'flex-start',
        }}
      >
        {images} {imagesTwo}
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
    const memberPngs = [
      {
        id: 'netaly-software-engineer',
        img: 'assets/Netaly.png',
        name: 'Netaly Ramirez',
        title: 'Software Engineer',
      },
      {
        id: 'sherouk-software-engineer',
        img: 'assets/Sherouk.png',
        name: 'Sherouk Omara',
        title: 'Software Engineer',
      },
      {
        id: 'jackson-teaching-assistant',
        img: 'assets/Jackson.png',
        name: 'Jackson Chen',
        title: 'Dev Teaching Assistant',
      },
      {
        id: 'karem-software-engineer',
        img: 'assets/Karem.png',
        name: 'Karem Ceron',
        title: 'Software Engineer',
      },
      {
        id: 'carlo-tech-lead',
        img: 'assets/Carlo.png',
        name: 'Carlo Fernando',
        title: 'Tech Lead',
      },
    ];

    return (
      <Grid item className={photoContainer}>
        {memberPngs.map(({ person: id, img, name, title, subtitle }) => (
          <div key={id}>
            <img src={img} alt="team member" />
            <p>{name}</p>
            <p>{title}</p>
            <p>{subtitle}</p>
          </div>
        ))}
      </Grid>
    );
  })();

  const imagesTwo = (() => {
    const memberPngs = [
      {
        id: 'krizia-founder',
        img: 'assets/Krizia.png',
        name: 'Krizia Fernando',
        title: 'Founder and Co-Director',
        subtitle: 'Tech and Partnerships',
      },
      {
        id: 'erika-codirector',
        img: 'assets/Erika.png',
        name: 'Erika Jeffers',
        title: 'Co-Director',
        subtitle: 'Operations and Programming',
      },
      {
        id: 'pauline-content',
        img: 'assets/Pauline.png',
        name: 'Pauline Vercaza',
        title: 'Content and Community Lead',
      },
      {
        id: 'krish-ux',
        img: 'assets/Krish.png',
        name: 'Krish Uy Raneses',
        title: 'UX Designer',
      },
    ];

    return (
      <Grid item className={photoContainer}>
        {memberPngs.map(({ person: id, img, name, title, subtitle }) => (
          <div key={id}>
            <img src={img} alt="team member" />
            <p>{name}</p>
            <p>{title}</p>
            <p>{subtitle}</p>
          </div>
        ))}
      </Grid>
    );
  })();

  return (
    <>
      <PhotoSection {...{ text: 'AppDev Volunteer Team', images }} />
      <PhotoSection {...{ text: 'Operations Team', imagesTwo }} />
    </>
  );
};

export default WhoWeAre;
