import React, { useState } from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import useStyles from './Settings.style';
import { Button, TextField } from '@material-ui/core';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import isEmpty from 'lodash/isEmpty';

const Security = () => {
  const isMobile = useMediaQuery('(max-width:580px)');
  const classes = useStyles({ isMobile });
  const { settingsButton, inputGroups, securityFields, disabledInputsBG } =
    classes;

  const [disabledInputs, setDisableInputs] = useState(false);

  const MIN_8CHARS = 'Must be more than 8 characters';
  const INVALID_PASSWORD_FORMAT = 'Invalid password format: A-z 0-9 @$!%*?%';

  const passwordSchema = yup.object().shape({
    currentPassword: yup.string().required('Current Password is required'),
    newPassword: yup
      .string()
      .required('New Password is required')
      .min(8, MIN_8CHARS)
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        INVALID_PASSWORD_FORMAT
      ),
    retypePassword: yup
      .string()
      .required('Password is required')
      .min(8, MIN_8CHARS)
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        INVALID_PASSWORD_FORMAT
      )
      .oneOf([yup.ref('newPassword'), null], 'Passwords do not match.'),
  });
  const { register, handleSubmit, errors, setError } = useForm({
    revalidateMode: 'onChange',
    resolver: yupResolver(passwordSchema),
  });

  const onSubmit = async data => {
    try {
      console.log(data);
    } catch ({ data: { message } }) {
      setError('email', {
        type: 'manual',
        message,
      });
    }
  };

  return (
    <>
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <div className={inputGroups}>
          <h4>Current Password</h4>
          <TextField
            {...{
              id: 'currentPassword',
              className: `${
                disabledInputs
                  ? `${securityFields} ${disabledInputsBG}`
                  : securityFields
              }`,
              variant: 'outlined',
              inputProps: { 'data-testid': 'currentPassword' },
              name: 'currentPassword',
              type: 'password',
              autoFocus: true,
              inputRef: register,
              disabled: disabledInputs,
              error: !isEmpty(errors.currentPassword),
              helperText:
                errors.currentPassword && errors.currentPassword.message,
            }}
          />
        </div>

        <div className={inputGroups}>
          <h4>New Password</h4>
          <TextField
            {...{
              id: 'newPassword',
              inputProps: { 'data-testid': 'newPassword' },
              inputRef: register,
              name: 'newPassword',
              type: 'password',
              variant: 'outlined',
              disabled: disabledInputs,
              className: `${
                disabledInputs
                  ? `${securityFields} ${disabledInputsBG}`
                  : securityFields
              }`,
              error: !isEmpty(errors.newPassword),
              helperText: errors.newPassword && errors.newPassword.message,
            }}
          />
        </div>

        <div className={inputGroups}>
          <h4>Retype Password</h4>
          <TextField
            {...{
              id: 'retypePassword',
              inputProps: { 'data-testid': 'retypePassword' },
              inputRef: register,
              type: 'password',
              name: 'retypePassword',
              variant: 'outlined',
              className: `${
                disabledInputs
                  ? `${securityFields} ${disabledInputsBG}`
                  : securityFields
              }`,
              disabled: disabledInputs,
              error: !isEmpty(errors.retypePassword),
              helperText:
                errors.retypePassword && errors.retypePassword.message,
            }}
          />
        </div>
        {/* <Button
          className={settingsButton}
          onClick={() => setDisableInputs(false)}
        >
          Edit
        </Button> */}
        <Button
          {...{
            'data-testid': 'submit',
            type: 'submit',
            variant: 'contained',
            color: 'primary',
            className: settingsButton,
          }}
          style={{ color: 'white' }}
        >
          Save
        </Button>
      </form>
    </>
  );
};

export default Security;
