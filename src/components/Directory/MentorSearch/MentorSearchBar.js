import React from 'react';
import { useForm } from 'react-hook-form';
import { TextField, InputAdornment, useMediaQuery } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import useStyles from './MentorSearchBar.styles';

const MentorSearchBar = ({ setQuery }) => {
  const isMobile = useMediaQuery('(max-width:769px)');
  const { searchBar, searchBtn, searchInput } = useStyles({ isMobile });
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    setQuery(data.search);
  };

  return (
    <form
      {...{
        className: searchBar,
        label: 'search',
        onSubmit: handleSubmit(onSubmit),
      }}
    >
      <TextField
        {...{
          id: 'search',
          label: 'Search',
          inputRef: register,
          variant: 'outlined',
          name: 'search',
          margin: 'dense',
          placeholder: 'Name, Title, Keywords',
          className: searchInput,
          InputProps: {
            startAdornment: isMobile ? null : (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          },
        }}
      />

      <Button
        {...{ type: 'submit', variant: 'contained', className: searchBtn }}
      >
        Search
      </Button>
    </form>
  );
};

export default MentorSearchBar;
