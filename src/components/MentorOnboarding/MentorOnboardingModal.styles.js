import { makeStyles } from '@material-ui/core/styles';

const color = {
  white: '#ffffff',
  primaryAccent: '#026FE4',
  gray: '#4F4F4F',
  gray6: '#F2F2F2',
  gray3: '#828282',
  gray2: '4F4F4F',
};

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  modal: {
    position: 'absolute',
    borderRadius: '4px',
    width: '631px',
    height: '930px',
    left: '354px',
    top: '300px',
    backgroundColor: color.white,
    fontFamily: 'Open Sans, sans-serif',
    padding: theme.spacing(2, 4, 3),
    transform: 'translate(-50%, -30%)',
  },
  textField: {
    position: 'flex',
    border: '1px solid',
    borderColor: color.gray3,
    backgroundColor: color.gray6,
    // borderBlockColor: color.gray3,
    // boxSizing: 'border-box',
    borderRadius: '4px',
  },
  buttonModal: {
    width: 'fit-content',
    height: '32px',
    backgroundColor: color.primaryAccent,
    color: color.white,
    position: 'absolute',
    left: '36%',
    right: '53%',
    top: '92%',
    bottom: '15%',
  },
  container: {
    color: color.gray2,
    fontFamily: 'Open Sans',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '18px',
    lineHeight: '25px',
    boxSizing: 'border-box',
    borderRadius: '8px',
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
