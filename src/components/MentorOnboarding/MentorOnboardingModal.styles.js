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

const useStyles = makeStyles((theme, isMobile) => ({
  root: ({ isMobile }) => ({
    '& .MuiTextField-root': {
      width: '25ch',
      border: 'none',
      backgroundColor: color.white,
    },
    '& .MuiSelect-outlined': {
      border: 'none',
      backgroundColor: color.white,
    },
    '& .MuiFormHelperText-root': {
      backgroundColor: color.white,
      marginTop: '5px',
    },
  }),
  formHelperTxt: {
    position: 'absolute',
    top: '55px',
    fontFamily: 'Open Sans, sans-serif',
    color: 'red',
  },
  skills: {
    width: 500,
    '& > * + *': {
      marginTop: theme.spacing(3),
    },
  },
  modal: {
    [theme.breakpoints.between(600, 800)]: { width: '30em' },
    position: 'fixed',
    borderRadius: '4px',
    width: '631px',
    height: '800px',
    left: '354px',
    top: '300px',
    backgroundColor: color.white,
    fontFamily: 'Open Sans, sans-serif',
    padding: theme.spacing(2, 4, 3),
    transform: 'translate(-50%, -30%)',
  },
  h4Heading: {
    // [theme.breakpoints.between(600, 800)]: { width: '30em' },
    marginTop: '4px',
    color: color.gray,
    fontFamily: 'Open Sans',
    fontStyle: 'normal',
    fontWeight: '800',
    fontSize: '16px',
    lineHeight: '50px',
    boxSizing: 'border-box',
    borderRadius: '8px',
  },
  textField: {
    display: 'flex',
    border: '1px solid',
    borderColor: color.gray,
    backgroundColor: color.gray6,
    minWidth: '100%',
    boxSizing: 'border-box',
    borderRadius: '4px',
    marginTop: '-10px',
  },
  buttonModal: {
    [theme.breakpoints.up(800)]: {
      marginLeft: '35%',
      borderRadius: '4px',
    },
    borderRadius: '4px',
    marginLeft: '30%',
    width: 'fit-content',
    height: '44px',
    backgroundColor: color.primaryAccent,
    color: color.white,
    padding: '3.5px 21px',
    fontSize: '18px',
    fontFamily: 'Open Sans, sans-serif',
    fontWeight: '600',
    marginTop: '30px',
  },
  subheading: {
    color: color.gray,
    marginTop: '-25px',
    fontSize: '16px',
    fontWeight: '400',
  },
  heading: {
    color: color.primaryAccent,
    fontFamily: 'Open Sans',
    fontStyle: 'normal',
    fontWeight: '800',
    fontSize: '28px',
    lineHeight: '38px',
  },
}));

export default useStyles;
