import React from 'react';
import TextField from '@material-ui/core/TextField';
// import Autocomplete from '@material-ui/lab/Autocomplete';
const MentorSearchBar = () => {
  return (
    <div>
      <TextField label="Search" margin="normal" variant="outlined" />
    </div>
  );
};

const searchSamples = ['Coding', 'UI/UX', 'Web Development', 'Web Design'];

export default MentorSearchBar;
