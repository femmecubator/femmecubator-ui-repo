import { Link, Typography } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';
import useStyles from './Femmecubator.styles';
import React from 'react';

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
