import React from 'react';
import { makeStyles } from '@material-ui/core';

import Directory from '../components/Directory/index';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
  },
}));

const Mentors = () => {
  const classes = useStyles();
  return (
    <main className={classes.root}>
      <Directory />
    </main>
  );
};

export default Mentors;
