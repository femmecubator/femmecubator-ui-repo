import React, { useEffect } from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import useStyles from './Settings.style';
import { Button, TextField } from '@material-ui/core';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import isEmpty from 'lodash/isEmpty';

const AccountInfo = () => {
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
  } = classes;

  const [disabledInputs, setDisableInputs] = React.useState(true);

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

  const { register, handleSubmit, errors, setError, setValue } = useForm({
    revalidateMode: 'onChange',
    resolver: yupResolver(personalInfoSchema),
  });

  const onSubmit = async data => {
    try {
      console.log(data);
      setDisableInputs(true);
    } catch ({ data: { message } }) {
      setError('email', {
        type: 'manual',
        message,
      });
    }
  };

  useEffect(() => {
    setValue('email', 'samcc@gmail.com');
    setValue('firstName', 'Sam');
    setValue('lastName', 'Cruz');
    setValue('jobTitle', 'UX Designer');
  }, [setValue]);

  return (
    <div className={accountInfoWrapper}>
      <div className={profile}>
        <div className={mentorName}>SC</div>
        <div>
          <h3 className={mentorFullName}>Sam Cruz</h3>
          <p className={mentorProfession}>UX Designer</p>
        </div>
      </div>
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
            // value={email}
            // onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div className={email_password}>
          <h4>First Name</h4>
          {/* <p>Sam</p> */}
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
          {/* <p>Cruz</p> */}
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
          {/* <p>UX Designer</p> */}
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
  );
};

export default AccountInfo;
