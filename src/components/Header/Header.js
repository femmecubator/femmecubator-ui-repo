import React, { useCallback, useEffect, useState } from 'react';
import { AppBar, MenuItem, Link, useMediaQuery } from '@material-ui/core';
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
import useStyles from './Header.styles';

function Header() {
  const { root, header, drawerChoice, accountChoice, logOutIcon } = useStyles();
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

  const handleDrawerOpen = useCallback(() => {
    setState((prevState) => ({ ...prevState, drawerOpen: true }));
  }, []);
  const handleDrawerClose = useCallback(() => {
    setState((prevState) => ({ ...prevState, drawerOpen: false }));
  }, []);
  const handleAccountOpen = useCallback((e) => {
    setState((prevState) => ({ ...prevState, anchorEl: e.currentTarget }));
  }, []);
  const handleAccountClose = useCallback(() => {
    setState((prevState) => ({ ...prevState, anchorEl: null }));
  }, []);

  const getDrawerChoices = useCallback(() => {
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
  }, [drawerChoice, handleDrawerClose, isLoggedIn, menuHeaders]);

  const getAccountChoices = useCallback(() => {
    const logoutHandler = () => Auth.logoff();

    if (utilities && utilities.length) {
      return utilities.map(({ id, href: to, color, label }) => {
        if (to === '/login?logout=true') {
          return (
            <MenuItem
              key={id}
              {...{
                className: isMobile ? drawerChoice : accountChoice,
                onClick: logoutHandler,
              }}
            >
              <ExitToAppIcon className={logOutIcon} />
              {label}
            </MenuItem>
          );
        }

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
            <MenuItem className={isMobile ? drawerChoice : accountChoice}>
              {label}
            </MenuItem>
          </Link>
        );
      });
    }
  }, [
    accountChoice,
    drawerChoice,
    handleAccountClose,
    handleDrawerClose,
    isMobile,
    logOutIcon,
    utilities,
  ]);

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
