import React, { useState } from 'react';
import SchoolIcon from '@material-ui/icons/School';
import './registration.css';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import {
  Typography,
  TextField,
  Button,
  Grid,
  InputAdornment,
  useMediaQuery,
  IconButton,
} from '@material-ui/core';
import { useForm } from 'react-hook-form';
import { Link, Redirect, useHistory } from 'react-router-dom';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import isEmpty from 'lodash/isEmpty';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import request from 'utils/axiosConfig';
import { API_PATH } from 'utils/constants';
import { event } from 'react-ga';
import Auth from 'utils/auth';
import RegistrationSuccess from '../../RegistrationSuccess';

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
    width: '14.875em',
  },
  schoolIcon: {
    height: '56.11px',
    width: '39.28px',
    color: '#550CCC',
  },
  button: {
    [theme.breakpoints.up(824)]: {
      marginLeft: '46%',
    },
    marginTop: '48px',
    display: 'flex',
    justifyContent: 'flex-end',
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
  textField: {
    width: '14.875em',
  },
  buttonModal: {
    backgroundColor: '#026FE4',
    color: '#FFFFFF',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
}));

const FORM_TITLE = 'Create account';
const FORM_SUBTITLE = 'Have an existing account?';
const MIN_CHARS = 'Must be more than 1 character';
const ONLY_LETTERS = 'Must only contain letters';
const ONLY_LETTERS_WS = 'Must only contain letters and spaces';
const MIN_8CHARS = 'Must be more than 8 characters';
const INVALID_PASSWORD_FORMAT = 'Invalid password format: A-z 0-9 @$!%*?%';

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
      INVALID_PASSWORD_FORMAT
    ),
  retypePassword: yup
    .string()
    .required('Password is required')
    .min(8, MIN_8CHARS)
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      INVALID_PASSWORD_FORMAT
    )
    .oneOf([yup.ref('password'), null], 'Passwords do not match.'),
});

