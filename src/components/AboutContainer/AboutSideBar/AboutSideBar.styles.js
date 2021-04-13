import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  container: {
    padding: '55px 30px 0 55px',
  },
  menuOption: {
    cursor: 'pointer',
    textTransform: 'uppercase',
    color: '#828282',
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
  },
}));

export default useStyles;
