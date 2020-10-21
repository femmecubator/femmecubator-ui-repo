import React from 'react';
import ReactDOM from 'react-dom';
import Header from 'components/Header/Header';
import { mockServer } from 'mock/mockServer';
import { AuthProvider } from 'context/auth/AuthProvider';
import { act } from 'react-dom/test-utils';
if (process.env.REACT_APP_MOCK_API_TRUE) {
  mockServer();
}

jest.mock('../../context/auth/auth');

const auth = require('context/auth/index');

// Fn's to resize screen
const resizeToMobile = () => {
  global.innerWidth = 600;
  global.dispatchEvent(new Event('resize'));
};

const resizeToDesktop = () => {
  global.innerWidth = 900;
  global.dispatchEvent(new Event('resize'));
};

let container;
describe('<Header />', () => {
  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
    act(() => {
      ReactDOM.render(
        <AuthProvider value={{ auth }}>
          <Header />
        </AuthProvider>,
        container
      );
    });
  });
  it('should render logo', () => {
    expect(container.querySelector('a').textContent).toBe('Femmecubator');
  });

  xit('should display burger menu icon if window is smaller than 799px and should hide burger menu icon if larger', () => {
    resizeToDesktop();
    expect(container.querySelector('.drawer-button')).toHaveLength(1);

    resizeToMobile();
    expect(container.querySelector('.drawer-button')).toHaveLength(1);
  });

  xit('should display the protected menu items if user is authenticated', async () => {
    expect(container.querySelector('button')).toHaveLength(1);
    // screen.getByText(/listings/i);
  });
});
