import { makeStyles } from '@material-ui/core/styles';

const color = {
  white: '#ffffff',
  primaryAccent: '#026FE4',
  gray: '#4F4F4F',
  gray6: '#F2F2F2',
  primaryError: '#EB5757',
  secondaryError: '#FFEAEA',
  primaryWarning: '#F2994A',
  secondaryWarning: '#FBF1D0',
};

const useStyles = makeStyles(theme => ({
  // root: () => ({
  //   display: 'flex',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   overflow: 'scroll',
  //   height: '100%',
  // }),
  modal: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '731px',
    backgroundColor: color.white,
    fontFamily: 'Open Sans, sans-serif',
    padding: theme.spacing(4, 2, 3),
  },
  labelText: {
    color: color.gray,
    fontFamily: 'Open Sans',
    fontWeight: '700',
    fontSize: '15px',
    padding: '10px 0',
    width: '100%',
  },
  textField: {
    display: 'flex',
    width: '100%',
  },
  inputContainer: {
    display: 'flex',
    width: '100%',
  },
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  modalSubmit: {
    margin: '25px',
    padding: '10px 21px',
    fontSize: '14px',
    fontFamily: 'Open Sans, sans-serif',
    fontWeight: '600',
    color: color.white,
    backgroundColor: color.primaryAccent,
    '&:hover': {
      backgroundColor: '#025bba',
    },
  },
  subheading: {
    margin: 0,
    color: color.gray,
    fontSize: '16px',
    fontWeight: '400',
  },
  heading: {
    margin: '10px',
    color: color.primaryAccent,
    fontFamily: 'Open Sans',
    fontWeight: '800',
    fontSize: '28px',
  },
}));

export default useStyles;
