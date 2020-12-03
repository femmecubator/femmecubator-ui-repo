import { makeStyles } from '@material-ui/core/styles';

const theme = {
  white: '#ffffff',
  primaryDark: '#4F4F4F',
  secondaryDark: '#828282',
  primaryAccent: '#026FE4',
  secondaryAccent: '#1E90FF',
  primaryError: '#EB5757',
  secondaryError: '#FFEAEA',
};

const useStyles = makeStyles(() => ({
  root: {
    padding: '2rem',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    fontFamily: 'Open Sans, sans-serif',
  },
  heroImage: {
    width: '589px',
    '@media (max-width: 972px)' : {
      display: 'none',
    }
  },
  error: {
    position: 'relative',
    padding: '0 16px',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    color: theme.primaryError,
    background: theme.secondaryError,
    borderRadius: '4px',
    '&::before': {
      position: 'absolute',
      left: '0',
      top: '0',
      content: '""',
      width: '8px',
      height: '100%',
      background: theme.primaryError,
      borderRadius: '4px 0 0 4px',
    },
    'p': {
      padding: '0'
    }
  },
  errorTab: {
    width: '8px',
    height: '100%',
    background: theme.primaryError,
  },
  formTitle: {
    fontSize: '1.75rem',
    fontWeight: '700',
    lineHeight: '38px',
    letterSpacing: '0em',
    color: theme.primaryDark,
  },
  loginFormContainer: {
    maxWidth: '320px',
    width: '100%',
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
    fontSize: '18px',
    fontWeight: '600',
    boxShadow: 'none',
  },
  signIn: {
    margin: '6.25% 0',
    color: theme.white,
    background: theme.secondaryAccent,
  },
  signInTwitter: {
    color: theme.primaryAccent,
    border: `1px solid ${theme.primaryAccent}`,
    background: theme.white,
  },
  twitter: {
    marginLeft: '0.25rem',
  },
  orDivider: {
    color: theme.primaryDark,
    fontWeight: '400',
    overflow: 'hidden',

    '&::before': {
      content: '""',
      display: 'inline-block',
      height: '0.5em',
      verticalAlign: 'bottom',
      width: '24%',
      marginRight: '5px',
      marginLeft: '-100%',
      borderTop: `1px solid ${theme.primaryDark}`,
    },
    '&::after': {
      content: '""',
      display: 'inline-block',
      height: '0.5em',
      verticalAlign: 'bottom',
      width: '24%',
      marginRight: '-100%',
      marginLeft: '5px',
      borderTop: `1px solid ${theme.primaryDark}`,
    }
  },
  createAccount: {
    color: theme.white,
    background: theme.secondaryDark,
  }
}));

export default useStyles;