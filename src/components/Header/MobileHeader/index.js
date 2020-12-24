import {
  Button,
  Drawer,
  IconButton,
  makeStyles,
  Toolbar,
} from '@material-ui/core';
import React from 'react';
import { useLocation } from 'react-router';
import MenuIcon from '@material-ui/icons/Menu';
import { Link as RouterLink } from 'react-router-dom';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import FemmecubatorLogo from '../FemmecubatorLogo';

const useStyles = makeStyles(() => ({
  menuDrawer: {
    marginRight: '19px',
    '@media (max-width: 350px)': {
      marginRight: 0,
    },
  },
  arrowIcon: {
    position: 'absolute',
    left: 219,
    top: 17,
    cursor: 'pointer',
  },
  drawerContainer: {
    height: '100%',
    width: 254,
    paddingTop: 86,
    backgroundColor: '#F2F7FF',
  },
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
  joinBtn: {
    border: '1px solid white',
    color: 'white',
    fontFamily: 'Work Sans, sans-serif',
    fontWeight: 600,
    size: '16px',
  },
}));

const MobileHeader = ({
  handleDrawerClose,
  handleDrawerOpen,
  drawerOpen,
  isLoggedIn,
  userName,
  title,
  getDrawerChoices,
  getAccountChoices,
}) => {
  const {
    menuDrawer,
    arrowIcon,
    drawerContainer,
    userInfoContainer,
    joinBtn,
  } = useStyles();

  const location = useLocation();

  const notOnLoginOrRegisterPath =
    location.pathname !== '/register' && location.pathname !== '/login';

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
              <div>{userName}</div>
              <div>{title}</div>
            </div>
          )}
          {getDrawerChoices()}
          {isLoggedIn && getAccountChoices()}
        </div>
      </Drawer>

      <FemmecubatorLogo />

      {!isLoggedIn && notOnLoginOrRegisterPath && (
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

export default MobileHeader;
