import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import isEmpty from 'lodash/isEmpty';
import { API_PATH } from 'utils/constants';
import request from 'utils/axiosConfig';
import { Button, TextField, Typography } from '@material-ui/core';
import useStyles from './ForgotPassword.styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import FemmecubatorLogoFull from '../../assets/images/FemmecubatorLogoFull.svg';

const MIN_CHARS = 'Must be more than 1 character';

const ForgotSchema = yup.object().shape({
  email: yup
    .string()
    .required('Email is required')
    .min(2, MIN_CHARS)
    .matches(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      'Invalid email format'
    ),
});

const ForgotScreen = ({ setEmailSent, setOpenBackdrop, mockOnSubmit }) => {
  const isMobile = useMediaQuery('(max-width:767px)');
  const classes = useStyles({ isMobile });
  const {
    root,
    logo,
    field,
    forgotContainer,
    dialogTitle,
    dialogText,
    actionButton,
    actionButtonContained,
    marginTopNm,
    marginBottomMd,
    normalWidth,
  } = classes;

  const { register, handleSubmit, errors, setError } = useForm({
    revalidateMode: 'onChange',
    resolver: yupResolver(ForgotSchema),
  });

  const onSubmit = async data => {
    setOpenBackdrop(true);
    const body = {
      email: data.email,
    };
    try {
      const response = await request.post(API_PATH.FORGOT_PASSWORD, body);
      if (response.data.message === 'Success') {
        setOpenBackdrop(false);
        setEmailSent(true);
      } else {
        throw error;
      }
    } catch (err) {
      setOpenBackdrop(false);
      if (err.data)
        setError('email', {
          type: 'manual',
          message: err.data.message,
        });
      else
        setError('email', {
          type: 'manual',
          message: 'Something went wrong',
        });
    }
  };

  return (
    <div className={root}>
      <form
        className={forgotContainer}
        noValidate
        onSubmit={handleSubmit(mockOnSubmit || onSubmit)}
      >
        <img
          className={`${logo} ${marginBottomMd} ${marginTopNm}`}
          src={FemmecubatorLogoFull}
          alt="Femmecubator logo"
        />
        <Typography>
          <h2 className={`${dialogTitle} ${normalWidth}`}>
            Did you forget your password?
          </h2>
          <p className={`${dialogText} ${normalWidth}`}>It's ok, it happens.</p>
          <p className={`${dialogText} ${normalWidth}`}>
            To reset your password, type in your account email below.
          </p>
        </Typography>
        <div className={field}>
          <TextField
            {...{
              id: 'email',
              className: classes.textField,
              InputProps: { inputProps: { 'data-testid': 'email' } },
              label: 'Email',
              variant: 'filled',
              inputRef: register,
              name: 'email',
              placeholder: 'Sam.Cruz@gmail.com',
              error: !isEmpty(errors.email),
              helperText: errors.email && errors.email.message,
            }}
          />
        </div>
        <Button
          {...{
            'data-testid': 'submit',
            type: 'submit',
            variant: 'contained',
            color: 'primary',
            className: `${actionButton} ${actionButtonContained}`,
          }}
        >
          RESET PASSWORD
        </Button>
      </form>
    </div>
  );
};

export default ForgotScreen;
