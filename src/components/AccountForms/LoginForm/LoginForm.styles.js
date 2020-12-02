import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  formTitle: {
    fontFamily: 'Open Sans, sans-serif',
    fontSize: '1.75rem',
    fontWeight: '700',
    lineHeight: '38px',
    letterSpacing: '0em',
  },
  loginForm: {
    display: 'flex',
    flexDirection: 'column',
  },
  inputSpacing: {
    margin: '6.25% 0',
  },
  forgotPasswordLink: {
    textAlign: 'end',
    fontFamily: 'Open Sans, sans-serif',
    fontSize: '1rem',
    fontWeight: '400',
    lineHeight: '1.75rem',
    color: '#026FE4',
    textDecoration: 'none',
  },
}));

export default useStyles;