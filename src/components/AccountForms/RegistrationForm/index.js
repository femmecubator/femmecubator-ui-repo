import React, { useContext } from 'react';
import SchoolIcon from '@material-ui/icons/School';
import './registration.css';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Typography, TextField, Button, Grid } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { GlobalContext } from 'context/global';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import isEmpty from 'lodash/isEmpty';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
    justifyContent: 'center',
    marginTop: '5%',
  },
  rootMobile: {
    justifyContent: 'center',
  },
  paperContainer: {
    position: 'absolute',
    width: 'auto',
    height: 'auto',
  },
  bookMentor: {
    fontFamily: 'Open Sans, sans-serif',
    fontSize: '28px',
    fontWeight: 700,
    paddingTop: '20px',
  },
  bookMentorDesc: {
    paddingLeft: '35px',
    paddingRight: '35px',
    fontFamily: 'Open Sans, sans-serif',
    fontWeight: 400,
    fontSize: '16px',
    lineHeight: '24px',
    paddingTop: '20px',
  },
  formTitle: {
    fontFamily: 'Open Sans, sans-serif',
    fontSize: '28px',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: '38px',
    letterSpacing: '0em',
    textAlign: 'center',
  },
  formSubtitle: {
    textAlign: 'center',
    fontFamily: 'Open Sans, sans-serif',
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '24px',
    letterSpacing: '0px',
    paddingBottom: '25px',
  },
  inputSpacing: {
    marginTop: '8px',
  },
  textFieldSpacing: {
    marginLeft: '8px',
  },
  schoolIcon: {
    height: '56.11px',
    width: '39.28px',
    color: '#550CCC',
  },
  button: {
    [theme.breakpoints.up(799)]: {
      marginTop: '48px',
      float: 'right',
      marginRight: '16.25em',
    },
    backgroundColor: '#026FE4',
    color: '#FFFFFF',
  },
  registrationFormContainer: {
    [theme.breakpoints.between(768, 1024)]: { width: '40.5625em' },
    position: 'relative',
    width: '51.5625em',
    height: '34.25em',
    marginLeft: '2.5em',
    marginTop: '2.5em',
    marginBottom: '2.5em',
  },
  mobileInputField: {
    paddingBottom: '1.25em',
  },
  buttonGrid: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '2.5em',
  },
}));

const FORM_TITLE = 'Create account';
const FORM_SUBTITLE = 'Have an existing account?';
const MIN_CHARS = 'Must be more than 1 character';
const ONLY_LETTERS = 'Must only contain letters (A-Z, a-z)';
const ONLY_LETTERS_WS = 'Must only contain letters and spaces(A-Z, a-z)';
const MIN_8CHARS = 'Must be more than 8 characters';
function submitHandler(data) {
  alert(JSON.stringify(data));
}

const RegistrationSchema = yup.object().shape({
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
  prefLoc: yup
    .string()
    .required('Preferred Location is required')
    .min(2, MIN_CHARS)
    .matches(/^[a-zA-Z]+$/, ONLY_LETTERS),
  title: yup
    .string()
    .required('Title is required')
    .min(2, MIN_CHARS)
    .matches(/^[a-zA-Z\s]*$/, ONLY_LETTERS_WS),
  email: yup
    .string()
    .required('Email is required')
    .min(2, MIN_CHARS)
    .matches(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      'Invalid email format'
    ),
  userName: yup
    .string()
    .required('User name is required')
    .min(2, MIN_CHARS)
    .matches(
      /^(?=[a-zA-Z0-9._]{8,20}$)(?!.*[_.]{2})[^_.].*[^_.]$/,
      'Only contains alphanumeric characters, underscore and dot'
    ),
  password: yup
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
    )
    .oneOf([yup.ref('password'), null], "Passwords don't match."),
});

