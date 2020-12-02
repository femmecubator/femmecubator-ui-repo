import React from 'react';
import { useForm } from 'react-hook-form';

import { TextField, InputAdornment, IconButton } from '@material-ui/core';
import { Visibility, VisiblityOff } from '@material-ui/icons';

const FORM_TITLE = 'Welcome back!'

const LoginForm = () => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => console.log(data);

  const emailRequirements = {
    required: true,
    pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  };

  const passwordRequirements = {
    required: true,
    pattern: /(?=.*[a-z])(?=.*[A-Z])(?=.*[\d])/,
  }
  
  return (
    <>
      {(errors.email || errors.password) && <p>Sorry, invalid email or password.</p>}
      <h2>{FORM_TITLE}</h2>
      <form onSubmit={handleSubmit(onSubmit)} >
        <TextField 
          name='Email'
          label='Email'
          inputRef={register(emailRequirements)}
          variant='outlined'
        />

        <TextField 
          name='Password'
          label='Password'
          variant='outlined'
          type='password'
          inputRef={register(passwordRequirements)}
          InputProps={{
            endAdornment: (
              <InputAdornment position='end'>
                <IconButton
                  aria-label='toggle password visibility'
                >
                  <Visibility />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        <input type="submit" value='SIGN IN' />
      </form>
    </>
  )
};

export default LoginForm;