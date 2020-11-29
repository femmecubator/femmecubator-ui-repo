import React from 'react';
import RegistrationForm from 'components/AccountForms/RegistrationForm';
import './RegistrationForm.css';
import { BrowserRouter as Router } from 'react-router-dom';
export default {
  title: 'Registration Form',
  component: RegistrationForm,
};

export const Registration_Form = () => {
  return (
    <>
      <div style={{ color: '#E5E5E5' }}>
        <Router>
          <RegistrationForm />
        </Router>
      </div>
    </>
  );
};
