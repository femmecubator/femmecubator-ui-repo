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
  Grid,
} from '@material-ui/core';
import DateFnsUtils from '@date-io/moment';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
// import PropTypes from 'prop-types';
import Moment from 'moment';
const moment = require('moment');
moment.suppressDeprecationWarnings = true;

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
    register('end-time');
    return () => unregister('end-time');
  }, [register, unregister]);

  const selectHour = array => {
    return array.map(hour => (
      <MenuItem key={hour} value={hour}>
        {hour}
      </MenuItem>
    ));
  };

  const [selectedStartDate, setSelectedStartDate] = useState(
    Moment(new Date()).format('MM/DD/YYYY')
  );
  const handleStartChange = data => {
    console.log('selected', data.format('L'));
    setSelectedStartDate(data.format('L'));
    console.log('after set', selectedStartDate);
  };

  const [selectedEndDate, setSelectedEndDate] = useState(
    Moment(new Date()).format('MM/DD/YYYY')
  );
  const handleEndChange = data => {
    console.log(data.format('L'));
    setSelectedEndDate(data.format('L'));
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
              htmlFor="end-time"
              id="end-time"
              className={startEndTimeLabel}
            >
              {selectedEnd ? '6:00 PM' : ''}
            </InputLabel>

            <Select
              className={selectInput}
              labelId="end-time"
              name="end-time"
              defaultValue=""
              onChange={e => {
                setValue('end-time', e.target.value, { shouldDirty: true });
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
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Grid container justify="space-around">
            <KeyboardDatePicker
              {...{
                disableToolbar: true,
                id: 'start-date',
                variant: 'inline',
                format: 'MM/dd/yyyy',
                margin: 'normal',
                label: 'start-date',
                onChange: handleStartChange,
                KeyboardButtonProps: {
                  'aria-label': 'change date',
                },
                // className: titleInput,
                name: 'start-date',
                inputRef: register,
                value: selectedStartDate,
              }}
            />
          </Grid>
        </MuiPickersUtilsProvider>

        <Typography className={h4Heading} variant="h4">
          End Date
        </Typography>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Grid container justify="space-around">
            <KeyboardDatePicker
              {...{
                disableToolbar: true,
                id: 'end-date',
                variant: 'inline',
                format: 'MM/dd/yyyy',
                margin: 'normal',
                label: 'end-date',
                onChange: handleEndChange,
                KeyboardButtonProps: {
                  'aria-label': 'change date',
                },
                // className: titleInput,
                name: 'end-date',
                inputRef: register,
                value: selectedEndDate,
              }}
            />
          </Grid>
        </MuiPickersUtilsProvider>
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
