import React from 'react';
import { useForm } from 'react-hook-form';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import useStyles from './MentorSearchBar.styles';

const MentorSearchBar = () => {
  // const classes = useStyles();
  const { searchBar, searchBtn, searchInput } = useStyles();
  const { register, handleSubmit } = useForm();
  // eslint-disable-next-line no-console
  const onSubmit = (data) => console.log('IT WORKED', data);

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
        margin="normal"
        variant="outlined"
        name="search"
        placeholder="Name, Title, Keywords"
        className={searchInput}
      />
      <Button type="submit" variant="contained" className={searchBtn}>
        Search
      </Button>
    </form>
  );
};

const searchSamples = ['Coding', 'UI/UX', 'Web Development', 'Web Design'];

export default MentorSearchBar;
