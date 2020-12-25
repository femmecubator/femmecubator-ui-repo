import React, { useEffect, useState } from 'react';
import {
  makeStyles,
  AppBar,
  MenuItem,
  Link,
  useMediaQuery,
} from '@material-ui/core';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import request from 'utils/axiosConfig';
import {
  API_PATH,
  DEFAULT_COMMON_MENU,
  MOBILE_MEDIA_QUERY,
} from '../../utils/constants';
import { Link as RouterLink, useHistory } from 'react-router-dom';
import { withRouter } from 'react-router';
import { clearSessionData } from 'utils/cookies';
import Auth from 'utils/auth';
import DesktopHeader from './DesktopHeader';
import MobileHeader from './MobileHeader';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  header: {
    boxShadow: 'none',
    backgroundColor: '#400CCC',
    paddingLeft: '10px',
    '@media (min-width: 1055px)': {
      paddingRight: '79px',
      paddingLeft: '118px',
    },
  },
  drawerChoice: {
    fontFamily: 'Open Sans, sans-serif',
    fontSize: 14,
    fontWeight: 600,
    color: '#232735',
    width: 190,
    height: 40,
    padding: '8px, 0',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  accountChoice: {
    fontFamily: 'Open Sans, sans-serif',
    fontSize: 14,
    fontWeight: 600,
    color: '#232735',
    padding: 0,
    margin: '8px 22px',
  },
  logOutIcon: { fontSize: 16, marginRight: 5 },
}));

function Header() {
  const {
    root,
    header,

    drawerChoice,

    accountChoice,
    logOutIcon,
  } = useStyles();

  const isLoggedIn = Auth.isLoggedIn();
  const isMobile = useMediaQuery(MOBILE_MEDIA_QUERY);

  const [state, setState] = useState({
    menuHeaders: DEFAULT_COMMON_MENU.menuHeaders,
    utilities: [],
    userName: '',
    title: '',
    anchorEl: false,
    drawerOpen: false,
  });
  const history = useHistory();

  const {
    menuHeaders,
    utilities,
    userName,
    title,
    anchorEl,
    drawerOpen,
  } = state;

  useEffect(() => {
    if (isLoggedIn) {
      request
        .get(API_PATH.COMMON_MENU)
        .then(
          ({
            data: {
              data: {
                headers: menuHeaders = [],
                utilities = [],
                userName = '',
                title = '',
              },
            },
          }) =>
            setState((prevState) => ({
              ...prevState,
              menuHeaders,
              utilities,
              userName,
              title,
            }))
        )
        .catch(() => {
          clearSessionData();
          history.push(API_PATH.LOGIN_PAGE);
        });
    }
  }, [history, isLoggedIn]);

  const logoutHandler = () => {
    Auth.logoff();
  };

  const handleDrawerOpen = () =>
    setState((prevState) => ({ ...prevState, drawerOpen: true }));
  const handleDrawerClose = () =>
    setState((prevState) => ({ ...prevState, drawerOpen: false }));
  const handleAccountOpen = (e) =>
    setState((prevState) => ({ ...prevState, anchorEl: e.currentTarget }));
  const handleAccountClose = () =>
    setState((prevState) => ({ ...prevState, anchorEl: null }));

  const getDrawerChoices = () => {
    if (menuHeaders && menuHeaders.length) {
      let filteredChoices = menuHeaders;

      if (!isLoggedIn) {
        filteredChoices = menuHeaders.filter(
          ({ href }) => href !== '/register'
        );
      }

      return filteredChoices.map(({ id, href: to, label }) => (
        <Link
          {...{
            component: RouterLink,
            to,
            color: 'inherit',
            style: { textDecoration: 'none' },
            key: id,
            onClick: handleDrawerClose,
          }}
          key={id}
        >
          <MenuItem className={drawerChoice}>{label}</MenuItem>
        </Link>
      ));
    }
  };

  const getAccountChoices = () => {
    if (utilities && utilities.length) {
      return utilities.map(({ id, href: to, color, label }) => {
        return (
          <Link
            key={id}
            {...{
              component: RouterLink,
              to,
              color,
              style: { textDecoration: 'none' },
              onClick: () => {
                handleAccountClose(), handleDrawerClose();
              },
            }}
          >
            <MenuItem
              className={isMobile ? drawerChoice : accountChoice}
              onClick={to === '/login?logout=true' ? logoutHandler : null}
            >
              {to === '/login?logout=true' && (
                <ExitToAppIcon className={logOutIcon} />
              )}
              {label}
            </MenuItem>
          </Link>
        );
      });
    }
  };

  return (
    <header className={root} id="app-header">
      <AppBar position="static" className={header}>
        {isMobile ? (
          <MobileHeader
            {...{
              handleDrawerClose,
              handleDrawerOpen,
              drawerOpen,
              isLoggedIn,
              userName,
              title,
              getDrawerChoices,
              getAccountChoices,
            }}
          />
        ) : (
          <DesktopHeader
            {...{
              menuHeaders,
              userName,
              getAccountChoices,
              anchorEl,
              handleAccountClose,
              handleAccountOpen,
            }}
          />
        )}
      </AppBar>
    </header>
  );
}

export default withRouter(Header);
