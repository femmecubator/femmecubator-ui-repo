import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import errorIllustration from '../../assets/images/errorIllustration.svg';
import Button from '@material-ui/core/Button';
import { Typography, Grid } from '@material-ui/core';
const errorStyles = makeStyles(() => ({
  centered: {
    margin: '0 auto',
    width: '100%',
    marginTop: '5%',
    '@media (max-width: 680px)': {
      marginTop: '15%',
      width: '90%',
    },
  },
  gridCenter: {
    textAlign: 'center',
  },
  errorText: {
    fontFamily: 'Open Sans, sans-serif',
    fontWeight: '700',
    color: '#400CCC',
    fontSize: '1.75rem',
    marginBottom: '1.5rem',
  },
  normalText: {
    fontFamily: 'Open Sans, sans-serif',
    fontWeight: '400',
    fontSize: '1.3rem',
    marginBottom: '1.5rem',
  },
  successIcon: {
    width: '8.5rem',
    height: '2.85rem',
    fontFamily: 'Open Sans, sans-serif',
    backgroundColor: '#026FE4',
    color: '#fff',
    fontWeight: '600',
  },
  image: {
    width: '20%',
    '@media (max-width: 680px)': {
      width: '30%',
    },
  },
}));

const gutterBottom = true;
function ErrorFallback() {
  const {
    image,
    errorText,
    normalText,
    successIcon,
    gridCenter,
    centered,
  } = errorStyles();
  const { reload } = window.location;
  const altText = 'Working Woman on her desk looking a bit tired';
  return (
    <Grid item xs={12} className={gridCenter}>
      <div className={centered}>
        <img
          {...{
            'data-testid': 'errorIllustration',
            className: image,
            src: errorIllustration,
            alt: altText,
          }}
        />
        <Typography {...{ className: errorText, variant: 'h2', gutterBottom }}>
          We're having trouble loading this page.
        </Typography>
        <Typography
          {...{
            variant: 'subtitle1',
            component: 'p',
            gutterBottom,
            className: normalText,
          }}
        >
          Try again or do a quick reset.
        </Typography>
        <Button
          data-testid="reloadButton"
          {...{
            variant: 'contained',
            className: successIcon,
            onClick: reload.bind(window.location),
          }}
        >
          Try Again
        </Button>
      </div>
    </Grid>
  );
}

export default ErrorFallback;
