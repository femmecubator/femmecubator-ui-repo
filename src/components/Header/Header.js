import React, { useEffect, useState, useContext } from 'react';
import {
  makeStyles,
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Drawer,
  Link,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import request from 'utils/axiosConfig';
import { API_PATH, DEFAULT_COMMON_MENU } from '../../utils/constants';
import { useAuth } from '../../context/auth';
import { Link as RouterLink, useLocation, useHistory } from 'react-router-dom';
import { withRouter } from 'react-router';
import _ from 'lodash';
import { GlobalContext } from 'context/global';
import { clearSessionData } from 'utils/cookies';

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
  menuButton: {
    fontFamily: 'Open Sans, sans-serif',
    fontWeight: 700,
    size: '18px',
    marginLeft: '38px',
    '@media (max-width: 1055px)': {
      marginLeft: 20,
    },
  },
  userButton: {
    fontFamily: 'Work Sans, sans-serif',
    textTransform: 'none',
    size: '18px',
    fontWeight: 700,
    marginLeft: '38px',
  },
  userIcon: {
    fontSize: '24px',
    marginRight: '12px',
  },
  menuDrawer: {
    marginRight: '19px',
    '@media (max-width: 350px)': {
      marginRight: 0,
    },
  },
  drawerContainer: {
    height: '100%',
    width: 254,
    paddingTop: 86,
    backgroundColor: '#F2F7FF',
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
  arrowIcon: {
    position: 'absolute',
    left: 219,
    top: 17,
    cursor: 'pointer',
  },
  joinBtn: {
    border: '1px solid white',
    color: 'white',
    fontFamily: 'Work Sans, sans-serif',
    fontWeight: 600,
    size: '16px',
  },
  femmecubatorTitle: {
    flexGrow: 1,
    textAlign: 'left',
    fontFamily: 'Work Sans, sans-serif',
    fontWeight: 600,
    fontSize: '24px',
    color: '#FFFEFE',
    '@media (max-width: 350px)': {
      fontSize: '18px',
    },
  },
  menuButtonsContainer: {
    display: 'flex',
  },
  accountPopup: {
    marginTop: 14,
  },
  accountChoicesContainer: {
    margin: '-8px 0',
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#F2F7FF',
    width: 134,
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
  userInfoContainer: {
    margin: '0 43px 52px',
    '& > :first-child': {
      fontSize: 18,
      fontWeight: 700,
    },
    '& > :nth-child(2)': {
      fontSize: 14,
      color: '#026FE4',
      fontWeight: 600,
    },
  },
}));

const PATH_NAMES = ['/login', '/forgot', '/reset', '/register'];

