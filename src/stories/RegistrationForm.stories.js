import React from 'react';
import RegistrationForm from 'components/AccountForms/RegistrationForm';
import './RegistrationForm.css';

export default {
  title: 'Registration Form',
  component: RegistrationForm,
};

export const Registration_Form = () => {
  return (
    <>
      <div style={{ color: '#E5E5E5' }}>
        <RegistrationForm />
      </div>
    </>
  );
};
