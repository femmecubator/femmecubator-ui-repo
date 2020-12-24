import { Link, makeStyles, Typography } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';

import React from 'react';

const useStyles = makeStyles(() => ({
  femmecubatorTitle: {
    flexGrow: 1,
    textAlign: 'left',
    fontFamily: 'Work Sans, sans-serif',
    fontWeight: 600,
    fontSize: '24px',
    color: '#FFFEFE',
    '@media (max-width: 350px)': {
      fontSize: '18px',
    },
  },
}));

const FemmecubatorLogo = () => {
  const { femmecubatorTitle } = useStyles();

  return (
    <>
      <Typography variant="h1" className={femmecubatorTitle}>
        <Link
          {...{
            component: RouterLink,
            to: '/',
            color: 'inherit',
            style: { textDecoration: 'none' },
          }}
        >
          Femmecubator
        </Link>
      </Typography>
    </>
  );
};

export default FemmecubatorLogo;
