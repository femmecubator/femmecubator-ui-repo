import { makeStyles } from '@material-ui/core/styles';

const theme = {
  white: '#ffffff',
  primaryDark: '#4F4F4F',
  secondaryDark: '#828282',
  primaryAccent: '#026FE4',
  secondaryAccent: '#1E90FF',
};

const useStyles = makeStyles(() => ({
  root: {
    padding: '2rem',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    fontFamily: 'Open Sans, sans-serif',
  },
  formTitle: {
    fontSize: '1.75rem',
    fontWeight: '700',
    lineHeight: '38px',
    letterSpacing: '0em',
    color: theme.primaryDark,
  },
  loginForm: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  inputSpacing: {
    margin: '6.25% 0',
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

    '&::before': {
      content: '""',
      display: 'inline-block',
      height: '0.5em',
      verticalAlign: 'bottom',
      width: '35%',
      marginRight: '5px',
      marginLeft: '-100%',
      borderTop: `1px solid ${theme.primaryDark}`,
    },
    '&::after': {
      content: '""',
      display: 'inline-block',
      height: '0.5em',
      verticalAlign: 'bottom',
      width: '35%',
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