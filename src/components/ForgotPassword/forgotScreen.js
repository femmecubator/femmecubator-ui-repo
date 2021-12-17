import React from 'react';
import { Button, TextField, Typography } from '@material-ui/core';
import useStyles from './ForgotPassword.styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import FemmecubatorLogoFull from '../../assets/images/FemmecubatorLogoFull.svg';

function validateEmail(mail) {
  if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
    return true;
  }
  return false;
}

const ForgotScreen = ({ setEmailSent }) => {
  const isMobile = useMediaQuery('(max-width:767px)');
  const classes = useStyles({ isMobile });
  const {
    root,
    logo,
    field,
    forgotContainer,
    dialogTitle,
    dialogText,
    actionButton,
    actionButtonContained,
    marginTopNm,
    marginBottomMd,
    normalWidth,
  } = classes;

  const [email, setEmail] = React.useState(null);

  React.useEffect(() => {
    console.log(email);
  }, [email]);

  const handleSubmit = () => {
    if (validateEmail(email)) setEmailSent(true);
  };

  return (
    <div className={root}>
      <div className={forgotContainer}>
        <img
          className={`${logo} ${marginBottomMd} ${marginTopNm}`}
          src={FemmecubatorLogoFull}
          alt="Femmecubator logo"
        />
        <Typography>
          <h2 className={`${dialogTitle} ${normalWidth}`}>
            Did you forget your password?
          </h2>
          <p className={`${dialogText} ${normalWidth}`}>It's ok, it happens.</p>
          <p className={`${dialogText} ${normalWidth}`}>
            To reset your password, type in your account email below.
          </p>
        </Typography>
        <div className={field}>
          <TextField
            id="filled-required"
            label="Email:"
            variant="filled"
            placeholder="Sam.Cruz@gmail.com"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <Button
          className={`${actionButton} ${actionButtonContained}`}
          variant="contained"
          onClick={handleSubmit}
          color="primary"
          disabled={!validateEmail(email)}
        >
          RESET PASSWORD
        </Button>
      </div>
    </div>
  );
};

export default ForgotScreen;
