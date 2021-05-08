import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import {
  Modal,
  TextField,
  Select,
  MenuItem,
  Typography,
  FormControl,
  InputLabel,
} from '@material-ui/core';
// import DateFnsUtils from '@date-io/date-fns';
// import {
//   MuiPickersUtilsProvider,
//   KeyboardDatePicker,
// } from '@material-ui/pickers';
// import PropTypes from 'prop-types';

import hourArray from './hourArray';

import useStyles from './TimeSlotModal.styles';

const TimeSlotModal = ({ handleClose }) => {
  /* eslint-disable no-console */
  // console.log(handleClose);

  const {
    root,
    modal,
    h4Heading,
    selectInput,
    titleInput,
    buttonModal,
    heading,
    repeatEvery,
    buttonsDiv,
    startEndTimeDiv,
    startEndTimeLabel,
    // formHelperTxt,
  } = useStyles();

  const { unregister, register, handleSubmit, setValue } = useForm();
  const onSubmit = data => {
    /* eslint-disable no-console */
    console.log(data);
  };

  const [selected, setSelected] = useState(true);
  function handleSelect() {
    setSelected(false);
  }
  useEffect(() => {
    register('start-time');
    return () => unregister('start-time');
  }, [register, unregister]);

  const [selectedEnd, setSelectedEnd] = useState(true);
  function handleSelectEnd() {
    setSelectedEnd(false);
  }
  useEffect(() => {
    register('endtime');
    return () => unregister('endtime');
  }, [register, unregister]);

  const selectHour = array => {
    return array.map(hour => (
      <MenuItem key={hour} value={hour}>
        {hour}
      </MenuItem>
    ));
  };

  const formContent = (
    <form className={root} onSubmit={handleSubmit(onSubmit)}>
      <div className={modal}>
        <div align="center">
          <h2 className={heading}>Add a timeslot</h2>
        </div>
        <Typography className={h4Heading} variant="h4">
          Slot Title
        </Typography>
        <TextField
          {...{
            id: 'title',
            variant: 'outlined',
            className: titleInput,
            placeholder: 'Add title here.',
            name: 'title',
            type: 'text',
            inputRef: register,
          }}
        />
        <div className={startEndTimeDiv}>
          <Typography className={h4Heading} variant="h4">
            Start Time
          </Typography>
          <FormControl variant="outlined">
            <InputLabel
              className={startEndTimeLabel}
              shrink={false}
              htmlFor="start-time"
              id="start-time"
            >
              {selected ? '5:00 PM' : ''}
            </InputLabel>

            <Select
              className={selectInput}
              labelId="start-time"
              name="start-time"
              defaultValue=""
              onChange={e => {
                setValue('start-time', e.target.value, { shouldDirty: true });
                // console.log(e.target.value);
                handleSelect();
              }}
            >
              {selectHour(hourArray)}
            </Select>
          </FormControl>
        </div>
        <div className={startEndTimeDiv}>
          <Typography className={h4Heading} variant="h4">
            End Time
          </Typography>

          <FormControl variant="outlined">
            <InputLabel
              shrink={false}
              htmlFor="endtime"
              id="endtime"
              className={startEndTimeLabel}
            >
              {selectedEnd ? '6:00 PM' : ''}
            </InputLabel>

            <Select
              className={selectInput}
              labelId="endtime"
              name="endtime"
              defaultValue=""
              onChange={e => {
                setValue('endtime', e.target.value, { shouldDirty: true });
                // console.log(e.target.value);
                handleSelectEnd();
              }}
            >
              {selectHour(hourArray)}
            </Select>
          </FormControl>
        </div>

        <Typography className={h4Heading} variant="h4">
          Repeat Every
        </Typography>
        <section className={repeatEvery}></section>

        <Typography className={h4Heading} variant="h4">
          Start Date
        </Typography>
        {/* <MuiPickersUtilsProvider utils={DateFnsUtils}> */}
        {/* <Grid container justify="space-around"> */}
        {/* <KeyboardDatePicker
            disableToolbar
            variant="inline"
            format="MM/dd/yyyy"
            margin="normal"
            id="date-picker-inline"
            label="Date picker inline"
            // value={selectedDate}
            // onChange={handleDateChange}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          /> */}
        {/* </Grid> */}
        {/* </MuiPickersUtilsProvider> */}

        <Typography className={h4Heading} variant="h4">
          End Date
        </Typography>
        <div className={buttonsDiv}>
          <button className={buttonModal} onClick={handleClose}>
            CANCEL
          </button>
          <button type="submit" className={buttonModal}>
            SAVE
          </button>
        </div>
      </div>
    </form>
  );

  return (
    <div>
      <Modal open={true}>{formContent}</Modal>
    </div>
  );
};

export default TimeSlotModal;
