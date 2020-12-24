import { Button, Menu, Toolbar } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';
import React from 'react';
import { useLocation } from 'react-router';
import FemmecubatorLogo from '../FemmecubatorLogo';
import isEmpty from 'lodash/isEmpty';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import useStyles from './DesktopHeader.styles';

const PATH_NAMES = ['/login', '/forgot', '/reset', '/register'];

const DesktopHeader = ({
  menuHeaders,
  userName,
  getAccountChoices,
  anchorEl,
  handleAccountClose,
  handleAccountOpen,
}) => {
  const location = useLocation();

  const {
    menuButtonsContainer,
    menuButton,
    userButton,
    userIcon,
    accountPopup,
    accountChoicesContainer,
  } = useStyles();

  const isNavHidden = PATH_NAMES.includes(location.pathname.toLowerCase());

  const getMenuButtons = () => {
    if (!isNavHidden && menuHeaders && menuHeaders.length) {
      return menuHeaders.map(({ id, href, label, color = 'white' }) => {
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

  return (
    <Toolbar>
      <FemmecubatorLogo />
      <div className={menuButtonsContainer}>
        {getMenuButtons()}
        {!isEmpty(userName) && (
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

export default DesktopHeader;
