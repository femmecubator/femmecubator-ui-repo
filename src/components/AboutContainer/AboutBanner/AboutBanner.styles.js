import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  container: {
    height: 233,
    margin: 0,
    position: 'relative',
    '& img': {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: '0 45%',
    },
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  title: {
    position: 'absolute',
    top: '50%',
    left: '0',
    transform: 'translate(50%, -50%)',
    color: 'white',
    fontFamily: 'Open Sans, sans-serif',
    fontWeight: 700,
    fontSize: '28px',
    textTransform: 'uppercase',
  },
}));

export default useStyles;
