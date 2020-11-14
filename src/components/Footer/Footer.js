import React, { useEffect, useState, useContext } from 'react';
import {
  makeStyles,
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Link,
} from '@material-ui/core';
import request from 'utils/axiosConfig';
import { API_PATH, DEFAULT_COMMON_MENU } from '../../utils/constants';
import { useAuth } from '../../context/auth';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import _ from 'lodash';
import { GlobalContext } from 'context/global';
import { clearSessionData } from 'utils/cookies';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: '#400CCC',
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
    fontSize: '24px',
    color: '#FFFEFE',
  },
  menuButtonsContainer: {
    display: 'flex',
  },
}));

const displayDesktop = () => {
    return (
      <h1>Hello?</h1>
    );
  };

const displayMobile = () => {

    return(

    );
};

export default function Footer() {
    const{
        root, 
        footer
    }=useStyles();
    return(
        <footer className={root}>
            <AppBar position="static" className={header}>
               Hello?
                {isMobile ? displayMobile() : displayDesktop()}
            </AppBar>
        </footer>
    )
    const location = useLocation();
    const { auth } = useAuth();
};