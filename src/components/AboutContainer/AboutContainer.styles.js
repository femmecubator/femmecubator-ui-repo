import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  container: {
    backgroundColor: 'white',
  },
  body: {
    '@media (min-width: 799px)': {
      display: 'flex',
    },
  },
}));
export default useStyles;
