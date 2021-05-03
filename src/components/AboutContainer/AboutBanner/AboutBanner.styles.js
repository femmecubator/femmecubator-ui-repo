import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  container: {
    height: 233,
    '@media (max-width: 799px)': {
      height: 125,
    },
    margin: 0,
    position: 'relative',
    '&::before': {
      content: `''`,
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      zIndex: 1,
      backgroundColor: 'rgba(0, 0, 0, 0.4)',
    },
    '& img': {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: '0 45%',
      position: 'relative',
    },
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
    zIndex: 2,
    '@media (max-width: 799px)': {
      left: '50%',
      transform: 'translate(-50%, -50%)',
    },
    '@media (max-width: 370px)': {
      fontSize: 24,
    },
  },
}));

export default useStyles;
