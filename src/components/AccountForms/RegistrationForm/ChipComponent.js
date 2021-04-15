import React, { useEffect } from 'react';
import useStyles from './ChipComponent.styles';
import './registration.css';
import { InputLabel, Chip } from '@material-ui/core';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

const ChipComponent = ({ register, unregister, watch, setValue, errors }) => {
  const classes = useStyles();
  const watchRole = watch('role_id', '');
  const handleClick = (val) =>
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
