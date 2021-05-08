import React, { useState } from 'react';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import ErrorOutline from '@material-ui/icons/ErrorTwoTone';

import TimeSlotModal from './TimeslotModal/TimeSlotModal';

import { makeStyles } from '@material-ui/core/styles';

const color = {
  white: '#ffffff',
  primaryBlue: '#026FE4',
  gray: '#495057',
  black: '#000000',
  icon: '#E50000',
  iconBackground: '#FFEAEA',
};

const useStyles = makeStyles(() => ({
  root: {
    width: '320px',
    height: '503px',
    borderRadius: '8px',
    fontFamily: 'Open Sans, sans-serif',
    fontWeight: '600',
    padding: '20px 10px',
  },
  content: {
    color: color.black,
    fontFamily: 'Open Sans, sans-serif',
    fontWeight: '700',
    fontSize: '15px',
    width: '180px',
    lineHeight: '30px',
    padding: '60px 65px',
    textAlign: 'center',
  },
  h2: {
    fontFamily: 'Open Sans, sans-serif',
    fontWeight: '900',
    fontSize: '20px',
    lineHeight: '38px',
  },
  textFirst: {
    fontFamily: 'Open Sans, sans-serif',
    fontWeight: '900',
    fontSize: '14px',
    lineHeight: '20px',

    color: color.gray,
    display: 'flex',
  },
  addButton: {
    width: 'fit-content',
    height: '40px',
    marginTop: '20%',
    fontFamily: 'Open Sans, sans-serif',
    fontSize: '18px',
    padding: '3.5px 21px',
    backgroundColor: color.white,
    color: color.primaryBlue,
    borderRadius: '4px',
    border: '1px solid #026FE4',
  },
  largeIcon: {
    width: '70px',
    height: '70px',
    // color: color.icon,
    // backgroundColor: color.iconBackground,
  },
}));

const InitialTimeslots = () => {
  const { root, h2, content, textFirst, addButton, largeIcon } = useStyles();

  const [openModal, setOpenModal] = useState(false);
  const handleOpen = () => {
    setOpenModal(true);
  };
  const handleClose = () => {
    setOpenModal(false);
  };

  return (
    <Card className={root} variant="outlined">
      <CardHeader className={h2} title="Timeslots" />
      <CardContent className={content}>
        <ErrorOutline className={largeIcon} color="secondary" />
        <Typography
          variant="body2"
          color="textSecondary"
          component="p"
          className={textFirst}
        >
          You haven’t set up time slots yet.
        </Typography>
        <button className={addButton} onClick={handleOpen}>
          + Add
        </button>
      </CardContent>
      {openModal ? <TimeSlotModal handleClose={handleClose} /> : null}
    </Card>
  );
};

export default InitialTimeslots;
