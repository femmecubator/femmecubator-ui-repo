import React, { createContext, useContext } from 'react';
import Auth from './auth';

const AuthContext = createContext();

function AuthProvider(props) {
  const auth = new Auth();
  return <AuthContext.Provider value={{ auth }} {...props} />;
}

function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

export { AuthProvider, useAuth };
