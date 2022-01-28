import React from 'react';
import { Button, Paper, TextField, Typography } from '@material-ui/core';
import useStyles from './ForgotPassword.styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import FemmecubatorLogoFull from '../../assets/images/FemmecubatorLogoFull.svg';
import SuccessLogo from '../../assets/images/SuccessLogo.svg';

const SuccessForgotScreen = () => {
  const isMobile = useMediaQuery('(max-width:767px)');
  const classes = useStyles({ isMobile });
  const {
    root,
    logo,
    successlogo,
    field,
    successContainer,
    dialogTitle,
    dialogText,
    narrowWidth,
    marginBottomLg,
    marginBottomSm,
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
            Password Reset Sent!
          </h2>
          <p className={`${dialogText} ${narrowWidth}`}>
            We just sent you a reset link to your account. Make sure you replace
            the password before the link expires.
          </p>
        </Typography>
      </div>
    </div>
  );
};

export default SuccessForgotScreen;