function Header() {
  const {
    root,
    header,
    femmecubatorTitle,
    menuButtonsContainer,
    menuButton,
    menuDrawer,
    joinBtn,
    userButton,
    userIcon,
    drawerContainer,
    drawerChoice,
    arrowIcon,
    accountPopup,
    accountChoicesContainer,
    accountChoice,
    logOutIcon,
    userInfoContainer,
  } = useStyles();

  const location = useLocation();
  const {
    auth,
    authState: { isLoggedIn },
  } = useAuth();
  const {
    globalState: { isMobile },
  } = useContext(GlobalContext);
  const [state, setState] = useState({
    menuHeaders: DEFAULT_COMMON_MENU.headers,
    userName: '',
    title: '',
    anchorEl: false,
    drawerOpen: false,
  });
  const history = useHistory();

  const { menuHeaders, userName, title, anchorEl, drawerOpen } = state;
  const isNavHidden = PATH_NAMES.includes(location.pathname.toLowerCase());

  useEffect(() => {
    if (isLoggedIn) {
      request
        .get(API_PATH.COMMON_MENU)
        .then(
          ({
            data: {
              data: { headers: menuHeaders = {}, userName = '', title = '' },
            },
          }) =>
            setState((prevState) => ({
              ...prevState,
              menuHeaders,
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
    auth.logoff();
  };

  const handleDrawerOpen = () =>
    setState((prevState) => ({ ...prevState, drawerOpen: true }));
  const handleDrawerClose = () =>
    setState((prevState) => ({ ...prevState, drawerOpen: false }));
  const handleAccountOpen = (e) =>
    setState((prevState) => ({ ...prevState, anchorEl: e.currentTarget }));
  const handleAccountClose = () =>
    setState((prevState) => ({ ...prevState, anchorEl: null }));

  const femmecubatorLogo = (
    <Typography variant="h1" className={femmecubatorTitle}>
      <Link
        {...{
          component: RouterLink,
          to: '/',
          color: 'inherit',
          style: { textDecoration: 'none' },
        }}
      >
        Femmecubator
      </Link>
    </Typography>
  );

  const getMenuButtons = () => {
    if (!isNavHidden && menuHeaders && menuHeaders.length) {
      return menuHeaders
        .filter(
          ({ href }) =>
            href !== '/' &&
            href !== '/register' &&
            href !== '/notifications' &&
            href !== '/login?logout=true' &&
            href !== '/settings'
        )
        .map(({ id, href, label }) => {
          let color = label === 'Donate' ? '#B9EBEC' : 'white';

          return (
            <div key={id}>
              <Button
                {...{
                  color: 'inherit',
                  to: href,
                  className: menuButton,
                  style: { color },
                  component: RouterLink,
                  'aria-label': label,
                }}
              >
                <span aria-hidden="true">{label}</span>
              </Button>
            </div>
          );
        });
    }
  };

  const getDrawerChoices = () => {
    if (menuHeaders && menuHeaders.length) {
      let filteredChoices;

      if (isLoggedIn) {
        filteredChoices = menuHeaders.filter(
          ({ href }) => href !== '/notifications'
        );
      } else {
        filteredChoices = menuHeaders.filter(
          ({ href }) =>
            href !== '/listings' && href !== '/mentors' && href !== '/donate'
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
          <MenuItem className={drawerChoice} onClick={logoutHandler}>
            {to === '/login?logout=true' && (
              <ExitToAppIcon className={logOutIcon} />
            )}
            {label}
          </MenuItem>
        </Link>
      ));
    }
  };

  const getAccountChoices = () => {
    if (menuHeaders && menuHeaders.length) {
      return menuHeaders
        .filter(
          ({ href }) => href === '/login?logout=true' || href === '/settings'
        )
        .map(({ id, href: to, label }) => {
          return (
            <Link
              key={id}
              {...{
                component: RouterLink,
                to,
                color: 'inherit',
                style: { textDecoration: 'none' },
                onClick: handleAccountClose,
              }}
            >
              <MenuItem className={accountChoice} onClick={logoutHandler}>
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

  const displayDesktop = () => {
    return (
      <Toolbar>
        {femmecubatorLogo}
        <div className={menuButtonsContainer}>
          {getMenuButtons()}
          {!_.isEmpty(userName) && (
            <>
              <Button
                {...{
                  color: 'inherit',
                  className: userButton,
                  'aria-label': 'menu',
                  onClick: handleAccountOpen,
                  'aria-haspopup': 'true',
                }}
              >
                <AccountCircleIcon className={userIcon} />
                {userName}
              </Button>

              <Menu
                {...{
                  id: 'simple-menu',
                  className: accountPopup,
                  open: !!anchorEl,
                  onClose: handleAccountClose,
                  keepMounted: true,
                  anchorEl,
                  getContentAnchorEl: null,
                  anchorOrigin: { vertical: 'bottom', horizontal: 'center' },
                  transformOrigin: { vertical: 'top', horizontal: 'center' },
                }}
              >
                <div className={accountChoicesContainer}>
                  {getAccountChoices()}
                </div>
              </Menu>
            </>
          )}
        </div>
      </Toolbar>
    );
  };

  const displayMobile = () => {
    return (
      <Toolbar>
        <IconButton
          {...{
            edge: 'start',
            className: menuDrawer,
            'data-testid': 'drawer-button',
            color: 'inherit',
            'aria-label': 'menu',
            onClick: handleDrawerOpen,
            'aria-haspopup': 'true',
          }}
        >
          <MenuIcon />
        </IconButton>

        <Drawer anchor="left" open={drawerOpen} onClose={handleDrawerClose}>
          <ArrowForwardIcon className={arrowIcon} onClick={handleDrawerClose} />

          <div className={drawerContainer}>
            {isLoggedIn && (
              <div className={userInfoContainer}>
                <div>
                  <Link
                    {...{
                      component: RouterLink,
                      to: '/settings',
                      color: 'inherit',
                      style: { textDecoration: 'none' },
                    }}
                  >
                    @{userName}
                  </Link>
                </div>
                <div>{title}</div>
              </div>
            )}
            {getDrawerChoices()}
          </div>
        </Drawer>

        {femmecubatorLogo}

        {!isLoggedIn && (
          <Button
            {...{
              variant: 'outlined',
              size: 'small',
              className: joinBtn,
              to: '/register',
              component: RouterLink,
            }}
          >
            JOIN
          </Button>
        )}
      </Toolbar>
    );
  };

  return (
    <header className={root} id="app-header">
      <AppBar position="static" className={header}>
        {isMobile ? displayMobile() : displayDesktop()}
      </AppBar>
    </header>
  );
}

export default withRouter(Header);
