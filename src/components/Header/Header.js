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

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  header: {
    backgroundColor: '#3E50B4',
    ['@media (min-width: 799px)']: {
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
  } = useStyles();

  const {
    auth: { isAuthenticated },
  } = useAuth();

  const [menuHeaders, setMenuHeaders] = useState([]);
  const [userName, setUserName] = useState('');
  const [mobileView, setMobileView] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  useEffect(() => {
    axios
      .get(API_PATH.COMMON_MENU)
      .then(({ data }) => {
        if (data.headers && isAuthenticated) {
          setMenuHeaders(data.headers);
          setUserName(data.userName);
        } else {
          setMenuHeaders(DEFAULT_COMMON_MENU.headers);
        }
      })
      .catch((err) => console.log(err));

    const setResponsiveness = () => {
      return window.innerWidth < 799
        ? setMobileView(true)
        : setMobileView(false);
    };

    setResponsiveness();

    window.addEventListener('resize', () => setResponsiveness());
  }, []);

  const femmecubatorLogo = (
    <Typography variant="h6" className={title}>
      <Link
        {...{ href: '/', color: 'inherit', style: { textDecoration: 'none' } }}
      >
        Femmecubator
      </Link>
    </Typography>
  );

  const getMenuButtons = () => {
    if (menuHeaders.length) {
      return menuHeaders
        .filter(({ href }) => href !== '/logout')
        .map(({ id, href, label }) => {
          let color = label === 'Join Us!' ? '#50E3C2' : 'white';

          return (
            <Button
              {...{
                key: id,
                color: 'inherit',
                href,
                className: menuButton,
                style: { color },
              }}
            >
              {label}
            </Button>
          );
        });
    }
  };

  const getDrawerChoices = () => {
    if (menuHeaders.length) {
      return menuHeaders.map(({ id, href, label }) => (
        <Link
          {...{
            href,
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

  const displayDesktop = () => {
    return (
      <Toolbar>
        {femmecubatorLogo}
        <div className={menuButtonsContainer}>
          {getMenuButtons()}
          {userName && (
            <Button
              {...{
                color: 'inherit',
                className: userButton,
              }}
            >
              <AccountCircleIcon className={userIcon} />
              {userName}
            </Button>
          )}
        </div>
      </Toolbar>
    );
  };

  const displayMobile = () => {
    const handleDrawerClick = (e) => setAnchorEl(e.currentTarget);
    const handleDrawerClose = () => setAnchorEl(null);
    return (
      <Toolbar>
        <IconButton
          {...{
            edge: 'start',
            className: menuDrawer,
            color: 'inherit',
            ariaLabel: 'menu',
            onClick: handleDrawerClick,
            ariaHaspopup: 'true',
          }}
        >
          <MenuIcon />
        </IconButton>

        <Menu
          {...{
            id: 'simple-menu',
            open: !!anchorEl,
            onClose: handleDrawerClose,
            keepMounted: true,
            anchorEl,
          }}
        >
          {getDrawerChoices()}
        </Menu>

        {femmecubatorLogo}

        {!isAuthenticated && (
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
