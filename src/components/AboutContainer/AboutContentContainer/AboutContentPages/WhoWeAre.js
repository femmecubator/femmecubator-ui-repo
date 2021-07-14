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
        container
        {...{
          spacing: 10,
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
    const result = [];
    const catPngs = [
      {
        img: 'assets/Netaly.png',
        name: 'Netaly Ramirez',
        title: 'Software Engineer',
      },
      {
        img: 'assets/Sherouk.png',
        name: 'Sherouk Omara',
        title: 'Software Engineer',
      },
      {
        img: 'assets/Jackson.png',
        name: 'Jackson Chen',
        title: 'Dev Teaching Assistant',
      },
      {
        img: 'assets/Karem.png',
        name: 'Karem Ceron',
        title: 'Software Engineer',
      },
      {
        img: 'assets/Carlo.png',
        name: 'Carlo Fernando',
        title: 'Tech Lead',
      },
    ];

    for (let i = 0; i < catPngs.length; i++) {
      let catIdx = i % catPngs.length;
      result.push(
        <Grid key={i} item className={photoContainer}>
          <img src={catPngs[catIdx].img} alt="team member" />
          <p>{catPngs[catIdx].name}</p>
          <p>{catPngs[catIdx].title}</p>
        </Grid>
      );
    }
    return result;
  })();

  const imagesTwo = (() => {
    //const resultTwo = [];
    const catPngs = [
      {
        img: 'assets/Krizia.png',
        name: 'Krizia Fernando',
        title: 'Founder and Co-Director',
        subtitle: 'Tech and Partnerships',
      },
      {
        img: 'assets/Erika.png',
        name: 'Erika Jeffers',
        title: 'Co-Director',
        subtitle: 'Operations and Programming',
      },
      {
        img: 'assets/Pauline.png',
        name: 'Pauline Vercaza',
        title: 'Content and Community Lead',
      },
      {
        img: 'assets/Krish.png',
        name: 'Krish Uy Raneses',
        title: 'UX Designer',
      },
    ];

    //catPngs.map(getInfo);

    //<Grid /* key={i} */ item className={photoContainer}>
    {
      /* catPngs.map(getInfo); */
    }
    return (
      <Grid item className={photoContainer}>
        {catPngs.map((person, index) => (
          <div key={index}>
            <img src={person.img} alt="team member" />
            <p>{person.name}</p>
            <p>{person.title}</p>
            <p>{person.subtitle}</p>
          </div>
        ))}
      </Grid>
    );

    /* <p>{item.name}</p> */

    //</Grid>;

    /* function getInfo(item) {
      return [item.img];
    } */

    /* for (let i = 0; i < catPngs.length; i++) {
      let catIdx = i % catPngs.length;
      resultTwo.push(
        <Grid key={i} item className={photoContainer}>
          <img src={catPngs[catIdx].img} alt="team member" />
          <p>{catPngs[catIdx].name}</p>
          <p>{catPngs[catIdx].title}</p>
          <p>{catPngs[catIdx].subtitle}</p>
        </Grid>
      );
    }
    return resultTwo; */
  })();

  return (
    <>
      <PhotoSection {...{ text: 'AppDev Volunteer Team', images }} />
      <PhotoSection {...{ text: 'Operations Team', imagesTwo }} />
    </>
  );
};

export default WhoWeAre;
