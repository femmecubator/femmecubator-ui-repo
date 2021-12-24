import React from 'react';
import { useMediaQuery, Backdrop, CircularProgress } from '@material-ui/core';
import useStyles from '../MentorOnboarding/MentorOnboardingModal.styles.js';
import ForgotScreen from './forgotScreen';
import SuccessScreen from './successForgotScreen';

const ForgotPassword = () => {
  const [emailSent, setEmailSent] = React.useState(false);
  const [openBackdrop, setOpenBackdrop] = React.useState(false);

  const isMobile = useMediaQuery('(max-width:1024px)');
  const { backdrop } = useStyles({
    isMobile: isMobile,
  });

  return emailSent ? (
    <SuccessScreen />
  ) : (
    <>
      <Backdrop className={backdrop} open={openBackdrop}>
        <CircularProgress color="inherit" />
      </Backdrop>
      <ForgotScreen
        setEmailSent={setEmailSent}
        setOpenBackdrop={setOpenBackdrop}
      />
    </>
  );
};

export default ForgotPassword;
