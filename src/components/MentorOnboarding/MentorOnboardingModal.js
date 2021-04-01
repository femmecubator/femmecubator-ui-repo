import React, { useState } from 'react';
import { Modal, TextField, Button, useMediaQuery } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import useStyles from './MentorOnboardingModal.styles';

const MentorOnboardingModal = () => {
  const isMobile = useMediaQuery('(max-width:1023px)');
  const styles = useStyles({
    isMobile: isMobile,
  });
  // // for dropdown currency
  // const [currency, setCurrency] = React.useState('EUR');
  // const handleChange = (event) => {
  //   setCurrency(event.target.value);
  // };

  // for select
  const [age, setAge] = React.useState('');

  const handleAge = (event) => {
    setAge(event.target.value);
  };

  const [modal, setModal] = useState(true);

  const openCloseModal = () => {
    setModal(!modal);
  };

  const body = (
    <form className={styles.root} noValidate autoComplete="off">
      <div className={styles.modal}>
        <div align="center">
          <h2 className={styles.h2}>Almost there!</h2>
          <h4 className={styles.container}>
            We'll need to confirm a few things about you.
          </h4>
        </div>
        <h4 className={styles.container}>Add a Bio (128 char)</h4>
        <TextField
          id="filled-multiline-flexible"
          label="Your Bio"
          multiline
          rowsMax={3}
          variant="filled"
          className={styles.textField}
          placeholder="Narwhal prism snackwave pop-up, wayfarers kinfolk asymmetrical poke. Flexitarian cliche williamsburg drinking vinegar shabby chic slow-carb pug semiotics pop-up. Cliche williamsburg drinking vinegar shabby."
        />
        <br />
        <h4 className={styles.container}>
          Skills (eg. tech stack, anything you can offer help with.)
        </h4>
        <TextField
          id="filled-basic"
          label="React,js, Node.js, Ruby on Rails"
          variant="filled"
          // className={styles.textField}
        />
        <br />
        <h4 className={styles.container}>Phone</h4>
        <TextField
          id="filled-basic"
          label="718-777-4545"
          variant="filled"
          // className={styles.textField}
        />
        <br />
        <h4 className={styles.container}>Your Time Zone</h4>
        <FormControl variant="filled" className={styles.formControl}>
          <InputLabel id="demo-simple-select-filled-label">Age</InputLabel>
          <Select
            labelId="demo-simple-select-filled-label"
            id="demo-simple-select-filled"
            value={age}
            onChange={handleAge}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        {/* <TextField
          id="filled-select-currency"
          label="Select"
          value={currency}
          onChange={handleChange}
          helperText="Please select your currency"
          variant="filled"
          // className={styles.textField}
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField> */}
        <br />
        <h4 className={styles.container}>Add a google meet:</h4>
        <TextField
          id="filled-basic"
          label="meet.google.com/oer-yjhx-sia"
          variant="filled"
          // className={styles.textField}
        />
        <Button className={styles.buttonModal}>I'M GOOD TO GO!</Button>
        {/* <Button onClick={() => openCloseModal()}>CANCEL</Button> */}
      </div>
    </form>
  );

  return (
    <div className={styles.container}>
      {/* <Button onClick={() => openCloseModal()}>Open Modal</Button> */}
      <Modal open={modal} onClose={openCloseModal}>
        {body}
      </Modal>
    </div>
  );
};

export default MentorOnboardingModal;
