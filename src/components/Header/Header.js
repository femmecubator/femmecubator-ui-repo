import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import axios from 'axios';
import { API_PATH, DEFAULT_COMMON_MENU } from '../../utils/constants';
import { useAuth } from '../../context/auth';
import Link from '@material-ui/core/Link';
import { Link as RouterLink } from 'react-router-dom';
import { Drawer } from '@material-ui/core';
import _ from 'lodash';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  header: {
    backgroundColor: '#3E50B4',
    '@media (min-width: 799px)': {
      paddingRight: '79px',
      paddingLeft: '118px',
    },
  },
  menuButton: {
    fontFamily: 'Open Sans, sans-serif',
    fontWeight: 700,
    size: '18px',
    marginLeft: '38px',
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
  },
  drawerContainer: {
    height: '100%',
    padding: '20px',
  },
  joinBtn: {
    border: '1px solid white',
    color: 'white',
    fontFamily: 'Work Sans, sans-serif',
    fontWeight: 600,
    size: '16px',
  },
  title: {
    flexGrow: 1,
    textAlign: 'left',
    fontFamily: 'Work Sans, sans-serif',
    fontWeight: 600,
    size: '24px',
  },
}));

export default function Header() {
  const {
    root,
    header,
    title,
    menuButtonsContainer,
    menuButton,
    menuDrawer,
    joinBtn,
    userButton,
    userIcon,
    drawerContainer,
  } = useStyles();

  const { auth } = useAuth();

  const [state, setState] = useState({
    menuHeaders: DEFAULT_COMMON_MENU.headers,
    userName: '',
    mobileView: false,
    anchorEl: false,
    drawerOpen: false,
  });

  const { menuHeaders, userName, mobileView, anchorEl, drawerOpen } = state;

  useEffect(() => {
    axios
      .get(API_PATH.COMMON_MENU)
      .then(({ data: { headers: menuHeaders = {}, userName = '' } }) =>
        setState((prevState) => ({ ...prevState, menuHeaders, userName }))
      )
      .catch(() => {
        // Throw new error here when error boundary is in place
      });

    const setResponsiveness = () => {
      return window.innerWidth < 799
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };

    setResponsiveness();

    window.addEventListener('resize', () => setResponsiveness());
  }, [auth]);

  const femmecubatorLogo = (
    <Typography variant="h6" className={title}>
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
    if (menuHeaders && menuHeaders.length) {
      return menuHeaders
        .filter(({ href }) => href !== '/logout' && href !== '/account')
        .map(({ id, href, label }) => {
          let color = label === 'Join Us!' ? '#50E3C2' : 'white';

          return (
            <Button
              {...{
                key: id,
                color: 'inherit',
                to: href,
                className: menuButton,
                style: { color },
                component: RouterLink,
              }}
            >
              {label}
            </Button>
          );
        });
    }
  };

  const getDrawerChoices = () => {
    if (menuHeaders && menuHeaders.length) {
      return menuHeaders.map(({ id, href: to, label }) => (
        <Link
          {...{
            component: RouterLink,
            to,
            color: 'inherit',
            style: { textDecoration: 'none' },
            key: id,
          }}
        >
          <MenuItem>{label}</MenuItem>
        </Link>
      ));
    }
  };

  const getAccountChoices = () => {
    if (menuHeaders && menuHeaders.length) {
      return menuHeaders
        .filter(({ href }) => href === '/logout' || href === '/account')
        .map(({ id, href: to, label }) => {
          return (
            <Link
              {...{
                key: id,
                component: RouterLink,
                to,
                color: 'inherit',
                style: { textDecoration: 'none' },
              }}
            >
              <MenuItem>{label}</MenuItem>
            </Link>
          );
        });
    }
  };

  const displayDesktop = () => {
    const handleAccountOpen = (e) =>
      setState((prevState) => ({ ...prevState, anchorEl: e.currentTarget }));
    const handleAccountClose = () =>
      setState((prevState) => ({ ...prevState, anchorEl: null }));

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
                  open: !!anchorEl,
                  onClose: handleAccountClose,
                  keepMounted: true,
                  anchorEl,
                }}
              >
                {getAccountChoices()}
              </Menu>
            </>
          )}
        </div>
      </Toolbar>
    );
  };

  const displayMobile = () => {
    const handleDrawerOpen = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: true }));
    const handleDrawerClose = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: false }));

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
          <div className={drawerContainer}>{getDrawerChoices()}</div>
        </Drawer>

        {femmecubatorLogo}

        {!auth.isLoggedIn() && (
          <Button
            {...{
              variant: 'outlined',
              size: 'small',
              className: joinBtn,
              href: '/register',
            }}
          >
            JOIN
          </Button>
        )}
      </Toolbar>
    );
  };

  return (
    <header className={root}>
      <AppBar position="static" className={header}>
        {mobileView ? displayMobile() : displayDesktop()}
      </AppBar>
    </header>
  );
}
