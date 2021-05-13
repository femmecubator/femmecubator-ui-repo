const DEFAULT_COMMON_MENU = {
  menuHeaders: [
    {
      id: 1,
      label: 'What We Do',
      href: '/about',
    },
    {
      id: 2,
      label: 'Resources',
      href: '/resources',
    },
    {
      id: 3,
      label: 'Log In',
      href: '/login',
    },
    {
      id: 4,
      label: 'Join Us',
      color: '#B9EBEC',
      href: '/register',
    },
  ],
};

const API_PATH = {
  COMMON_MENU: '/api/commonMenu',
  LOGIN: '/api/login',
  REGISTER: '/api/register',
  TIMEDOUT_ENDPOINT: '/login?timedOut=true',
  LOGIN_PAGE: '/login',
  ROOT: '/',
};

const METHOD_TYPE = {
  GET: 'get',
  POST: 'post',
  PATCH: 'patch',
  PUT: 'put',
  DELETE: 'delete',
};

const ANALYTICS_TYPE = {
  PAGE_VIEW: 'pageView',
  EVENT: 'event',
};

const ROUTES_LABEL = {
  HOME: 'homePage',
  MENTORS: 'mentors',
  LOGIN: 'login',
  REGISTER: 'register',
  DASHBOARD: 'dashboard',
  LISTINGS: 'listings',
  VOLUNTEER: 'volunteer',
  ABOUT: 'whatWeDo',
  RESOURCES: 'resources',
  THREADS: 'threads',
  SETTINGS: 'settings',
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
  {
    id: 7,
    isProtected: false,
    label: ROUTES_LABEL.ABOUT,
    path: '/about',
  },
  {
    id: 8,
    isProtected: false,
    label: ROUTES_LABEL.RESOURCES,
    path: '/resources',
  },
  {
    id: 9,
    isProtected: true,
    label: ROUTES_LABEL.THREADS,
    path: '/threads',
  },
  {
    id: 10,
    isProtected: true,
    label: ROUTES_LABEL.SETTINGS,
    path: '/settings',
  },
  {
    id: 11,
    isProtected: true,
    label: ROUTES_LABEL.DASHBOARD,
    path: '/dashboard',
  },
];

const ACTION_TYPE = {
  UPDATE_UI_VIEW: 'UPDATE_UI_VIEW',
};

const MOBILE_MEDIA_QUERY = '(max-width:799px)';
const COHORT = 'Spring 2021';
const APP_DEADLINE = 'January 1st 2021';

export {
  ANALYTICS_TYPE,
  API_PATH,
  DEFAULT_COMMON_MENU,
  ROUTES,
  ROUTES_LABEL,
  ACTION_TYPE,
  METHOD_TYPE,
  MOBILE_MEDIA_QUERY,
  COHORT,
  APP_DEADLINE,
};
