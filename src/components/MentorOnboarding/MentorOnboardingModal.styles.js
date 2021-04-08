import { makeStyles } from '@material-ui/core/styles';

const color = {
  white: '#ffffff',
  primaryAccent: '#026FE4',
  gray: '#4F4F4F',
  gray6: '#F2F2F2',
  gray3: '#949494',
  gray2: '4F4F4F',
  primaryError: '#EB5757',
  secondaryError: '#FFEAEA',
  primaryWarning: '#F2994A',
  secondaryWarning: '#FBF1D0',
};

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  skills: {
    width: 500,
    '& > * + *': {
      marginTop: theme.spacing(3),
    },
  },
  // paperContainer: ({ isMobile }) => ({
  //   // margin: 'auto',
  //   //   padding: isMobile ? '2rem 1.5625em' : '2rem',
  //   //   width: isMobile ? 'auto' : 'fit-content',
  //   display: 'flex',
  //   justifyContent: 'center',
  //   padding: '60px',
  //   //   fontFamily: 'Open Sans, sans-serif',
  //   //   boxShadow: isMobile && 'none',
  // }),
  // formControl: {
  //   margin: theme.spacing(1),
  //   minWidth: 120,
  // },
  // selectEmpty: {
  //   marginTop: theme.spacing(2),
  // },
  modal: {
    position: 'fixed',
    borderRadius: '4px',
    width: '631px',
    height: '780px',
    left: '354px',
    top: '300px',
    backgroundColor: color.white,
    fontFamily: 'Open Sans, sans-serif',
    padding: theme.spacing(2, 4, 3),
    transform: 'translate(-50%, -30%)',
  },
  container: {
    color: color.gray2,
    fontFamily: 'Open Sans',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '16px',
    lineHeight: '50px',
    boxSizing: 'border-box',
    borderRadius: '8px',
  },
  textField: {
    display: 'flex',
    border: '1px solid',
    borderColor: color.gray3,
    backgroundColor: color.gray6,
    minWidth: '100%',
    boxSizing: 'border-box',
    borderRadius: '4px',
    marginTop: '-10px',
  },
  buttonModal: {
    width: 'fit-content',
    height: '32px',
    backgroundColor: color.primaryAccent,
    color: color.white,
    position: 'absolute',
    top: '680px',
    left: '250px',
    padding: '3.5px 21px',
    fontSize: '18px',
    fontFamily: 'Open Sans, sans-serif',
    fontWeight: '600',
    marginTop: '10px',
    justifyContent: 'center',
    alignItems: 'center',
  },
  subtitle: {
    color: color.gray3,
    marginTop: '-25px',
  },
  h2: {
    color: color.primaryAccent,
    fontFamily: 'Open Sans',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '28px',
    lineHeight: '38px',
  },
}));

export default useStyles;
