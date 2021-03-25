import { makeStyles } from '@material-ui/core';

const color = {
  white: '#ffffff',
  primaryDark: '#4F4F4F',
  secondaryDark: '#828282',
  primaryAccent: '#026FE4',
  primaryError: '#EB5757',
  secondaryError: '#FFEAEA',
  primaryWarning: '#F2994A',
  secondaryWarning: '#FBF1D0',
};

const useStyles = makeStyles((theme) => ({
  root: ({ isMobile }) => ({
    margin: isMobile ? '0' : '5% 0',
  }),
  paperContainer: ({ isMobile }) => ({
    margin: 'auto',
    padding: isMobile ? '2rem 1.5625em' : '2rem',
    width: isMobile ? 'auto' : 'fit-content',
    display: 'flex',
    justifyContent: 'center',
    fontFamily: 'Open Sans, sans-serif',
    boxShadow: isMobile && 'none',
  }),
  rootMobile: {
    justifyContent: 'center',
  },
  resetFormContainer: ({ isMobile }) => ({
    width: isMobile ? '100vw' : '320px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }),
  resetForm: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  resetInput: {
    margin: '4% 0',
    minWidth: '100%',
  },
  formTitle: {
    fontSize: '1.75rem',
    fontWeight: '700',
    lineHeight: '38px',
    letterSpacing: '0em',
    textAlign: 'center',
    color: color.primaryDark,
    padding: '0px 0px 20px 0px',
  },
  formSubtitle: {
    textAlign: 'center',
    fontFamily: 'Open Sans, sans-serif',
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '24px',
    letterSpacing: '0px',
    paddingBottom: '25px',
  },
  inputSpacing: {
    marginTop: '8px',
  },
  textFieldSpacing: {
    marginLeft: '8px',
    width: '14.875em',
  },
  button: {
    padding: '3.5px 21px',
    width: 'fit-content',
    height: '32px',
    fontSize: '18px',
    fontFamily: 'Open Sans, sans-serif',
    whiteSpace: 'nowrap',
    fontWeight: '600',
    boxShadow: 'none',
  },
  confirm: {
    marginTop: '30px',
    width: '111px',
    color: color.white,
    background: color.primaryAccent,
    '&:hover': {
      background: color.primaryAccent,
      boxShadow: `0 0 1px 1px ${color.primaryAccent}`,
    },
  },
  textField: {
    width: '14.875em',
  },
}));

export default useStyles;
