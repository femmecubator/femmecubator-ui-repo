import React from 'react';
import LoginForm from 'components/AccountForms/LoginForm';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from 'context/auth';
import { GlobalProvider } from 'context/global';

export default {
  title: 'Login Form',
  component: LoginForm,
};

export const Login_Form = () => {
  return (
    <AuthProvider>
      <Router>
        <GlobalProvider>
          <LoginForm />
        </GlobalProvider>
      </Router>
    </AuthProvider>
  );
};
