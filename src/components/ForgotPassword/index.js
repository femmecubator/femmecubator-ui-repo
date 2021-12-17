import React from 'react';
import ForgotScreen from './forgotScreen';
import SuccessScreen from './successForgotScreen';

const ForgotPassword = () => {
  const [emailSent, setEmailSent] = React.useState(false);

  return emailSent ? (
    <SuccessScreen />
  ) : (
    <ForgotScreen setEmailSent={setEmailSent} />
  );
};

export default ForgotPassword;
