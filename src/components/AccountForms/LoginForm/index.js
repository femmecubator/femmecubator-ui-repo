import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { API_PATH } from 'utils/constants';
import { event } from 'react-ga';
import request from 'utils/axiosConfig';
import isEmpty from 'lodash/isEmpty';
import { Link, useHistory, useLocation, Redirect } from 'react-router-dom';
import useStyles from './LoginForm.styles';
import {
  Paper,
  TextField,
  InputAdornment,
  IconButton,
  Button,
  useMediaQuery,
} from '@material-ui/core';
import { Visibility, VisibilityOff, Error } from '@material-ui/icons';
import { ReactComponent as LoginHero } from './assets/LoginHero.svg';
import Auth from 'utils/auth';

const FORM_TITLE = 'Welcome back!';

const emailRequirements = {
  required: 'Email is required',
  pattern: {
    value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: 'Invalid email format',
  },
};

const passwordRequirements = {
  required: 'Password is required',
};

const LoginForm = ({ testOnSubmit }) => {
  const [showPassword, setShowPassword] = useState(false);
  const { register, handleSubmit, errors, setError, clearErrors } = useForm();
  const isMobile = useMediaQuery('(max-width:1023px)');
  const history = useHistory();
  const { search } = useLocation();
  const timedOut = /true/i.test(new URLSearchParams(search).get('timedOut'));
  const classes = useStyles({
    isMobile: isMobile,
  });

  const onSubmit = async (credentials) => {
    try {
      await request.post(API_PATH.LOGIN, credentials);
      const inProduction = process.env.NODE_ENV === 'production';
      const options = {
        category: 'onSubmit',
        action: 'Logged In',
      };
      inProduction && event(options);
      history.push('/dashboard');
    } catch ({ status, data: { err } }) {
      if (status === 401 || status === 403) {
        setError('server', {
          type: 'auth',
          message: err,
        });
      }
    }
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleClickRegister = () => {
    history.push('/register');
  };

  const content = (
    <div className={classes.root}>
      <Paper classes={{ root: classes.paperContainer }}>
        <LoginHero
          className={classes.heroImage}
          aria-label="Woman working on computer"
        />
        <div className={classes.loginFormContainer}>
          {errors.server && (
            <div className={`${classes.alert} ${classes.error}`}>
              <Error />
              <p role="alert">{errors.server.message}</p>
            </div>
          )}
          {isEmpty(errors) && timedOut && (
            <div className={`${classes.alert} ${classes.timedOut}`}>
              <Error />
              <p role="alert">Your session has timed out.</p>
            </div>
          )}
          <h2 className={classes.formTitle}>{FORM_TITLE}</h2>
          <form
            className={classes.loginForm}
            onSubmit={handleSubmit(testOnSubmit || onSubmit)}
          >
            <TextField
              {...{
                id: 'email',
                label: 'Email',
                variant: 'outlined',
                className: classes.loginInput,
                inputRef: register(emailRequirements),
                name: 'email',
                autoComplete: 'email',
                error: !isEmpty(errors.email),
                helperText: errors.email && errors.email.message,
                FormHelperTextProps: {
                  classes: {
                    root: classes.helperText,
                  },
                },
              }}
            />
            <TextField
              {...{
                id: 'password',
                label: 'Password',
                variant: 'outlined',
                className: classes.loginInput,
                inputRef: register(passwordRequirements),
                name: 'password',
                autoComplete: 'current-password',
                type: showPassword ? 'text' : 'password',
                error: !isEmpty(errors.password),
                helperText: errors.password && errors.password.message,
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
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                },
                FormHelperTextProps: {
                  classes: {
                    root: classes.helperText,
                  },
                },
              }}
            />
            <Link className={classes.forgotPasswordLink} to="/">
              Forgot Password
            </Link>
            <Button
              type="submit"
              className={`${classes.button} ${classes.signIn}`}
              onClick={() => clearErrors('server')}
            >
              SIGN IN
            </Button>
          </form>
          <p className={classes.orDivider}>OR</p>
          <Button
            className={`${classes.button} ${classes.createAccount}`}
            onClick={handleClickRegister}
          >
            CREATE ACCOUNT
          </Button>
        </div>
      </Paper>
    </div>
  );

  return (
    <>
      {Auth.isLoggedIn() ? (
        <Redirect
          to={{
            pathname: '/mentors',
          }}
        />
      ) : (
        content
      )}
    </>
  );
};

export default LoginForm;
