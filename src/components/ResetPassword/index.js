import React from 'react';
import ResetScreen from './resetScreen';
import SuccessScreen from './successResetScreen';

const ResetPassword = () => {
  const [passReset, setPassReset] = React.useState(false);

  return passReset ? (
    <SuccessScreen />
  ) : (
    <ResetScreen setPassReset={setPassReset} />
  );
};

export default ResetPassword;
