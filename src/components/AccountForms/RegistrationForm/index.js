import React from 'react';
import SchoolIcon from '@material-ui/icons/School';
import './registration.css';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
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
}));
const FORM_TITLE = 'Create an account';
const FORM_SUBTITLE = 'Have an existing account?';
const RegistrationForm = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <Paper className={classes.paperContainer}>
          <div className="registration-form-container">
            <div className="registration-form">
              <div>{FORM_TITLE}</div>
              <div>{FORM_SUBTITLE}</div>
            </div>
            <div className="vl">
              <div style={{ top: '25%', position: 'relative' }}>
                <div className="circle">
                  <div className="center">
                    <SchoolIcon
                      style={{
                        height: '56.11px',
                        width: '39.28px',
                        color: '#550CCC',
                      }}
                    />
                  </div>
                </div>
                <div>
                  <Typography variant="h2" className={classes.bookMentor}>
                    Book Mentors G
                  </Typography>
                  <Typography
                    variant="body1"
                    className={classes.bookMentorDesc}
                  >
                    Are you thinking of going into Design or Development career
                    tracks? Easily book time with mentors who can help with
                    portfolio reviews, practice interview and whiteboarding
                    sessions.
                  </Typography>
                </div>
              </div>
            </div>
          </div>
        </Paper>
      </div>
    </>
  );
};

export default RegistrationForm;
