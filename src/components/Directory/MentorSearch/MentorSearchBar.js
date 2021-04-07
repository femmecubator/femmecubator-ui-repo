import React from 'react';
import { useForm } from 'react-hook-form';
import { TextField, InputAdornment } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import useStyles from './MentorSearchBar.styles';

const MentorSearchBar = ({ searchQuery }) => {
  const { searchBar, searchBtn, searchInput } = useStyles();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    searchQuery(data.search);
  };

  return (
    <form
      className={searchBar}
      label="search"
      onSubmit={handleSubmit(onSubmit)}
    >
      <TextField
        id="search"
        label="Search"
        inputRef={register}
        variant="outlined"
        name="search"
        margin="dense"
        placeholder="Name, Title, Keywords"
        className={searchInput}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />

      <Button type="submit" variant="contained" className={searchBtn}>
        Search
      </Button>
    </form>
  );
};

const searchSamples = ['Coding', 'UI/UX', 'Web Development', 'Web Design'];

export default MentorSearchBar;
