import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import useStyles from './LoginForm.styles';
import { 
  TextField, 
  InputAdornment, 
  IconButton, 
  Button, 
} from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import { ReactComponent as LoginHero } from './assets/LoginHero.svg';
import { ReactComponent as TwitterLogo } from './assets/TwitterLogo.svg';

const FORM_TITLE = 'Welcome back!';

const emailRequirements = {
  required: true,
  pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
};

// const passwordRequirements = {
//   required: true,
//   pattern: /(?=.*[a-z])(?=.*[A-Z])(?=.*[\d])/,
// }

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { register, handleSubmit, errors } = useForm();
  const classes = useStyles();

  const onSubmit = data => console.log(data);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  }
  
  return (
    <div className={classes.root}>
      <LoginHero className={classes.heroImage} />
      <div className={classes.loginFormContainer}>
        {(errors.email || errors.password) && <p>Sorry, invalid email or password.</p>}
        <h2 className={classes.formTitle}>{FORM_TITLE}</h2>
        <form className={classes.loginForm} onSubmit={handleSubmit(onSubmit)}>
          <TextField 
            id='email'
            label='Email'
            variant='outlined'
            className={classes.loginInput}
            inputRef={register(emailRequirements)}
            name='email'
            autoComplete='email'
            error={errors.email && true}
            helperText={errors.email && 'Invalid email format'}
            InputLabelProps={{
              htmlFor: 'email'
            }}
            InputProps={{
              classes: {
                input: classes.input
              },
            }}
          />
          <TextField 
            id='password'
            label='Password'
            variant='outlined'
            className={classes.loginInput}
            inputRef={register({ require: true })}
            name='password'
            autoComplete='current-password'
            type={showPassword ? 'text' : 'password'}
            error={errors.password && true}
            InputProps={{
              classes: {
                input: classes.input
              },
              endAdornment: (
                <InputAdornment position='end'>
                  <IconButton
                    aria-label='toggle password visibility'
                    edge='end'
                    onClick={handleClickShowPassword}
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <Link 
            className={classes.forgotPasswordLink}
            to='/'
          >
            Forgot Password
          </Link>
          <Button 
            type='submit'
            className={`${classes.button} ${classes.signIn}`}
          >
            SIGN IN
          </Button>
        </form>
        <Button
          className={`${classes.button} ${classes.signInTwitter}`}
        >
          CONTINUE ON TWITTER <TwitterLogo className={classes.twitter} />
        </Button>
        <p className={classes.orDivider}>OR</p>
        <Button
          className={`${classes.button} ${classes.createAccount}`}
        >
          CREATE ACCOUNT
        </Button>
      </div>
    </div>
  )
};

export default LoginForm;