import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  femmecubatorTitle: {
    flexGrow: 1,
    textAlign: 'left',
    fontFamily: 'Work Sans, sans-serif',
    fontWeight: 600,
    fontSize: '24px',
    color: '#FFFEFE',
    '@media (max-width: 350px)': {
      fontSize: '18px',
    },
  },
}));

export default useStyles;
