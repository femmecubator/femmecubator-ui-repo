import React from 'react';
import { Button, Paper, TextField, Typography } from '@material-ui/core';
import useStyles from './ResetPassword.styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import FemmecubatorLogoFull from '../../assets/images/FemmecubatorLogoFull.svg';
import SuccessLogo from '../../assets/images/SuccessLogo.svg';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';

const SuccessResetScreen = () => {
  const isMobile = useMediaQuery('(max-width:767px)');
  const classes = useStyles({ isMobile });
  const {
    root,
    logo,
    successlogo,
    successContainer,
    dialogTitle,
    narrowWidth,
    marginBottomLg,
    actionButton,
    actionButtonContained,
    marginTopMd,
  } = classes;
  return (
    <div className={root}>
      <div className={successContainer}>
        <img
          className={`${logo} ${marginBottomLg}`}
          src={FemmecubatorLogoFull}
          alt="Femmecubator logo"
        />
        <img
          className={`${successlogo}`}
          src={SuccessLogo}
          alt="Success logo"
        />
        <Typography>
          <h2 className={`${dialogTitle} ${narrowWidth}`}>
            Password Reset Successful!
          </h2>
        </Typography>
        <Link to="/">
          <Button
            className={`${actionButton} ${actionButtonContained} ${marginTopMd}`}
            variant="contained"
            onClick={() => console.log('submit')}
            color="primary"
          >
            TAKE ME BACK
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default SuccessResetScreen;
