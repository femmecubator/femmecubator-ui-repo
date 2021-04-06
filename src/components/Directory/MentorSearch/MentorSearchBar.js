import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import useStyles from './MentorSearchBar.styles';

const MentorSearchBar = () => {
  // const classes = useStyles();
  const { searchBar, searchBtn } = useStyles();
  return (
    <div className={searchBar} label="search">
      <TextField label="Search" margin="normal" variant="outlined" />
      <Button type="submit" variant="contained" className={searchBtn}>
        Search
      </Button>
    </div>
  );
};

const searchSamples = ['Coding', 'UI/UX', 'Web Development', 'Web Design'];

export default MentorSearchBar;
