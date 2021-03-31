import React, { useEffect, useState } from 'react';
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
  InputLabel,
  Chip,
} from '@material-ui/core';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
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
    marginLeft: '20px',
    marginBottom: '15px',
  },
  formMobileTitle: {
    fontFamily: 'Open Sans, sans-serif',
    fontSize: '28px',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: '38px',
    letterSpacing: '0em',
    marginLeft: '35px', //3.31.21 - added mobile style to adjust marginLeft
    marginBottom: '15px',
  },
  formSubtitle: {
    // textAlign: 'center',
    fontFamily: 'Open Sans, sans-serif',
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '24px',
    letterSpacing: '0px',
    paddingBottom: '15px',
    marginLeft: '20px',
  },
  formMobileSubtitle: {
    fontFamily: 'Open Sans, sans-serif',
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '24px',
    letterSpacing: '0px',
    paddingBottom: '15px',
    marginLeft: '35px', //3.31.21 - added mobile style to adjust marginLeft
  },
  inputSpacing: {
    marginTop: '8px',
    marginLeft: '10px', //3.30.21 - changed from 20px to left align item
  },
  textFieldSpacing: {
    width: '16.875em',
  },
  schoolIcon: {
    height: '56.11px',
    width: '39.28px',
    color: '#550CCC',
  },
  button: {
    [theme.breakpoints.up(824)]: {
      marginLeft: '20px',
    },
    marginTop: '28px',
    marginBottom: '28px',
    display: 'flex',
    justifyContent: 'flex-end',
    backgroundColor: '#026FE4',
    color: '#FFFFFF',
    fontWeight: 'bold',
    padding: '10px 20px',
    fontSize: '18px',
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
    width: '16.875em',
  },
  buttonModal: {
    backgroundColor: '#026FE4',
    color: '#FFFFFF',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  chipStyle: {
    height: 'auto',
    padding: '8px 12px',
    fontFamily: 'Open Sans, sans-serif',
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: '700',
    color: '#FFF',
    display: 'flex',
    flexDirection: 'row-reverse',
    width: 'auto',
    borderColor: ' #026FE4',
    borderRadius: '30px',
    backgroundColor: '#026FE4',
    '&:hover': {
      backgroundColor: '#026FE4 !important',
      borderColor: ' #026FE4',
    },
    '&:first-child': {
      marginRight: '5px',
    },
    '&:focus': {
      backgroundColor: '#026FE4 !important',
      borderColor: ' #026FE4',
    },
  },
  checkIcon: {
    color: '#FFF',
  },
  chipDivStyle: {
    display: 'flex',
    padding: ' 21px 0px',
    marginLeft: '-5px',
  },
  chipOutline: {
    height: 'auto',
    padding: '8px 12px',
    border: '3px solid #757575',
    borderRadius: '30px',
    color: '#757575',
    fontFamily: 'Open Sans, sans-serif',
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: '700',
    '&:hover': {
      backgroundColor: '#026FE4 !important',
      color: 'white',
      borderColor: ' #026FE4',
    },
    '&:first-child': {
      marginRight: '5px',
    },
    '&:focus': {
      backgroundColor: '#026FE4 !important',
      borderColor: ' #026FE4',
    },
  },
  inputLabel: {
    color: 'rgba(0, 0, 0, 0.87)',
    fontSize: '16px',
    fontStyle: 'normal',
    fontFamily: 'Open Sans, sans-serif',
    fontWeight: '400',
    lineHeight: '24px',
    //marginLeft: '-10px',
  },
  termsLabel: {
    color: '#4F4F4F',
    fontSize: '14px',
    fontStyle: 'normal',
    fontFamily: 'Open Sans, sans-serif',
    fontWeight: '700',
    lineHeight: '24px',
    marginTop: '19px',
    display: 'inline-block',
    padding: '2px',
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
  //not so sure if this is accurate, i don't know how to test it
  role_id: yup.string().required('Select Mentee or Mentor'),
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
  // userName: yup
  //   .string()
  //   .required('User name is required')
  //   .min(2, MIN_CHARS)
  //   .matches(
  //     /^(?=[a-zA-Z0-9._]{8,20}$)(?!.*[_.]{2})[^_.].*[^_.]$/,
  //     'Only contains alphanumeric characters, underscore and dot'
  //   ),
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

const ChipComponent = ({ register, unregister, watch, setValue, errors }) => {
  const classes = useStyles();
  const watchRole = watch('role_id', '');
  useEffect(() => {
    register('role_id');
    return () => unregister('role_id');
  }, [register, unregister]);
  return (
    <>
      <div className={classes.inputSpacing}>
        <InputLabel className={classes.inputLabel}>
          I want to sign up as a:{' '}
        </InputLabel>
        <div className={classes.chipDivStyle}>
          <Chip
            {...{
              className:
                watchRole === 1 ? classes.chipStyle : classes.chipOutline,
              size: 'small',
              id: '0',
              label: 'Mentee',
              variant: 'outlined',
              name: 'role_id',
              onClick: () =>
                setValue('role_id', 1, {
                  shouldDirty: true,
                  shouldValidate: true,
                }),
              icon:
                watchRole === 1 ? (
                  <CheckCircleOutlineIcon className={classes.checkIcon} />
                ) : null,
            }}
          />
          <Chip
            {...{
              className:
                watchRole === 0 ? classes.chipStyle : classes.chipOutline,
              size: 'small',
              id: '1',
              label: 'Mentor',
              name: 'role_id',
              variant: 'outlined',
              onClick: () =>
                setValue('role_id', 0, {
                  shouldDirty: true,
                  shouldValidate: true,
                }),
              icon:
                watchRole === 0 ? (
                  <CheckCircleOutlineIcon className={classes.checkIcon} />
                ) : null,
            }}
          />
        </div>
        {!isEmpty(errors.role_id) && (
          // need to make this look better
          <div style={{ color: 'red' }}>Error: {errors.role_id?.message}</div>
        )}
        <br />
      </div>
    </>
  );
};
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
    getValues,
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

  const onSubmit = async (data) => {
    try {
      await request.post(API_PATH.REGISTER, data);

      const inProd = process.env.NODE_ENV === 'production';
      const options = {
        category: 'onSubmit',
        action: 'Created an Account',
      };
      //eslint-disable-next-line
      console.log('form values######', getValues());
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
                  <div className={classes.inputSpacing}>
                    <ChipComponent
                      {...{ register, unregister, setValue, errors, watch }}
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
                        className: classes.textFieldSpacing, //3.31.31 Sherouk updated className to match other fields. Was previously 'style-password', which isn't in stylesheet
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
                    <InputLabel className={classes.termsLabel}>
                      By creating this you agree to the
                    </InputLabel>
                    <InputLabel
                      className={classes.termsLabel}
                      style={{ color: '#026FE4' }}
                    >
                      Terms of Service
                    </InputLabel>
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
              className={
                classes.formMobileTitle
              } /* 3.31.21 - Sherouk created mobile class for form title to adjust marginLeft*/
              nowrap="true"
            >
              {FORM_TITLE}
            </Typography>
            <Typography
              variant="body2"
              className={
                classes.formMobileSubtitle
              } /* 3.31.21 - Sherouk created mobile class for form subtitle to adjust marginLeft */
            >
              {FORM_SUBTITLE} <Link to="/login">Login</Link>
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            style={{ paddingLeft: '1.5625em', paddingRight: '1.5625em' }}
          >
            <form noValidate onSubmit={handleSubmit(mockOnSubmit || onSubmit)}>
              {/* Mentor and Mentee selection */}
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