const RegistrationForm = ({ onSubmit = submitHandler, onError }) => {
  const classes = useStyles();
  const { register, handleSubmit, errors } = useForm({
    revalidateMode: 'onChange',
    resolver: yupResolver(RegistrationSchema),
  });
  const {
    globalState: { isMobile },
  } = useContext(GlobalContext);

  let content = (
    <div className={classes.root}>
      <Paper className={classes.paperContainer}>
        <Grid container>
          <Grid item xs={12}>
            <div className={classes.registrationFormContainer}>
              <div className="registration-form">
                <Typography variant="h2" className={classes.formTitle}>
                  {FORM_TITLE}
                </Typography>
                <Typography variant="body2" className={classes.formSubtitle}>
                  {FORM_SUBTITLE} <Link to="/login">Login</Link>
                </Typography>
                <form noValidate onSubmit={handleSubmit(onSubmit, onError)}>
                  <div>
                    <TextField
                      {...{
                        // 'data-testid': 'firstName',
                        label: 'First Name',
                        variant: 'outlined',
                        inputProps: { 'data-testid': 'firstName' },
                        name: 'firstName',
                        inputRef: register,
                        error: !isEmpty(errors.firstName),
                        helperText:
                          errors.firstName && errors.firstName.message,
                      }}
                    />
                    <TextField
                      {...{
                        inputProps: { 'data-testid': 'lastName' },
                        inputRef: register,
                        name: 'lastName',
                        label: 'Last Name',
                        variant: 'outlined',
                        className: classes.textFieldSpacing,
                        error: !isEmpty(errors.lastName),
                        helperText: errors.lastName && errors.lastName.message,
                      }}
                    />
                  </div>
                  <div className={classes.inputSpacing}>
                    <TextField
                      {...{
                        inputProps: { 'data-testid': 'prefLoc' },
                        label: 'Preferred Location',
                        variant: 'outlined',
                        inputRef: register,
                        name: 'prefLoc',
                        error: !isEmpty(errors.prefLoc),
                        helperText: errors.prefLoc && errors.prefLoc.message,
                      }}
                    />
                  </div>
                  <div className={classes.inputSpacing}>
                    <TextField
                      {...{
                        inputProps: { 'data-testid': 'title' },
                        label: 'Title',
                        variant: 'outlined',
                        inputRef: register,
                        name: 'title',
                        error: !isEmpty(errors.title),
                        helperText: errors.title && errors.title.message,
                      }}
                    />
                  </div>
                  <div className={classes.inputSpacing}>
                    <TextField
                      {...{
                        inputProps: { 'data-testid': 'email' },
                        label: 'Email',
                        variant: 'outlined',
                        inputRef: register,
                        name: 'email',
                        error: !isEmpty(errors.email),
                        helperText: errors.email && errors.email.message,
                      }}
                    />
                  </div>
                  <div className={classes.inputSpacing}>
                    <TextField
                      {...{
                        inputProps: { 'data-testid': 'userName' },
                        label: 'Username',
                        variant: 'outlined',
                        inputRef: register,
                        name: 'userName',
                        error: !isEmpty(errors.userName),
                        helperText: errors.userName && errors.userName.message,
                      }}
                    />
                  </div>
                  <div className={classes.inputSpacing}>
                    <TextField
                      {...{
                        inputProps: { 'data-testid': 'password' },
                        label: 'Password',
                        variant: 'outlined',
                        name: 'password',
                        type: 'password',
                        inputRef: register,
                        error: !isEmpty(errors.password),
                        helperText: errors.password && errors.password.message,
                      }}
                    />
                    <TextField
                      {...{
                        inputProps: { 'data-testid': 'retypePassword' },
                        label: 'Retype Password',
                        variant: 'outlined',
                        className: classes.textFieldSpacing,
                        name: 'retypePassword',
                        type: 'password',
                        inputRef: register,
                        error: !isEmpty(errors.retypePassword),
                        helperText:
                          errors.retypePassword &&
                          errors.retypePassword.message,
                      }}
                    />
                  </div>
                  <div>
                    <Button
                      {...{
                        'data-testid': 'submit',
                        type: 'submit',
                        variant: 'contained',
                        color: 'primary',
                        className: classes.button,
                      }}
                    >
                      Submit
                    </Button>
                  </div>
                </form>
              </div>
              <div className="vl">
                <div style={{ top: '15%', position: 'relative' }}>
                  <div className="circle">
                    <div className="center">
                      <SchoolIcon className={classes.schoolIcon} />
                    </div>
                  </div>
                  <div>
                    <Typography variant="h2" className={classes.bookMentor}>
                      Book Mentors
                    </Typography>
                    <Typography
                      variant="body1"
                      className={classes.bookMentorDesc}
                    >
                      Are you thinking of going into Design or Development
                      career tracks? Easily book time with mentors who can help
                      with portfolio reviews, practice interview and
                      whiteboarding sessions.
                    </Typography>
                  </div>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );

  if (isMobile) {
    content = (
      <div className={classes.rootMobile}>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          spacing={0}
        >
          <Grid item xs={12} style={{ marginTop: '1.5625em' }}>
            <Typography
              variant="h2"
              className={classes.formTitle}
              nowrap="true"
            >
              {FORM_TITLE}
            </Typography>
            <Typography variant="body2" className={classes.formSubtitle}>
              {FORM_SUBTITLE} <Link to="/login">Login</Link>
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            style={{ paddingLeft: '1.5625em', paddingRight: '1.5625em' }}
          >
            <form noValidate onSubmit={handleSubmit(onSubmit)}>
              <TextField
                {...{
                  label: 'First Name',
                  variant: 'outlined',
                  name: 'firstName',
                  inputRef: register,
                  error: errors.firstName,
                  helperText: errors.firstName && errors.firstName.message,
                  fullWidth: true,
                  className: classes.mobileInputField,
                }}
              />
              <TextField
                {...{
                  label: 'Last Name',
                  variant: 'outlined',
                  name: 'lastName',
                  inputRef: register,
                  error: errors.lastName,
                  helperText: errors.lastName && errors.lastName.message,
                  fullWidth: true,
                  className: classes.mobileInputField,
                }}
              />
              <TextField
                {...{
                  label: 'Preferred Location',
                  variant: 'outlined',
                  name: 'prefLoc',
                  inputRef: register,
                  error: errors.prefLoc,
                  helperText: errors.prefLoc && errors.prefLoc.message,
                  fullWidth: true,
                  className: classes.mobileInputField,
                }}
              />
              <TextField
                {...{
                  label: 'Title',
                  variant: 'outlined',
                  name: 'title',
                  inputRef: register,
                  error: errors.title,
                  helperText: errors.title && errors.title.message,
                  fullWidth: true,
                  className: classes.mobileInputField,
                }}
              />
              <TextField
                {...{
                  label: 'Email',
                  variant: 'outlined',
                  inputRef: register,
                  name: 'email',
                  error: errors.email,
                  helperText: errors.email && errors.email.message,
                  fullWidth: true,
                  className: classes.mobileInputField,
                }}
              />
              <TextField
                {...{
                  label: 'User name',
                  variant: 'outlined',
                  name: 'userName',
                  inputRef: register,
                  error: errors.userName,
                  helperText: errors.userName && errors.userName.message,
                  fullWidth: true,
                  className: classes.mobileInputField,
                }}
              />
              <TextField
                {...{
                  label: 'Password',
                  variant: 'outlined',
                  className: classes.mobileInputField,
                  fullWidth: true,
                  name: 'password',
                  type: 'password',
                  inputRef: register,
                  error: errors.password,
                  helperText: errors.password && errors.password.message,
                }}
              />
              <TextField
                {...{
                  label: 'Retype Password',
                  variant: 'outlined',
                  className: classes.mobileInputField,
                  fullWidth: true,
                  inputRef: register,
                  error: errors.retypePassword,
                  helperText:
                    errors.retypePassword && errors.retypePassword.message,
                  name: 'retypePassword',
                  type: 'password',
                }}
              />
              <Grid item sm={12} className={classes.buttonGrid}>
                <Button
                  {...{
                    type: 'submit',
                    variant: 'contained',
                    color: 'primary',
                    className: classes.button,
                  }}
                >
                  Submit
                </Button>
              </Grid>
            </form>
          </Grid>
        </Grid>
      </div>
    );
  }

  return <>{content}</>;
};

export default RegistrationForm;
