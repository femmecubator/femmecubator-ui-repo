import React, { useEffect } from 'react';

const Register = () => {
  useEffect(() => {
    throw new Error('this is a test to check if Error boundary is working');
  }, []);
  return <div>Register</div>;
};

export default Register;
