import React, { useContext } from 'react';
import SchoolIcon from '@material-ui/icons/School';
import './registration.css';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Typography, TextField, Button, Grid } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { GlobalContext } from 'context/global';

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

const RegistrationForm = () => {
  const classes = useStyles();
  const { register, handleSubmit, errors } = useForm({
    revalidateMode: 'onChange',
  });
  const {
    globalState: { isMobile },
  } = useContext(GlobalContext);
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
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
                <form noValidate onSubmit={handleSubmit(onSubmit)}>
                  <div>
                    <TextField
                      {...{
                        label: 'First Name',
                        variant: 'outlined',
                        name: 'firstName',
                        inputRef: register({ required: true }),
                        error: errors.firstName,
                        helperText:
                          errors.firstName && 'First name is required',
                      }}
                    />
                    <TextField
                      {...{
                        inputRef: register({ required: true }),
                        name: 'lastName',
                        label: 'Last Name',
                        variant: 'outlined',
                        className: classes.textFieldSpacing,
                        error: errors.lastName,
                        helperText: errors.lastName && 'Last name is required',
                      }}
                    />
                  </div>
                  <div className={classes.inputSpacing}>
                    <TextField
                      {...{
                        label: 'Preferred Location',
                        variant: 'outlined',
                        inputRef: register({ required: true }),
                        name: 'preferredLocation',
                        error: errors.preferredLocation,
                        helperText:
                          errors.preferredLocation &&
                          'Preferred Location is required',
                      }}
                    />
                  </div>
                  <div className={classes.inputSpacing}>
                    <TextField
                      {...{
                        label: 'Title',
                        variant: 'outlined',
                        inputRef: register({ required: true }),
                        name: 'title',
                        error: errors.title,
                        helperText: errors.title && 'Title is required',
                      }}
                    />
                  </div>
                  <div className={classes.inputSpacing}>
                    <TextField
                      {...{
                        label: 'Email',
                        variant: 'outlined',
                        inputRef: register({
                          required: 'Email is required',
                          pattern: {
                            value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                            message: 'Invalid email format',
                          },
                        }),
                        name: 'email',
                        error: errors.email,
                        helperText: errors.email && errors.email.message,
                      }}
                    />
                  </div>
                  <div className={classes.inputSpacing}>
                    <TextField
                      {...{
                        label: 'Username',
                        variant: 'outlined',
                        inputRef: register({ required: true }),
                        name: 'userName',
                        error: errors.userName,
                        helperText: errors.userName && 'Username is required',
                      }}
                    />
                  </div>
                  <div className={classes.inputSpacing}>
                    <TextField
                      {...{
                        label: 'Password',
                        variant: 'outlined',
                        name: 'password',
                        type: 'password',
                        inputRef: register({
                          required: 'Password is required',
                          pattern: {
                            value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                            message: 'Invalid password: (A-z@$!%*?%)',
                          },
                        }),
                        error: errors.password,
                        helperText: errors.password && errors.password.message,
                      }}
                    />
                    <TextField
                      {...{
                        label: 'Retype Password',
                        variant: 'outlined',
                        className: classes.textFieldSpacing,
                        name: 'retypePassword',
                        type: 'password',
                        inputRef: register({
                          required: 'Password is required',
                          pattern: {
                            value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                            message: 'Invalid password: (A-z@$!%*?%)',
                          },
                        }),
                        error: errors.retypePassword,
                        helperText:
                          errors.retypePassword &&
                          errors.retypePassword.message,
                      }}
                    />
                  </div>
                  <div>
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
                  inputRef: register({ required: true }),
                  error: errors.firstName,
                  helperText: errors.firstName && 'First name is required',
                  fullWidth: true,
                  className: classes.mobileInputField,
                }}
              />
              <TextField
                {...{
                  label: 'Last Name',
                  variant: 'outlined',
                  name: 'lastName',
                  inputRef: register({ required: true }),
                  error: errors.lastName,
                  helperText: errors.lastName && 'Last name is required',
                  fullWidth: true,
                  className: classes.mobileInputField,
                }}
              />
              <TextField
                {...{
                  label: 'Preferred Location',
                  variant: 'outlined',
                  name: 'prefLoc',
                  inputRef: register({ required: true }),
                  error: errors.prefLoc,
                  helperText:
                    errors.prefLoc && 'Preferred Location is required',
                  fullWidth: true,
                  className: classes.mobileInputField,
                }}
              />
              <TextField
                {...{
                  label: 'Title',
                  variant: 'outlined',
                  name: 'title',
                  inputRef: register({ required: true }),
                  error: errors.title,
                  helperText: errors.title && 'Title is required',
                  fullWidth: true,
                  className: classes.mobileInputField,
                }}
              />
              <TextField
                {...{
                  label: 'Email',
                  variant: 'outlined',
                  inputRef: register({
                    required: 'Email is required',
                    pattern: {
                      value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                      message: 'Invalid email format',
                    },
                  }),
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
                  inputRef: register({ required: true }),
                  error: errors.userName,
                  helperText: errors.userName && 'User name is required',
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
                  inputRef: register({
                    required: 'Password is required',
                    pattern: {
                      value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                      message: 'Invalid password: (A-z@$!%*?%)',
                    },
                  }),
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
                  inputRef: register({
                    required: 'Password is required',
                    pattern: {
                      value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                      message: 'Invalid password: (A-z@$!%*?%)',
                    },
                  }),
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
