import React, { useState, useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { API_PATH } from 'utils/constants';
import request from 'utils/axiosConfig';
import { useAuth } from '../../../context/auth';
import { GlobalContext } from 'context/global';

import { Link, useHistory, useLocation } from 'react-router-dom';
import useStyles from './LoginForm.styles';
import {
  Paper,
  TextField,
  InputAdornment,
  IconButton,
  Button,
} from '@material-ui/core';
import { Visibility, VisibilityOff, Error } from '@material-ui/icons';
import { ReactComponent as LoginHero } from './assets/LoginHero.svg';
import { ReactComponent as TwitterLogo } from './assets/TwitterLogo.svg';

const FORM_TITLE = 'Welcome back!';

const emailRequirements = {
  required: true,
  pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
};

const LoginForm = ({ testOnSubmit }) => {
  const [showPassword, setShowPassword] = useState(false);
  const { register, handleSubmit, errors } = useForm();
  const {
    globalState: { isMobile },
  } = useContext(GlobalContext);
  const history = useHistory();
  const { search } = useLocation();
  const classes = useStyles({
    isMobile: isMobile,
  });

  const { auth } = useAuth();

  useEffect(() => {
    if (auth.isLoggedIn()) {
      history.replace('/mentors');
    }
  }, [auth, history]);

  const onSubmit = (credentials) => {
    request.post(API_PATH.LOGIN, credentials).then((response) => {
      if (response.status === 200) {
        auth.checkCookie();
        history.push('/mentors');
      }
    });
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
        <LoginHero className={classes.heroImage} />
        <div className={classes.loginFormContainer}>
          {(errors.email || errors.password) && !isMobile && (
            <div className={`${classes.alert} ${classes.error}`}>
              <Error />
              <p role="alert">Sorry, invalid email or password. Try again?</p>
            </div>
          )}
          {!(errors.email && errors.password) && search === '?timedOut=true' && (
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
              id="email"
              label="Email"
              variant="outlined"
              className={classes.loginInput}
              inputRef={register(emailRequirements)}
              name="email"
              autoComplete="email"
              error={errors.email && true}
              helperText={errors.email && 'Invalid email format'}
              InputLabelProps={{
                classes: {
                  root: classes.label,
                  shrink: classes.labelShrink,
                },
              }}
              InputProps={{
                classes: {
                  input: classes.input,
                },
              }}
              FormHelperTextProps={{
                classes: {
                  root: classes.helperText,
                },
              }}
            />
            <TextField
              id="password"
              label="Password"
              variant="outlined"
              className={classes.loginInput}
              inputRef={register({ required: true })}
              name="password"
              autoComplete="current-password"
              type={showPassword ? 'text' : 'password'}
              error={errors.password && true}
              helperText={errors.password && 'Enter a password'}
              InputLabelProps={{
                classes: {
                  root: classes.label,
                  shrink: classes.labelShrink,
                },
              }}
              InputProps={{
                inputProps: { 'data-testid': 'password' },
                classes: {
                  input: classes.input,
                },
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      edge="end"
                      onClick={handleClickShowPassword}
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              FormHelperTextProps={{
                classes: {
                  root: classes.helperText,
                },
              }}
            />
            <Link className={classes.forgotPasswordLink} to="/">
              Forgot Password
            </Link>
            <Button
              type="submit"
              className={`${classes.button} ${classes.signIn}`}
            >
              SIGN IN
            </Button>
          </form>
          <Button className={`${classes.button} ${classes.signInTwitter}`}>
            CONTINUE ON TWITTER <TwitterLogo className={classes.twitter} />
          </Button>
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

  return <>{auth.isAuthenticated ? null : content}</>;
};

export default LoginForm;
