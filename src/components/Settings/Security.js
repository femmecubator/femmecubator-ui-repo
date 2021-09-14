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

  const inputFieldsData = [
    {
      label: 'Current Password',
      name: 'currentPassword',
    },
    {
      label: 'New Password',
      name: 'newPassword',
    },
    {
      label: 'Retype Password',
      name: 'retypePassword',
    },
  ];

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
        {inputFieldsData && inputFieldsData.length > 0
          ? inputFieldsData.map((data, index) => {
              return (
                <div className={inputGroups} key={index}>
                  <h4>{data.label}</h4>
                  <TextField
                    {...{
                      id: `${data.name}`,
                      className: `${
                        disabledInputs
                          ? `${securityFields} ${disabledInputsBG}`
                          : securityFields
                      }`,
                      variant: 'outlined',
                      inputProps: { 'data-testid': `${data.name}` },
                      name: `${data.name}`,
                      type: 'password',
                      autoFocus: index === 0 ? true : false,
                      inputRef: register,
                      disabled: disabledInputs,
                      error: !isEmpty(errors[`${data.name}`]),
                      helperText:
                        errors[`${data.name}`] &&
                        errors[`${data.name}`].message,
                    }}
                  />
                </div>
              );
            })
          : null}
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
