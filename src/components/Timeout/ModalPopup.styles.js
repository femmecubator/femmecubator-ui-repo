import { makeStyles } from '@material-ui/core';

const colors = {
  primary: '#026FE4',
  secondary: '#828282',
  text: '#4F4F4F',
};

const useStyles = makeStyles(theme => ({
  modal: ({ isMobile }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    top: isMobile ? '25%' : '50%',
    transform: isMobile ? 'none' : 'translateY(-50%)',
    margin: 'auto',
    height: isMobile ? '100%' : '464px',
    maxWidth: '643px',
    minHeight: isMobile ? '100vh' : null,
  }),
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: '325px',
    padding: theme.spacing(0, 4, 4),
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
    padding: '10px 21px',
    color: 'white',
    fontSize: '18px',
    fontWeight: 700,
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
