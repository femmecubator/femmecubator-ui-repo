import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import { shallow } from 'enzyme';

const AuthContext = React.createContext();

jest.mock('./context/auth/auth.js', () => {
  return {
    auth: {
      isLoggedIn: () => true,
    },
  };
});

const auth = require('context/auth/index');

describe('<App />', () => {
  test('should render app component', () => {
    const wrapper = shallow(
      <Router>
        <AuthContext.Provider value={{ auth }}>
          <App />
        </AuthContext.Provider>
      </Router>
    );

    expect(wrapper.find(App)).toHaveLength(1);
  });
});
