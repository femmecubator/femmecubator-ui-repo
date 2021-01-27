import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  subheader: {
    border: 'solid 1px blue',
  },
  subheaderIcon: {
    // fontFamily: 'Work Sans, sans-serif',
    width: '589px',
    '@media (max-width: 972px)': {
      display: 'none',
    },
  },
}));

export default useStyles;
