import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  menuButtonsContainer: {
    display: 'flex',
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
}));

export default useStyles;
