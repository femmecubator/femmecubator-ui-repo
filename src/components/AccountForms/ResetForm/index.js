import React, { useContext, useState } from 'react';
import SchoolIcon from '@material-ui/icons/School';
import useStyles from './ResetForm.styles';
import Paper from '@material-ui/core/Paper';
import {
  Typography,
  TextField,
  Button,
  Grid,
  InputAdornment,
} from '@material-ui/core';
import { useForm } from 'react-hook-form';
import { Link, Redirect, useHistory } from 'react-router-dom';
import { GlobalContext } from 'context/global';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import isEmpty from 'lodash/isEmpty';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';
import request from 'utils/axiosConfig';
import { API_PATH } from 'utils/constants';
import { updateAuth } from 'context/actionCreators';
import { event } from 'react-ga';

const FORM_TITLE = 'Reset Password';
const MIN_8CHARS = 'Must be more than 8 characters';

const ResetSchema = yup.object().shape({
  newPassword: yup
    .string()
    .required('Password is required')
    .min(8, MIN_8CHARS)
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      'Invalid password: (A-z 0-9 @$!%*?%)'
    ),
  retypePassword: yup
    .string()
    .required('Password is required')
    .min(8, MIN_8CHARS)
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      'Invalid password: (A-z 0-9 @$!%*?%)'
    ),
});

const ResetForm = () => {
  const classes = useStyles();
  const { register, handleSubmit, errors } = useForm({
    reValidateMode: 'onChange',
    resolver: yupResolver(ResetSchema),
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showRetype, setShowRetype] = useState(false);

  const onSubmit = (data) => {
    console.log(data);
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
    console.log(showPassword);
  };

  const handleClickShowRetypePassword = () => {
    setShowRetype(!showRetype);
    console.log(showRetype);
  };

  let content = (
    <div className={classes.root}>
      <Paper className={classes.paperContainer}>
        <div className={classes.resetFormContainer}>
          <div className="reset-form">
            <Typography variant="h2" className={classes.formTitle}>
              {FORM_TITLE}
            </Typography>
            <form
              className={classes.resetForm}
              onSubmit={handleSubmit(onSubmit)}
            >
              <div>
                <TextField
                  {...{
                    id: 'new password',
                    className: classes.resetInput,
                    label: 'New Password',
                    variant: 'outlined',
                    name: 'newPassword',
                    inputRef: register,
                    type: showPassword ? 'text' : 'password',
                    error: !isEmpty(errors.newPassword),
                    helperText:
                      errors.newPassword && errors.newPassword.message,
                    InputProps: {
                      inputProps: { 'data-testid': 'password' },
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            {...{
                              'aria-label': 'toggle password visibility',
                              edge: 'end',
                              onClick: handleClickShowPassword,
                            }}
                          >
                            {showPassword ? <Visibility /> : <VisibilityOff />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    },
                  }}
                />

                <TextField
                  {...{
                    id: 'retype password',
                    className: classes.resetInput,
                    label: 'Retype Password',
                    variant: 'outlined',
                    name: 'retypePassword',
                    inputRef: register,
                    type: showRetype ? 'text' : 'password',
                    error: !isEmpty(errors.retypePassword),
                    helperText:
                      errors.retypePassword && errors.retypePassword.message,
                    InputProps: {
                      inputProps: { 'data-testid': 'password' },
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            {...{
                              'aria-label': 'toggle password visibility',
                              edge: 'end',
                              onClick: handleClickShowRetypePassword,
                            }}
                          >
                            {showRetype ? <Visibility /> : <VisibilityOff />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    },
                  }}
                />
              </div>
              <div>
                <Button
                  type="submit"
                  className={`${classes.button} ${classes.confirm}`}
                >
                  CONFIRM
                </Button>
              </div>
            </form>
          </div>
        </div>
      </Paper>
    </div>
  );

  return content;
};

export default ResetForm;
