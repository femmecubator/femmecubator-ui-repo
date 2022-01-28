import React from 'react';
import { useMediaQuery, Backdrop, CircularProgress } from '@material-ui/core';
import useStyles from '../MentorOnboarding/MentorOnboardingModal.styles.js';
import ResetScreen from './resetScreen';
import SuccessScreen from './successResetScreen';

const ResetPassword = () => {
  const [passReset, setPassReset] = React.useState(false);
  const [openBackdrop, setOpenBackdrop] = React.useState(false);

  const isMobile = useMediaQuery('(max-width:1024px)');
  const { backdrop } = useStyles({
    isMobile: isMobile,
  });

  return passReset ? (
    <SuccessScreen />
  ) : (
    <>
      <Backdrop className={backdrop} open={openBackdrop}>
        <CircularProgress color="inherit" />
      </Backdrop>
      <ResetScreen
        setPassReset={setPassReset}
        setOpenBackdrop={setOpenBackdrop}
      />
    </>
  );
};

export default ResetPassword;
