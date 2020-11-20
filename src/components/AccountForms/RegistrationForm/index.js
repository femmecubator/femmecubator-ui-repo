import React from 'react';
import KeyboardIcon from '@material-ui/icons/Keyboard';
import './registration.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    width: '75%',
    margin: '0 auto',
    float: 'none',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}));

const RegistrationForm = () => {
  const classes = useStyles();

  return (
    <>
      <div className="registration-form-container">
        <Card className={classes.root}>
          <div className={classes.details}>
            <CardContent className={classes.content}></CardContent>
            <div className={classes.controls}></div>
          </div>
          <div className="circle">
            <div className="center">
              <KeyboardIcon style={{ height: '56.11px', width: '39.28px' }} />
            </div>
          </div>
        </Card>
      </div>
    </>
  );
};

export default RegistrationForm;
