import { makeStyles } from '@material-ui/core';

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

export default useStyles;
