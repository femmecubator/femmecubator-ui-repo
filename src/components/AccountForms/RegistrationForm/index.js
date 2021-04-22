import React, { useState } from 'react';
import SchoolIcon from '@material-ui/icons/School';
import './registration.css';
import ChipComponent from './ChipComponent';
import useStyles from './RegistrationForm.styles';
import Paper from '@material-ui/core/Paper';
import {
  Typography,
  TextField,
  Button,
  Grid,
  InputAdornment,
  useMediaQuery,
  IconButton,
  InputLabel,
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
import TermsOfService from 'components/TermsOfService/TermsOfService';

const FORM_TITLE = 'Create account';
const FORM_SUBTITLE = 'Have an existing account?';
const MIN_CHARS = 'Must be more than 1 character';
const ONLY_LETTERS = 'Must only contain letters';
const ONLY_LETTERS_WS = 'Must only contain letters and spaces';
const MIN_8CHARS = 'Must be more than 8 characters';
const INVALID_PASSWORD_FORMAT = 'Invalid password format: A-z 0-9 @$!%*?%';
const MUST_SELECT_ROLE = 'Select Mentee or Mentor';

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
  role_id: yup.string().required(MUST_SELECT_ROLE),
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
  const {
    register,
    unregister,
    handleSubmit,
    errors,
    setValue,
    setError,
    watch,
  } = useForm({
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

  const onSubmit = async data => {
    try {
      await request.post(API_PATH.REGISTER, data);

      const inProd = process.env.NODE_ENV === 'production';
      const options = {
        category: 'onSubmit',
        action: 'Created an Account',
      };
      inProd && event(options);
      setOpenModal(true);
    } catch ({ data: { message } }) {
      setError('email', {
        type: 'manual',
        message,
      });
    }
  };

  const onClickButtonModal = () => {
    setOpenModal(false);
    history.push('/mentors');
  };

  const handleClickShowPassword = key => {
    setShowPassword(prevState => ({ ...prevState, [key]: !prevState[key] }));
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
                  <div className={classes.inputSpacing}>
                    <ChipComponent
                      {...{
                        register,
                        unregister,
                        setValue,
                        errors,
                        watch,
                      }}
                    />
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
                  </div>
                  <div className={classes.inputSpacing}>
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
                        id: 'title',
                        className: classes.textField,
                        inputProps: { 'data-testid': 'title' },
                        label: 'Job Title',
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
                        className: classes.textFieldSpacing,
                        name: 'password',
                        type: showPassword.password ? 'text' : 'password',
                        inputRef: register,
                        error: !isEmpty(errors.password),
                        helperText: errors.password && errors.password.message,
                      }}
                    />
                  </div>
                  <div className={classes.inputSpacing}>
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
                  <div className={classes.inputSpacing}>
                    <TermsOfService />
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
                      <SchoolIcon
                        className={classes.schoolIcon}
                        role="img"
                        aria-label="graduation cap icon"
                        aria-hidden="false"
                      />
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
                      with portfolio reviews, practice interviews, and
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
              className={classes.formMobileTitle}
              nowrap="true"
            >
              {FORM_TITLE}
            </Typography>
            <Typography variant="body2" className={classes.formMobileSubtitle}>
              {FORM_SUBTITLE} <Link to="/login">Login</Link>
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            style={{ paddingLeft: '1.5625em', paddingRight: '1.5625em' }}
          >
            <form noValidate onSubmit={handleSubmit(mockOnSubmit || onSubmit)}>
              <ChipComponent
                {...{ register, unregister, setValue, errors, watch }}
              />
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
                  id: 'title',
                  label: 'Job Title',
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
              <div>
                <TermsOfService />
              </div>
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
    <>
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
    </>
  );
};

export default RegistrationForm;
