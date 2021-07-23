import { makeStyles } from '@material-ui/core';

const colors = {
  primary: '#026FE4',
  secondary: '#828282',
  text: '#4F4F4F',
};

const useStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    top: '50%',
    margin: 'auto',
    height: '100vh',
    width: '100vw',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: ({ isMobile }) => (isMobile ? '60%' : '57%'),
    padding: ({ isMobile }) =>
      isMobile ? '0 .5rem 1rem 1rem' : '8% 10% 12% 8%',
    margin: ({ isMobile }) =>
      isMobile ? '0 3rem 1rem 16%' : '2rem 0 2rem 13%',
  },
  text: {
    textAlign: 'center',
    fontFamily: 'Open Sans, sans-serif',
    color: colors.text,
    fontSize: '1rem',
  },
  timeoutHeading: {
    color: colors.text,
    fontSize: '1.75rem',
    fontWeight: 700,
  },
  timeoutCountdown: {
    color: colors.primary,
    fontSize: '1.5rem',
    fontWeight: 600,
  },
  buttonsContainer: {
    marginTop: '2rem',
    display: 'flex',
    width: '100%',
    justifyContent: 'space-around',
  },
  button: {
    padding: ({ isMobile }) => (isMobile ? '4% 3%' : '10px 21px'),
    color: 'white',
    fontSize: '0.95rem',
    fontWeight: 700,
    fontFamily: 'Open Sans, sans-serif',
  },
  continueButton: {
    backgroundColor: '#026FE4',
    '&:hover': {
      backgroundColor: colors.primary,
      boxShadow: `0 0 1px 2px ${colors.primary}`,
    },
  },
  logoffButton: {
    backgroundColor: '#828282',
    '&:hover': {
      backgroundColor: colors.secondary,
      boxShadow: `0 0 1px 2px ${colors.secondary}`,
    },
  },
}));

export default useStyles;
