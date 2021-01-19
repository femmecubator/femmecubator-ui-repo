import React, { createContext, useContext, useReducer } from 'react';
import Auth from 'utils/auth';
import { ACTION_TYPE } from 'utils/constants';

const auth = new Auth();
const AuthContext = createContext();

const initialState = {
  isLoggedIn: auth.isLoggedIn(),
};

const AuthReducer = (authState, { type, payload }) => {
  switch (type) {
    case ACTION_TYPE.UPDATE_AUTH:
      return { ...authState, isLoggedIn: payload };
    default:
      throw new Error('Unknown action type');
  }
};

function AuthProvider(props) {
  const [authState, dispatch] = useReducer(AuthReducer, initialState);
  const value = { authState, dispatch, auth };
  return <AuthContext.Provider {...{ value, ...props }} />;
}

function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

export { AuthProvider, useAuth };
