const DEFAULT_COMMON_MENU = {
  headers: [
    {
      id: 1,
      label: "Get Involved",
      href: "/get-involved",
    },
    {
      id: 2,
      label: "Log In",
      href: "/log-in",
    },
    {
      id: 3,
      label: "Join Us!",
      href: "/register",
    }
  ]
}

const API_PATH = {
  COMMON_MENU: '/api/commonMenu',
  LOGOFF_ENDPOINT: "/api/logoff",
  TIMEDOUT_ENDPOINT: "/api/logoff?timeout=true",
}

export { API_PATH, DEFAULT_COMMON_MENU };
