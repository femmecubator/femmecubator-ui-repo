import React, { useEffect, useState } from 'react';
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
import SnackBar from 'components/SnackBar';
import Backdrop from '@material-ui/core/Backdrop';
import request from 'utils/axiosConfig';

const AccountInfo = ({ profileData }) => {
  const isMobile = useMediaQuery('(max-width:767px)');
  const classes = useStyles({ isMobile });
  const {
    accountInfoWrapper,
    profile,
    mentorName,
    mentorFullName,
    mentorProfession,
    batch,
    email_password,
    settingsButton,
    securityFields,
    personalInfoDisabled,
    backdrop,
  } = classes;

  const [disabledInputs, setDisableInputs] = React.useState(true);
  const [openSnackBar, setOpenSnackBar] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');
  const [responseMessageType, setResponseMessageType] = useState('');
  const [openBackdrop, setOpenBackdropt] = useState(false);

  const ONLY_LETTERS = 'Must only contain letters';
  const MIN_CHARS = 'Must be more than 1 character';
  const ONLY_LETTERS_WS = 'Must only contain letters and spaces';

  const personalInfoSchema = yup.object().shape({
    email: yup
      .string()
      .required('Email is required')
      .min(2, MIN_CHARS)
      .matches(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        'Invalid email format'
      ),
    firstName: yup
      .string()
      .required('First name is required')
      .min(2, MIN_CHARS)
      .matches(/^[a-zA-Z]+$/, ONLY_LETTERS),
    lastName: yup
      .string()
      .required('Last name is required')
      .min(2, MIN_CHARS)
      .matches(/^[a-zA-Z]+$/, ONLY_LETTERS),
    jobTitle: yup
      .string()
      .required('Job Title is required')
      .min(2, MIN_CHARS)
      .matches(/^[a-zA-Z\s]*$/, ONLY_LETTERS_WS),
  });

  const { register, handleSubmit, errors, setValue } = useForm({
    revalidateMode: 'onChange',
    resolver: yupResolver(personalInfoSchema),
  });

  const onSubmit = async data => {
    setOpenBackdropt(true);
    const { _id } = jwt_decode(getTokenCookie());
    const body = { ...data, _id };
    try {
      const response = await request.post(API_PATH.UPDATE_PROFILE, body);
      if (response.data.message === 'Success') {
        setOpenBackdropt(false);
        setOpenSnackBar(true);
        setResponseMessage('Account info updated successfully');
        setResponseMessageType('success');
        setDisableInputs(true);
      }
    } catch (err) {
      setOpenBackdropt(false);
      setOpenSnackBar(true);
      setResponseMessage(err.data.message);
      setResponseMessageType('error');
    }
  };

  useEffect(() => {
    if (profileData) {
      const { email, firstName, lastName, title } = profileData;
      setValue('email', email);
      setValue('firstName', firstName);
      setValue('lastName', lastName);
      setValue('jobTitle', title);
    }
  }, [setValue, profileData]);

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
      <div className={accountInfoWrapper}>
        <div className={profile}>
          <div className={mentorName}>SC</div>
          <div>
            <h3 className={mentorFullName}>
              {profileData ? profileData.firstName : ''}{' '}
              {profileData ? profileData.lastName : ''}
            </h3>
            <p className={mentorProfession}>
              {profileData ? profileData.title : ''}
            </p>
          </div>
        </div>
        {/* console.log(profileData.role_id) */}
        <div className={batch}>Mentor</div>
        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <div className={email_password}>
            <h4>Email</h4>
            <TextField
              {...{
                id: 'email',
                className: `${
                  disabledInputs
                    ? `${securityFields} ${personalInfoDisabled}`
                    : securityFields
                }`,
                variant: 'outlined',
                inputProps: { 'data-testid': 'email' },
                name: 'email',
                autoFocus: true,
                inputRef: register,
                disabled: disabledInputs,
                error: !isEmpty(errors.email),
                helperText: errors.email && errors.email.message,
              }}
            />
          </div>
          <div className={email_password}>
            <h4>First Name</h4>
            <TextField
              {...{
                id: 'firstName',
                className: `${
                  disabledInputs
                    ? `${securityFields} ${personalInfoDisabled}`
                    : securityFields
                }`,
                variant: 'outlined',
                inputProps: { 'data-testid': 'firstName' },
                name: 'firstName',
                autoFocus: true,
                inputRef: register,
                disabled: disabledInputs,
                error: !isEmpty(errors.firstName),
                helperText: errors.firstName && errors.firstName.message,
              }}
            />
          </div>
          <div className={email_password}>
            <h4>Last Name</h4>
            <TextField
              {...{
                id: 'lastName',
                className: `${
                  disabledInputs
                    ? `${securityFields} ${personalInfoDisabled}`
                    : securityFields
                }`,
                variant: 'outlined',
                inputProps: { 'data-testid': 'lastName' },
                name: 'lastName',
                autoFocus: true,
                inputRef: register,
                disabled: disabledInputs,
                error: !isEmpty(errors.lastName),
                helperText: errors.lastName && errors.lastName.message,
              }}
            />
          </div>
          <div className={email_password}>
            <h4>Job Title</h4>
            <TextField
              {...{
                id: 'jobTitle',
                className: `${
                  disabledInputs
                    ? `${securityFields} ${personalInfoDisabled}`
                    : securityFields
                }`,
                variant: 'outlined',
                inputProps: { 'data-testid': 'jobTitle' },
                name: 'jobTitle',
                autoFocus: true,
                inputRef: register,
                disabled: disabledInputs,
                error: !isEmpty(errors.jobTitle),
                helperText: errors.jobTitle && errors.jobTitle.message,
              }}
            />
          </div>
          {disabledInputs ? (
            <Button
              className={settingsButton}
              onClick={() => setDisableInputs(false)}
            >
              Edit
            </Button>
          ) : null}
          {!disabledInputs ? (
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
          ) : null}
        </form>
      </div>
    </>
  );
};

export default AccountInfo;
