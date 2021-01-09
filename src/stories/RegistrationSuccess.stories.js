import React from 'react';
import RegistrationSuccess from 'components/RegistrationSuccess';
import { GlobalProvider } from 'context/global';
export default {
  title: 'Registration Success',
  component: RegistrationSuccess,
};

export const Registration_Success = () => {
  return (
    <>
      <div style={{ color: '#E5E5E5' }}>
        <GlobalProvider>
          <RegistrationSuccess />
        </GlobalProvider>
      </div>
    </>
  );
};
