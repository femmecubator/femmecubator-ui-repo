import Landing from 'stubs/Landing';
import Login from 'stubs/Login';
import Register from 'stubs/Register';
import Mentor from 'stubs/Mentor';

// Google Analytics Tracking ID
const TRACKING_ID = 'UA-180314898-1';
const API_PATH = {
  LOGOFF_ENDPOINT: '/api/logoff',
  TIMEDOUT_ENDPOINT: '/api/logoff?timeout=true',
};

const routes = [
  {
    isProtected: true,
    path: '/',
    component: Landing,
  },
  {
    isProtected: true,
    path: '/mentor',
    component: Mentor,
  },
  {
    isProtected: false,
    path: '/login',
    component: Login,
  },
  {
    isProtected: false,
    path: '/register',
    component: Register,
  },
];

export { API_PATH, TRACKING_ID, routes };
