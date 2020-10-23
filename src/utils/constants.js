const DEFAULT_COMMON_MENU = {
  headers: [
    {
      id: 1,
      label: 'Get Involved',
      href: '/get-involved',
    },
    {
      id: 2,
      label: 'Log In',
      href: '/login',
    },
    {
      id: 3,
      label: 'Join Us!',
      href: '/register',
    },
  ],
};

// Google Analytics Tracking ID
const TRACKING_ID = 'UA-180314898-1';

const API_PATH = {
  COMMON_MENU: '/api/commonMenu',
  LOGOFF_ENDPOINT: '/api/logoff',
  TIMEDOUT_ENDPOINT: '/api/logoff?timeout=true',
};

const ROUTES_LABEL = {
  LANDING_PAGE: 'landingPage',
  MENTORS: 'mentors',
  LOGIN: 'login',
  REGISTER: 'register',
  LISTINGS: 'listings',
};

const ROUTES = [
  {
    id: 1,
    isProtected: false,
    label: ROUTES_LABEL.LANDING_PAGE,
    path: '/',
  },
  {
    id: 2,
    isProtected: true,
    label: ROUTES_LABEL.MENTORS,
    path: '/mentors',
  },
  {
    id: 3,
    isProtected: false,
    label: ROUTES_LABEL.LOGIN,
    path: '/login',
  },
  {
    id: 4,
    isProtected: false,
    label: ROUTES_LABEL.REGISTER,
    path: '/register',
  },
  {
    id: 5,
    isProtected: false,
    label: ROUTES_LABEL.LISTINGS,
    path: '/listings',
  },
];

export { API_PATH, DEFAULT_COMMON_MENU, TRACKING_ID, ROUTES, ROUTES_LABEL };
