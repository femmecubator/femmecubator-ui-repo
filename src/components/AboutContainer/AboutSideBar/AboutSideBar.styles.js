import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  container: {
    padding: '55px 30px 0 55px',
    '@media (max-width: 799px)': {
      padding: '40px 40px 0',
    },
    '@media (max-width: 490px)': {
      padding: '15px 15px 0',
    },
  },
  xsChoicesContainer: {
    '& div': {
      outline: 'none',
    },
  },
  scrollMenuIcon: {
    color: '#767676',
    margin: '3px 5px 0',
    backgroundColor: '#f2f2f2',
    borderRadius: '50%',
  },
  choicesContainer: {
    minWidth: 150,
    '@media (min-width: 1055px)': {
      minWidth: 180,
    },
    '@media (max-width: 799px)': {
      display: 'flex',
      justifyContent: 'space-between',
    },
  },
  menuOption: {
    cursor: 'pointer',
    textTransform: 'uppercase',
    color: '#767676',
    fontFamily: 'Open Sans, sans-serif',
    fontWeight: 700,
    fontSize: '14px',
    padding: '9px 0px',
    display: 'flex',
    justifyContent: 'space-between',
    position: 'relative',
    '&:hover': {
      color: '#400CCC',
    },
    '@media (max-width: 490px)': {
      marginRight: 48,
      marginLeft: -35,
    },
  },
  selectedMenuOption: {
    color: '#400CCC',
  },
  arrow: {
    color: '#400CCC',
    position: 'absolute',
    top: '50%',
    right: 0,
    transform: 'translate(0, -50%)',
    '@media (max-width: 799px)': {
      display: 'none',
    },
  },
}));

export default useStyles;
