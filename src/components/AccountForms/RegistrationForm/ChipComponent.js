import React, { useEffect } from 'react';
import './registration.css';
import { InputLabel, Chip, makeStyles } from '@material-ui/core';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

const useStyles = makeStyles(() => ({
  chipStyle: {
    height: 'auto',
    padding: '8px 12px',
    fontFamily: 'Open Sans, sans-serif',
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: '700',
    color: '#FFF',
    display: 'flex',
    flexDirection: 'row-reverse',
    width: 'auto',
    borderColor: ' #026FE4',
    borderRadius: '30px',
    backgroundColor: '#026FE4',
    '&:hover': {
      backgroundColor: '#026FE4 !important',
      borderColor: ' #026FE4',
    },
    '&:first-child': {
      marginRight: '5px',
    },
    '&:focus': {
      backgroundColor: '#026FE4 !important',
      borderColor: ' #026FE4',
    },
  },
  checkIcon: {
    color: '#FFF',
  },
  chipAlert: {
    display: 'flex',
    color: '#f44336',
    fontFamily: 'Roboto',
    fontSize: '12px',
    marginLeft: '5px',
  },
  chipDivStyle: {
    display: 'flex',
    padding: ' 21px 0px 10px 0px',
    marginLeft: '-5px',
  },
  chipOutline: {
    height: 'auto',
    padding: '8px 12px',
    border: '3px solid #757575',
    borderRadius: '30px',
    color: '#757575',
    fontFamily: 'Open Sans, sans-serif',
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: '700',
    '&:hover': {
      backgroundColor: '#026FE4 !important',
      color: 'white',
      borderColor: ' #026FE4',
    },
    '&:first-child': {
      marginRight: '5px',
    },
    '&:focus': {
      backgroundColor: '#026FE4 !important',
      borderColor: ' #026FE4',
    },
  },
}));

const ChipComponent = ({ register, unregister, watch, setValue, errors }) => {
  const classes = useStyles();
  const watchRole = watch('role_id', '');
  const handleClick = val =>
    setValue('role_id', val, { shouldDirty: true, shouldValidate: true });
  useEffect(() => {
    register('role_id');
    return () => unregister('role_id');
  }, [register, unregister]);
  return (
    <>
      <div className={classes.inputSpacing}>
        <InputLabel className={classes.inputLabel}>
          I want to sign up as a:{' '}
        </InputLabel>
        <div className={classes.chipDivStyle}>
          <Chip
            {...{
              className:
                watchRole === 0 ? classes.chipStyle : classes.chipOutline,
              size: 'small',
              label: 'Mentee',
              variant: 'outlined',
              onClick: () => handleClick(0),
              icon:
                watchRole === 0 ? (
                  <CheckCircleOutlineIcon className={classes.checkIcon} />
                ) : null,
            }}
          />
          <Chip
            {...{
              className:
                watchRole === 1 ? classes.chipStyle : classes.chipOutline,
              size: 'small',
              label: 'Mentor',
              variant: 'outlined',
              onClick: () => handleClick(1),
              icon:
                watchRole === 1 ? (
                  <CheckCircleOutlineIcon className={classes.checkIcon} />
                ) : null,
            }}
          />
        </div>
        <div className={classes.chipAlert} aria-label="select mentee or mentor">
          {errors.role_id?.message}
        </div>
        <br />
      </div>
    </>
  );
};

export default ChipComponent;
