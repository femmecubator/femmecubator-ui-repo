const DEFAULT_COMMON_MENU = {
  menuHeaders: [
    {
      id: 1,
      label: 'What We Do',
      href: '/about',
    },
    {
      id: 2,
      label: 'Get Involved',
      href: '/getinvolved',
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
  UPDATE_PASSWORD: '/api/profile/updatePassword',
  UPDATE_PROFILE: '/api/profile/updateProfile',
  GETPROFILEDATA: '/api/profile/getProfileData',
  UPDATE_MENTOR_PROFILE: '/api/mentors/updateProfile',
  GET_MENTORS_PROFILEDATA: '/api/mentors/profile',
  GET_TIME_SLOTS: '/api/booking/getTimeSlots',
  ADD_CALENDAR_EVENT: '/api/booking/createCalendarEvent',
  GET_MEETING_DETAILS: '/api/booking/',
  GET_SKILLS: '/api/skills/',
  UPDATE_SKILLS: '/api/skills/update',
  FORGOT_PASSWORD: '/api/register/forgotpassword',
  RESET_PASSWORD: '/api/register/resetpassword',
  ROLE_IDS: '/api/profile/getuserroles',
  ALL_USERS_DATA: '/api/profile/getAllUsers',
  DELETE_USER: '/api/profile/deleteUser',
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
  GET_INVOLVED: 'getinvolved',
  // THREADS: 'threads',
  SETTINGS: 'settings',
  FORGOTPASSWORD: 'forgotpassword',
  RESETPASSWORD: 'resetpassword',
  BACKOFFICE: 'backoffice',
};

const ROUTES = [
  {
    id: 1,
    isProtected: false,
    adminRoute: false,
    label: ROUTES_LABEL.HOME,
    path: '/',
  },
  {
    id: 2,
    isProtected: true,
    adminRoute: false,
    label: ROUTES_LABEL.MENTORS,
    path: '/mentors',
  },
  {
    id: 3,
    isProtected: false,
    adminRoute: false,
    label: ROUTES_LABEL.LOGIN,
    path: '/login',
  },
  {
    id: 4,
    isProtected: false,
    adminRoute: false,
    label: ROUTES_LABEL.REGISTER,
    path: '/register',
  },
  {
    id: 5,
    isProtected: false,
    adminRoute: false,
    label: ROUTES_LABEL.LISTINGS,
    path: '/listings',
  },
  {
    id: 6,
    isProtected: false,
    adminRoute: false,
    label: ROUTES_LABEL.VOLUNTEER,
    path: '/volunteer',
  },
  {
    id: 7,
    isProtected: false,
    adminRoute: false,
    label: ROUTES_LABEL.ABOUT,
    path: '/about',
  },
  {
    id: 8,
    isProtected: false,
    adminRoute: false,
    label: ROUTES_LABEL.RESOURCES,
    path: '/getinvolved',
  },
  // {
  //   id: 9,
  //   isProtected: true,
  //   label: ROUTES_LABEL.THREADS,
  //   path: '/threads',
  // },
  {
    id: 9,
    isProtected: true,
    adminRoute: false,
    label: ROUTES_LABEL.SETTINGS,
    path: '/settings',
  },
  {
    id: 10,
    isProtected: true,
    adminRoute: false,
    label: ROUTES_LABEL.DASHBOARD,
    path: '/dashboard',
  },
  {
    id: 11,
    isProtected: false,
    adminRoute: false,
    label: ROUTES_LABEL.FORGOTPASSWORD,
    path: '/forgotpassword',
  },
  {
    id: 12,
    isProtected: false,
    adminRoute: false,
    label: ROUTES_LABEL.RESETPASSWORD,
    path: '/resetpassword',
  },
  {
    id: 13,
    isProtected: true,
    adminRoute: true,
    label: ROUTES_LABEL.BACKOFFICE,
    path: '/backoffice',
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

export const userRoles = {
  mentor: 0,
  mentee: 1,
  admin: 4,
};
