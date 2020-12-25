import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

describe('<App />', () => {
  test('should render app component', () => {
    const result = render(
      <Router>
        <App />
      </Router>
    );

    expect(result.container.querySelector('#root')).toBeTruthy;
  });
});
