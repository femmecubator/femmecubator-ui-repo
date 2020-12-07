import { makeStyles } from '@material-ui/core';

const color = {
  white: '#ffffff',
  primaryDark: '#4F4F4F',
  secondaryDark: '#828282',
  primaryAccent: '#026FE4',
  secondaryAccent: '#1E90FF',
  primaryError: '#EB5757',
  secondaryError: '#FFEAEA',
  primaryWarning: '#F2994A',
  secondaryWarning: '#FBF1D0',
};

const useStyles = makeStyles(() => ({
  root: (props) => ({
    margin: props.isMobile ? '0' : '5% 0',
  }),
  paperContainer: (props) => ({
    margin: 'auto',
    padding: '2rem',
    width: 'fit-content',
    display: 'flex',
    justifyContent: 'center',
    fontFamily: 'Open Sans, sans-serif',
    boxShadow: props.isMobile && 'none',
  }),
  heroImage: {
    width: '589px',
    '@media (max-width: 972px)': {
      display: 'none',
    },
  },
  alert: {
    position: 'relative',
    padding: '0 16px',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: '4px',
    '& p': {
      margin: '16px 0 16px 8px',
    },
    '&::before': {
      position: 'absolute',
      left: '0',
      top: '0',
      content: '""',
      width: '8px',
      height: '100%',
      borderRadius: '4px 0 0 4px',
    },
  },
  error: {
    color: color.primaryError,
    background: color.secondaryError,
    '&::before': {
      background: color.primaryError,
    },
  },
  timedOut: {
    color: color.primaryWarning,
    background: color.secondaryWarning,
    '&::before': {
      background: color.primaryWarning,
    },
  },
  formTitle: {
    fontSize: '1.75rem',
    fontWeight: '700',
    lineHeight: '38px',
    letterSpacing: '0em',
    color: color.primaryDark,
  },
  loginFormContainer: {
    maxWidth: '320px',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  loginForm: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  input: {
    height: '31px',
  },
  label: {
    top: '5px',
  },
  labelShrink: {
    top: '0',
  },
  loginInput: {
    margin: '4% 0',
    minWidth: '100%',
  },
  helperText: {
    position: 'absolute',
    top: '65px',
  },
  forgotPasswordLink: {
    marginBottom: '6.25%',
    alignSelf: 'flex-end',
    fontSize: '1rem',
    fontWeight: '400',
    lineHeight: '1.75rem',
    color: '#026FE4',
    textDecoration: 'none',
  },
  button: {
    padding: '3.5px 21px',
    width: 'fit-content',
    fontSize: 'clamp(14px, 2.5vw, 18px)',
    fontWeight: '600',
    boxShadow: 'none',
  },
  signIn: {
    margin: '6.25% 0',
    color: color.white,
    background: color.secondaryAccent,
    '&:hover': {
      background: color.secondaryAccent,
      boxShadow: `0 0 1px 1px ${color.secondaryAccent}`,
    },
  },
  signInTwitter: {
    color: color.primaryAccent,
    border: `1px solid ${color.primaryAccent}`,
    background: color.white,
    '&:hover': {
      background: color.white,
      boxShadow: `0 0 1px 1px ${color.primaryAccent}`,
    },
  },
  twitter: {
    marginLeft: '0.25rem',
  },
  orDivider: {
    width: '100%',
    color: color.primaryDark,
    fontWeight: '400',
    textAlign: 'center',
    overflow: 'hidden',

    '&::before': {
      content: '""',
      display: 'inline-block',
      height: '0.5em',
      verticalAlign: 'bottom',
      width: '35%',
      marginRight: '5px',
      marginLeft: '-100%',
      borderTop: `1px solid ${color.primaryDark}`,
    },
    '&::after': {
      content: '""',
      display: 'inline-block',
      height: '0.5em',
      verticalAlign: 'bottom',
      width: '35%',
      marginRight: '-100%',
      marginLeft: '5px',
      borderTop: `1px solid ${color.primaryDark}`,
    },
  },
  createAccount: {
    color: color.white,
    background: color.secondaryDark,
    '&:hover': {
      color: color.white,
      background: color.secondaryDark,
      boxShadow: `0 0 1px 2px ${color.secondaryDark}`,
    },
  },
}));

export default useStyles;
