import React, { useState } from 'react';
import request from 'utils/axiosConfig';
import { API_PATH } from 'utils/constants';
import { isAuthCookiesExists } from 'utils/cookies';

const Login = () => {
  const [state, setState] = useState({
    userName: '',
    password: '',
    isLoggedIn: isAuthCookiesExists(),
  });

  const { userName, password, isLoggedIn } = state;

  const handleChange = ({ target: { name, value } }) => {
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  if (isLoggedIn) {
    window.location.href = '/mentors';
  }

  const submitHandler = () => {
    request.post(API_PATH.LOGIN, { userName, password }).then(({ status }) => {
      if (status === 200) {
        window.location.href = '/mentors';
      }
    });
  };

  return (
    <>
      <div style={{ paddingTop: '10px' }}>
        <label htmlFor="userName" style={{ paddingRight: '10px' }}>
          User Name:
        </label>
        <input
          {...{
            type: 'text',
            name: 'userName',
            id: 'userName',
            value: userName,
            onChange: handleChange,
          }}
        />
      </div>
      <div style={{ paddingTop: '10px' }}>
        <label
          htmlFor="password"
          style={{ paddingRight: '10px', paddingTop: '10px' }}
        >
          Password:
        </label>
        <input
          {...{
            type: 'password',
            name: 'password',
            id: 'password',
            value: password,
            onChange: handleChange,
          }}
        />
      </div>
      <div style={{ paddingTop: '10px' }}>
        <button onClick={submitHandler}>Submit</button>
      </div>
    </>
  );
};

export default Login;
