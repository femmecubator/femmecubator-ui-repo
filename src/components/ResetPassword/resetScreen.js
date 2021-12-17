import React from 'react';
import { Button, TextField, Typography } from '@material-ui/core';
import useStyles from './ResetPassword.styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import FemmecubatorLogoFull from '../../assets/images/FemmecubatorLogoFull.svg';
import HidePass from '../../assets/images/HidePass.svg';
import ShowPass from '../../assets/images/ShowPass.svg';

const ResetScreen = ({ setPassReset }) => {
  const isMobile = useMediaQuery('(max-width:767px)');
  const classes = useStyles({ isMobile });
  const {
    root,
    logo,
    passField,
    forgotContainer,
    dialogTitle,
    marginBottomNm,
    actionButton,
    actionButtonContained,
    marginTopSm,
    marginBottomMd,
    normalWidth,
    hidePass,
    focusBorder,
  } = classes;

  const [password1, setPassword1] = React.useState(null);
  const [password2, setPassword2] = React.useState(null);
  const [showPass1, setShowPass1] = React.useState(false);
  const [focusPass1, setFocusPass1] = React.useState(false);
  const [showPass2, setShowPass2] = React.useState(false);
  const [focusPass2, setFocusPass2] = React.useState(false);

  const handleShowPass1 = () => {
    setShowPass1(!showPass1);
  };
  const handleKeyDownShowPass1 = e => {
    if (e.keyCode == 13) {
      setShowPass1(!showPass1);
    }
  };
  const handleShowPass2 = () => {
    setShowPass2(!showPass2);
  };
  const handleKeyDownShowPass2 = e => {
    if (e.keyCode == 13) {
      setShowPass1(!showPass2);
    }
  };

  const handleSubmit = () => {
    setPassReset(true);
  };

  return (
    <div className={root}>
      <div className={forgotContainer}>
        <img
          className={`${logo} ${marginBottomMd} ${marginTopSm}`}
          src={FemmecubatorLogoFull}
          alt="Femmecubator logo"
        />
        <Typography>
          <h2 className={`${dialogTitle} ${normalWidth}`}>Reset Password</h2>
        </Typography>
        <div className={`${passField} ${focusPass1 ? focusBorder : ''}`}>
          <TextField
            id="filled-required"
            label="New Password"
            type={showPass1 ? 'text' : 'password'}
            variant="filled"
            onFocus={() => {
              setFocusPass1(true), setFocusPass2(false);
            }}
            onBlur={() => setFocusPass1(false)}
            onChange={e => setPassword1(e.target.value)}
          />
          <img
            aria-hidden="true"
            className={`${hidePass}`}
            src={showPass1 ? ShowPass : HidePass}
            alt="Femmecubator logo"
            onClick={handleShowPass1}
            onKeyDown={handleKeyDownShowPass2}
          />
        </div>
        <div
          className={`${passField} ${marginBottomNm} ${
            focusPass2 ? focusBorder : ''
          }`}
        >
          <TextField
            id="filled-required"
            label="Retype Password"
            type={showPass2 ? 'text' : 'password'}
            variant="filled"
            onFocus={() => {
              setFocusPass2(true), setFocusPass1(false);
            }}
            onBlur={() => setFocusPass2(false)}
            onChange={e => setPassword2(e.target.value)}
          />
          <img
            aria-hidden="true"
            className={`${hidePass}`}
            src={showPass2 ? ShowPass : HidePass}
            alt="Femmecubator logo"
            onClick={handleShowPass2}
            onKeyDown={handleKeyDownShowPass2}
          />
        </div>
        <Button
          className={`${actionButton} ${actionButtonContained}`}
          variant="contained"
          onClick={handleSubmit}
          color="primary"
          // disabled={error || goals.length === 0}
        >
          CONFIRM
        </Button>
      </div>
    </div>
  );
};

export default ResetScreen;
