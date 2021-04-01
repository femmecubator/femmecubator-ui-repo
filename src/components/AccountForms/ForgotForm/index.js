import React, { useState } from 'react';
import useStyles from './ForgotForm.styles.js';
import Paper from '@material-ui/core/Paper';
import { useForm } from 'react-hook-form';
import { API_PATH } from 'utils/constants';
import request from 'utils/axiosConfig';
import { Typography, TextField, Button } from '@material-ui/core';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import isEmpty from 'lodash/isEmpty';

const FORM_TITLE = 'Did you forget your password?';
const FORM_SUBTITLE = 'No sweat.';
const FORM_BODY =
  "We'll send you a link to reset if we have your email account on file.";
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

const ForgotForm = () => {
  const classes = useStyles();
  const [status, setStatus] = useState();

  const { register, handleSubmit, errors, setError } = useForm({
    reValidateMode: 'onChange',
    resolver: yupResolver(ForgotSchema),
  });

  const onSubmit = async (data) => {
    try {
      let res = await request.post(API_PATH.FORGOT, data);
      if (res.status === 200) setStatus('success');
    } catch ({ status, data: { err } }) {
      if (status === 404) {
        setError('email', {
          type: 'not found',
          message: err.message,
        });
      }
    }
  };

  let content = (
    <Paper className={classes.paperContainer}>
      <div className={classes.forgotFormContainer}>
        <div className="forgot-form">
          <Typography variant="h2" className={classes.formTitle}>
            {FORM_TITLE}
          </Typography>
          <Typography variant="body1" className={classes.formSubtitle}>
            {FORM_SUBTITLE}
          </Typography>
          <Typography variant="body1" className={classes.formSubtitle}>
            {FORM_BODY}
          </Typography>
          <form
            className={classes.forgotForm}
            onSubmit={handleSubmit(onSubmit)}
          >
            <div>
              <TextField
                {...{
                  id: 'email',
                  className: classes.forgotInput,
                  label: 'Email',
                  variant: 'outlined',
                  name: 'email',
                  inputRef: register,
                  error: !isEmpty(errors.email),
                  helperText: errors.email && errors.email.message,
                }}
              ></TextField>
            </div>
            <Button
              type="submit"
              className={`${classes.button} ${classes.confirm}`}
            >
              RESET PASSWORD
            </Button>
          </form>
        </div>
      </div>
    </Paper>
  );

  let success = (
    <Paper className={classes.paperContainer}>
      <div className={classes.forgotFormContainer}>
        <Typography variant="h2" className={classes.formTitle}>
          Success!
        </Typography>
      </div>
    </Paper>
  );

  return (
    <div className={classes.root}>
      {status === 'success' ? success : content}
    </div>
  );
};

export default ForgotForm;
