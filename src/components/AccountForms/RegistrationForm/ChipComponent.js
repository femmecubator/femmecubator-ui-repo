import React, { useEffect } from 'react';
import useStyles from './RegistrationForm.styles';
import './registration.css';
import { InputLabel, Chip } from '@material-ui/core';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

const ChipComponent = ({ register, unregister, watch, setValue, errors }) => {
  const classes = useStyles();
  const watchRole = watch('role_id', '');
  const handleClick =
    ('onClick',
    (event) => {
      const id = event.currentTarget.id;
      setValue('role_id', id, {
        shouldDirty: true,
        shouldValidate: true,
      });
    });
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
                watchRole == 1 ? classes.chipStyle : classes.chipOutline,
              size: 'small',
              clickable: true,
              id: '1',
              label: 'Mentee',
              variant: 'outlined',
              name: 'role_id',
              onClick: handleClick,
              icon:
                watchRole == 1 ? (
                  <CheckCircleOutlineIcon className={classes.checkIcon} />
                ) : null,
            }}
          />
          <Chip
            {...{
              className:
                watchRole == 2 ? classes.chipStyle : classes.chipOutline,
              size: 'small',
              clickable: true,
              id: '2',
              label: 'Mentor',
              name: 'role_id',
              variant: 'outlined',
              onClick: handleClick,
              icon:
                watchRole == 2 ? (
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
