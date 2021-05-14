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
    transform: 'translateY(-50%)',
    margin: 'auto',
    height: '464px',
    maxWidth: '643px',
  },
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
