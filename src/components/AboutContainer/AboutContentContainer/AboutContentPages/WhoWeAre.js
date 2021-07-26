import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import useStyles from '../AboutContentContainer.styles';
import { PropTypes } from 'prop-types';

const PhotoSection = ({ text, images, imagesTwo, imagesThree, imagesFour }) => {
  const { title, photosContainer } = useStyles();

  return (
    <>
      <Typography {...{ variant: 'h2', className: title }}>{text}</Typography>
      <Grid
        {...{
          container: true,
          spacing: 10,
          className: photosContainer,
        }}
      >
        {images} {imagesTwo} {imagesThree} {imagesFour}
      </Grid>
    </>
  );
};

PhotoSection.propTypes = {
  text: PropTypes.string,
  images: PropTypes.element,
};

const WhoWeAre = () => {
  const { photoContainer, memberCard } = useStyles();

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
        {memberPngs.map(({ person: id, img, name, title, subtitle }, idx) => (
          <Grid className={memberCard} key={`${id} - ${idx}`}>
            <>
              <img src={img} alt="team member" />
              <p>{name}</p>
              <p>{title}</p>
              <p>{subtitle}</p>
            </>
          </Grid>
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
        {memberPngs.map(({ person: id, img, name, title, subtitle }, idx) => (
          <Grid className={memberCard} key={`${id} - ${idx}`}>
            <>
              <img src={img} alt="team member" />
              <p>{name}</p>
              <p>{title}</p>
              <p>{subtitle}</p>
            </>
          </Grid>
        ))}
      </Grid>
    );
  })();

  const imagesThree = (() => {
    const memberPngs = [
      {
        id: 'nayeli-ux-mentor',
        img: 'assets/Nayeli.png',
        name: 'Nayeli Perez',
        title: 'UX Mentor',
      },
      {
        id: 'ariella-ux-mentor',
        img: 'assets/Ariella.png',
        name: 'Ariella Chivil',
        title: 'UX Mentor',
      },
      {
        id: 'amanda-ux-mentor',
        img: 'assets/Amanda.png',
        name: 'Amanda Powell',
        title: 'UX Mentor',
      },
      {
        id: 'kianee-ux-mentor',
        img: 'assets/Kianee.png',
        name: 'Kianee De Jesus',
        title: 'UX Mentor',
      },
      {
        id: 'iris-ux-mentor',
        img: 'assets/Iris.png',
        name: 'Iris Chen',
        title: 'UX Mentor',
      },
      {
        id: 'heatherlee-ux-mentor',
        img: 'assets/Heatherlee.png',
        name: 'Heatherlee Nguyen',
        title: 'UX Mentor',
      },
      {
        id: 'laura-ux-mentor',
        img: 'assets/Laura.png',
        name: 'Laura Nanits',
        title: 'UX Mentor',
      },
      {
        id: 'anh-dev-mentor',
        img: 'assets/Anh.png',
        name: 'Anh Vuong',
        title: 'Dev Mentor',
      },
      {
        id: 'donat-dev-mentor',
        img: 'assets/Donat.png',
        name: 'Donat Pllana',
        title: 'Dev Mentor',
      },
      {
        id: 'jackson-teaching-assistant',
        img: 'assets/Jackson.png',
        name: 'Jackson Chen',
        title: 'Dev Teaching Assistant',
      },
      {
        id: 'alvee-dev-mentor',
        img: 'assets/Alvee.png',
        name: 'Alvee Akand',
        title: 'Dev Mentor',
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
        {memberPngs.map(({ person: id, img, name, title, subtitle }, idx) => (
          <Grid className={memberCard} key={`${id} - ${idx}`}>
            <>
              <img src={img} alt="team member" />
              <p>{name}</p>
              <p>{title}</p>
              <p>{subtitle}</p>
            </>
          </Grid>
        ))}
      </Grid>
    );
  })();

  const imagesFour = (() => {
    const memberPngs = [
      {
        id: 'heatherlee-board-chair',
        img: 'assets/Heatherlee.png',
        name: 'Heatherlee Nguyen',
        title: 'Board Chair',
      },
      {
        id: 'nefertiti-vice-chair',
        img: 'assets/Nefertiti.png',
        name: 'Nefertiti Stokes',
        title: 'Vice Chair',
      },
      {
        id: 'megan-treasurer',
        img: 'assets/Megan.png',
        name: 'Megan Jeffers',
        title: 'Treasurer',
      },
    ];

    return (
      <Grid item className={photoContainer}>
        {memberPngs.map(({ person: id, img, name, title, subtitle }, idx) => (
          <Grid className={memberCard} key={`${id} - ${idx}`}>
            <>
              <img src={img} alt="team member" />
              <p>{name}</p>
              <p>{title}</p>
              <p>{subtitle}</p>
            </>
          </Grid>
        ))}
      </Grid>
    );
  })();

  return (
    <>
      <PhotoSection {...{ text: 'AppDev Volunteer Team', images }} />
      <PhotoSection {...{ text: 'Operations Team', imagesTwo }} />
      <PhotoSection {...{ text: 'Mentors', imagesThree }} />
      <PhotoSection {...{ text: 'Board of Directors', imagesFour }} />
    </>
  );
};

export default WhoWeAre;
