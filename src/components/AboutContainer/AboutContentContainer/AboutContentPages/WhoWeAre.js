import React from 'react';
import { Typography, Grid, useMediaQuery } from '@material-ui/core';
import useStyles from '../AboutContentContainer.styles';
// eslint-disable-next-line
import { PropTypes } from 'prop-types';
import { MOBILE_MEDIA_QUERY } from 'utils/constants';
//import ImageList from '@material-ui/core/ImageList';
//import ImageListItem from '@material-ui/core/ImageListItem';
//import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';

/* const PhotoSection = ({ text, images }) => {
  const { title, photosContainer } = useStyles();
  const isMobile = useMediaQuery(MOBILE_MEDIA_QUERY);

  return (
    <>
      <Typography {...{ variant: 'h2', className: title }}>{text}</Typography>
      <Grid
        container
        {...{
          spacing: 3,
          className: photosContainer,
          justify: isMobile ? 'center' : 'flex-start',
        }}
      >
        {images}
      </Grid>
    </>
  );
}; */

/* PhotoContainer.propTypes = {
  text: PropTypes.string,
  images: PropTypes.arrayOf(PropTypes.element),
}; */

const WhoWeAre = () => {
  const { title, photosContainer } = useStyles();
  const isMobile = useMediaQuery(MOBILE_MEDIA_QUERY);

  return (
    <>
      <Typography {...{ variant: 'h2', className: title }}>
        Volunteer Team
      </Typography>
      <Grid
        {...{
          container,
          dirction: 'row',
          className: photosContainer,
          justify: isMobile ? 'center' : 'flex-start',
          alignItems: 'flex-start',
          spacing: 3,
        }}
      >
        <GridList /* variant="standard" */ /* sx={{ width: 500, height: 450 }} */
        >
          {memberData.map(member => (
            <GridListTile key={member.img} item xs={4}>
              <img
                srcSet={`${member.img}?w=248&fit=crop&auto=format 1x,
                ${member.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={member.name}
                loading="lazy"
              />
              <GridListTileBar
                title={member.name}
                subtitle={member.title}
                position="below"
              />
            </GridListTile>
          ))}
        </GridList>
      </Grid>
    </>
  );
};

const memberData = [
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
];

//{
/* const WhoWeAre = () => {
  const { title, photosContainer } = useStyles();
  const isMobile = useMediaQuery(MOBILE_MEDIA_QUERY);

  return (
    <>
      <Typography {...{ variant: 'h2', className: title }}>
        Volunteer Team
      </Typography>
      <Grid
        {...{
          container,
          dirction: 'row',
          className: photosContainer,
          justify: isMobile ? 'center' : 'flex-start',
          alignItems: 'flex-start',
          spacing: 4,
        }}
      >
        <Grid item sm>
          <img src="./assets/Netaly.png" alt="Netaly"></img>
          <h4>Netaly Ramirez</h4>
          <p>Software Engineer</p>
        </Grid>
        <Grid item sm>
          <img src="./assets/Sherouk.png" alt="Sherouk"></img>
          <h4>Sherouk Omara</h4>
          <p>Software Engineer</p>
        </Grid>
      </Grid>
    </>
  );
}; */
//}

//{
/* const WhoWeAre = () => {
  const { photoContainer } = useStyles();

  const images = (() => {
    const result = [];
    const catPngs = [
      'assets/Netaly.png',
      'assets/Sherouk.png',
      'assets/Jackson.png',
      'assets/Karem.png',
      'assets/Carlo.png',
    ];

    for (let i = 0; i < 6; i++) {
      let catIdx = i % catPngs.length;
      result.push(
        <Grid key={i} item className={photoContainer}>
          <img src={catPngs[catIdx]} alt="team member" />
        </Grid>
      );
    }
    return result;
  })(); */
//}
//};

export default WhoWeAre;
