import React, { useState } from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import useStyles from './Settings.style';
import { Button, TextField, CircularProgress } from '@material-ui/core';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import isEmpty from 'lodash/isEmpty';
import { API_PATH } from 'utils/constants';
import jwt_decode from 'jwt-decode';
import { getTokenCookie } from 'utils/cookies';
import request from 'utils/axiosConfig';
import SnackBar from 'components/SnackBar';
import Backdrop from '@material-ui/core/Backdrop';

const Security = () => {
  const isMobile = useMediaQuery('(max-width:580px)');
  const classes = useStyles({ isMobile });
  const {
    settingsButton,
    inputGroups,
    securityFields,
    disabledInputsBG,
    backdrop,
  } = classes;

  const [disabledInputs, setDisableInputs] = useState(false);
  const [openSnackBar, setOpenSnackBar] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');
  const [responseMessageType, setResponseMessageType] = useState('');
  const [openBackdrop, setOpenBackdropt] = useState(false);

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
  const { register, handleSubmit, errors, setError, reset } = useForm({
    revalidateMode: 'onChange',
    resolver: yupResolver(passwordSchema),
  });

  const onSubmit = async data => {
    setOpenBackdropt(true);
    const { _id } = jwt_decode(getTokenCookie());
    const body = { ...data, _id };
    try {
      const response = await request.post(API_PATH.UPDATE_PASSWORD, body);
      if (response.data.message === 'Success') {
        setOpenBackdropt(false);
        setOpenSnackBar(true);
        setResponseMessage('Password updated successfully');
        setResponseMessageType('success');
        reset();
      }
    } catch (err) {
      setOpenBackdropt(false);
      setOpenSnackBar(true);
      setResponseMessage(err.data.message);
      setResponseMessageType('error');
    }
  };

  return (
    <>
      <Backdrop className={backdrop} open={openBackdrop}>
        <CircularProgress color="inherit" />
      </Backdrop>
      <SnackBar
        openSnackBar={openSnackBar}
        setOpenSnackBar={setOpenSnackBar}
        responseMessage={responseMessage}
        responseMessageType={responseMessageType}
      />
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