const RegistrationForm = ({ mockOnSubmit }) => {
  const classes = useStyles();
  const { register, handleSubmit, errors, setError, watch } = useForm({
    revalidateMode: 'onChange',
    resolver: yupResolver(RegistrationSchema),
  });
  const isMobile = useMediaQuery('(max-width:1023px)');
  const [showPassword, setShowPassword] = useState({
    password: false,
    retypePassword: false,
  });
  const [openModal, setOpenModal] = useState(false);
  const watchEmail = watch('email', '');
  const history = useHistory();
  const modalTitleText = "You're All Set!";
  const modalBodyText = `We have just created your account! Don't forget to verify through your email at ${watchEmail}`;

  const onSubmit = async (data) => {
    try {
      await request.post(API_PATH.REGISTER, data);

      const inProd = process.env.NODE_ENV === 'production';
      const options = {
        category: 'onSubmit',
        action: 'Created an Account',
      };
      inProd && event(options);
      setOpenModal(true);
    } catch ({ err }) {
      const message =
        err[`${Object.keys(err).toString()}`]?.message || 'Registration error';
      setError(Object.keys(err).toString(), {
        type: 'manual',
        message,
      });
    }
  };

  const onClickButtonModal = () => {
    setOpenModal(false);
    history.push('/mentors');
  };

  const handleClickShowPassword = (key) => {
    setShowPassword((prevState) => ({ ...prevState, [key]: !prevState[key] }));
  };

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
                <form
                  noValidate
                  onSubmit={handleSubmit(mockOnSubmit || onSubmit)}
                >
                  <div>
                    <TextField
                      {...{
                        id: 'firstName',
                        className: classes.textField,
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
                        id: 'lastName',
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
                        id: 'prefLoc',
                        className: classes.textField,
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
                        id: 'title',
                        className: classes.textField,
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
                        id: 'email',
                        className: classes.textField,
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
                        id: 'userName',
                        className: classes.textField,
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
                        id: 'password',
                        InputProps: {
                          inputProps: {
                            'data-testid': 'password',
                          },
                          endAdornment: (
                            <InputAdornment position="end">
                              <IconButton
                                {...{
                                  'aria-label': 'toggle password visibility',
                                  onClick: () =>
                                    handleClickShowPassword('password'),
                                  edge: 'end',
                                }}
                              >
                                {showPassword.password ? (
                                  <VisibilityOff />
                                ) : (
                                  <Visibility />
                                )}
                              </IconButton>
                            </InputAdornment>
                          ),
                        },
                        label: 'Password',
                        variant: 'outlined',
                        name: 'password',
                        type: showPassword.password ? 'text' : 'password',
                        inputRef: register,
                        error: !isEmpty(errors.password),
                        helperText: errors.password && errors.password.message,
                      }}
                    />
                    <TextField
                      {...{
                        id: 'retypePassword',
                        InputProps: {
                          inputProps: { 'data-testid': 'retypePassword' },
                          endAdornment: (
                            <InputAdornment position="end">
                              <IconButton
                                {...{
                                  'aria-label': 'toggle password visibility',
                                  onClick: () =>
                                    handleClickShowPassword('retypePassword'),
                                  edge: 'end',
                                }}
                              >
                                {showPassword.retypePassword ? (
                                  <VisibilityOff />
                                ) : (
                                  <Visibility />
                                )}
                              </IconButton>
                            </InputAdornment>
                          ),
                        },
                        label: 'Retype Password',
                        variant: 'outlined',
                        className: classes.textFieldSpacing,
                        name: 'retypePassword',
                        type: showPassword.retypePassword ? 'text' : 'password',
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
            <form noValidate onSubmit={handleSubmit(mockOnSubmit || onSubmit)}>
              <TextField
                {...{
                  id: 'firstName',
                  label: 'First Name',
                  variant: 'outlined',
                  name: 'firstName',
                  inputRef: register,
                  error: !isEmpty(errors.firstName),
                  helperText: errors.firstName && errors.firstName.message,
                  fullWidth: true,
                  className: classes.mobileInputField,
                }}
              />
              <TextField
                {...{
                  id: 'lastName',
                  label: 'Last Name',
                  variant: 'outlined',
                  name: 'lastName',
                  inputRef: register,
                  error: !isEmpty(errors.lastName),
                  helperText: errors.lastName && errors.lastName.message,
                  fullWidth: true,
                  className: classes.mobileInputField,
                }}
              />
              <TextField
                {...{
                  id: 'prefLoc',
                  label: 'Preferred Location',
                  variant: 'outlined',
                  name: 'prefLoc',
                  inputRef: register,
                  error: !isEmpty(errors.prefLoc),
                  helperText: errors.prefLoc && errors.prefLoc.message,
                  fullWidth: true,
                  className: classes.mobileInputField,
                }}
              />
              <TextField
                {...{
                  id: 'title',
                  label: 'Title',
                  variant: 'outlined',
                  name: 'title',
                  inputRef: register,
                  error: !isEmpty(errors.title),
                  helperText: errors.title && errors.title.message,
                  fullWidth: true,
                  className: classes.mobileInputField,
                }}
              />
              <TextField
                {...{
                  id: 'email',
                  label: 'Email',
                  variant: 'outlined',
                  inputRef: register,
                  name: 'email',
                  error: !isEmpty(errors.email),
                  helperText: errors.email && errors.email.message,
                  fullWidth: true,
                  className: classes.mobileInputField,
                }}
              />
              <TextField
                {...{
                  id: 'userName',
                  label: 'User name',
                  variant: 'outlined',
                  name: 'userName',
                  inputRef: register,
                  error: !isEmpty(errors.userName),
                  helperText: errors.userName && errors.userName.message,
                  fullWidth: true,
                  className: classes.mobileInputField,
                }}
              />
              <TextField
                {...{
                  InputProps: {
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          {...{
                            'aria-label': 'toggle password visibility',
                            onClick: () => handleClickShowPassword('password'),
                            edge: 'end',
                          }}
                        >
                          {showPassword.password ? (
                            <VisibilityOff />
                          ) : (
                            <Visibility />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  },
                  id: 'password',
                  label: 'Password',
                  variant: 'outlined',
                  className: classes.mobileInputField,
                  fullWidth: true,
                  name: 'password',
                  type: showPassword.password ? 'text' : 'password',
                  inputRef: register,
                  error: !isEmpty(errors.password),
                  helperText: errors.password && errors.password.message,
                }}
              />
              <TextField
                {...{
                  InputProps: {
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          {...{
                            'aria-label': 'toggle password visibility',
                            onClick: () =>
                              handleClickShowPassword('retypePassword'),
                            edge: 'end',
                          }}
                        >
                          {showPassword.retypePassword ? (
                            <VisibilityOff />
                          ) : (
                            <Visibility />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  },
                  id: 'retypePassword',
                  label: 'Retype Password',
                  variant: 'outlined',
                  className: classes.mobileInputField,
                  fullWidth: true,
                  inputRef: register,
                  error: !isEmpty(errors.retypePassword),
                  helperText:
                    errors.retypePassword && errors.retypePassword.message,
                  name: 'retypePassword',
                  type: showPassword.retypePassword ? 'text' : 'password',
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

  return (
    <main>
      {Auth.isLoggedIn() && !openModal ? (
        <Redirect
          to={{
            pathname: '/mentors',
          }}
        />
      ) : (
        content
      )}
      <RegistrationSuccess
        {...{
          openModal: openModal,
          titleText: modalTitleText,
          bodyText: modalBodyText,
          button: (
            <Button
              {...{
                variant: 'contained',
                color: 'primary',
                className: classes.buttonModal,
                onClick: onClickButtonModal,
              }}
            >
              Go to Main Page
            </Button>
          ),
        }}
      ></RegistrationSuccess>
    </main>
  );
};

export default RegistrationForm;
