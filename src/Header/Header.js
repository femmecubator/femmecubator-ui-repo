import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  header: {
    backgroundColor: '#3E50B4',
    paddingRight: '79px',
    paddingLeft: '118px'
  },
  menuButton: {
    fontFamily: 'Open Sans, sans-serif',
    fontWeight: 700,
    size: '18px',
    marginLeft: '38px'
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
  const classes = useStyles();
  const [menuHeaders, setMenuHeaders] = useState([])

  useEffect(() => {
    axios.get('/api/commonMenu')
      .then(res => setMenuHeaders(res.data.headers))
      .catch(err => console.log(err))
  }, [])

  const getMenuButtons = () => {
    if (menuHeaders.length) {
      return menuHeaders.map((item) => {
        let color = (item.label === "Join Us!") ? '#50E3C2' : 'white';

        return (<Button key={item.id} color="inherit" href={item.href} className={classes.menuButton} style={{color}}>{item.label}</Button>)
      })
    }
  }  

  const menuButtons = getMenuButtons();

  return (
    <header className={classes.root}>
      <AppBar position="static" className={classes.header}>
        <Toolbar>
          
          <Typography variant="h6" className={classes.title}>
            Femmecubator
          </Typography>
          
          <div className={classes.menuButtonsContainer}>{ menuButtons }</div>
          
                    
        </Toolbar>
      </AppBar>
    </header>
  );
}