const DEFAULT_COMMON_MENU = {
  headers: [
    {
      id: 1,
      label: 'Listings',
      href: '/Listings',
    },
    {
      id: 2,
      label: 'Mentors',
      href: '/mentors',
    },
    {
      id: 3,
      label: 'Home',
      href: '/',
    },
    {
      id: 4,
      label: 'Get Involved',
      href: '/volunteer',
    },
    {
      id: 5,
      label: 'Log In',
      href: '/login',
    },
    {
      id: 6,
      label: 'Sign Up',
      href: '/register',
    },
    {
      id: 7,
      label: 'Donate',
      href: '/donate',
    },
  ],
};

// Google Analytics Tracking ID
const TRACKING_ID = 'UA-180314898-1';

const API_PATH = {
  COMMON_MENU: '/api/commonMenu',
  LOGIN: '/api/login',
  LOGOFF_ENDPOINT: '/api/logoff',
  TIMEDOUT_ENDPOINT: '/api/logoff?timeout=true',
  LOGIN_PAGE: '/login',
};

const ROUTES_LABEL = {
  HOME: 'homePage',
  MENTORS: 'mentors',
  LOGIN: 'login',
  REGISTER: 'register',
  LISTINGS: 'listings',
  VOLUNTEER: 'volunteer',
};

const ROUTES = [
  {
    id: 1,
    isProtected: false,
    label: ROUTES_LABEL.HOME,
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
  {
    id: 6,
    isProtected: false,
    label: ROUTES_LABEL.VOLUNTEER,
    path: '/volunteer',
  },
];

const ACTION_TYPE = {
  UPDATE_UI_VIEW: 'UPDATE_UI_VIEW',
};

export {
  API_PATH,
  DEFAULT_COMMON_MENU,
  TRACKING_ID,
  ROUTES,
  ROUTES_LABEL,
  ACTION_TYPE,
};
