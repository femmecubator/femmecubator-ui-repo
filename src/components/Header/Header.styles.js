import { makeStyles } from '@material-ui/core';

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

export default useStyles;
