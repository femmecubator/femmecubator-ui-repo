import { makeStyles } from '@material-ui/core/styles';

const color = {
  white: '#ffffff',
  primaryBlue: '#026FE4',
  gray: '#495057',
  black: '#000000',
  priority: '#E50000',
};

const useStyles = makeStyles(theme => ({
  root: () => ({
    '& .MuiInputBase-root': {
      boxSizing: 'border-box',
    },
    '& .MuiTextField-root': {
      border: 'none',
      backgroundColor: color.white,
    },
    '& .MuiOutlinedInput-input': {
      boxSizing: 'border-box',
    },
    '& .MuiSelect-outlined': {
      border: 'none',
      backgroundColor: color.white,
      boxSizing: 'border-box',
    },
    '& .MuiFormHelperText-root': {
      backgroundColor: color.white,
      marginTop: '5px',
      outline: 'none',
    },
    '& .MuiSelect-nativeInput': {
      margin: 'none',
    },
    '& .MuiSelect-root': {
      padding: '10px',
    },
  }),
  // formHelperTxt: {
  //   position: 'absolute',
  //   fontFamily: 'Open Sans, sans-serif',
  //   color: 'red',
  // },

  modal: {
    boxSizing: 'border-box',
    position: 'fixed',
    width: '531px',
    height: '920px',
    left: '50%',
    top: '50%',
    backgroundColor: color.white,
    fontFamily: 'Open Sans, sans-serif',
    padding: '30px 130px',
    transform: 'translate(-50%, -50%)',
  },
  heading: {
    color: color.primaryBlue,
    fontFamily: 'Open Sans',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: '28px',
    lineHeight: '38px',
  },
  h4Heading: {
    marginTop: '4px',
    color: color.gray,
    fontFamily: 'Open Sans',
    fontSize: '16px',
    lineHeight: '50px',
    fontWeight: '900',
  },
  titleInput: {
    display: 'flex',
    width: '100%',
    borderRadius: '4px',
    marginTop: '',
  },
  selectInput: {
    width: '120px',
    borderRadius: '4px',
  },
  buttonModal: {
    fontWeight: '600',
    width: '130px',
    height: '40px',
    fontFamily: 'Open Sans, sans-serif',
    fontSize: '18px',
    backgroundColor: color.white,
    color: color.primaryBlue,
    borderRadius: '4px',
    border: '1px solid #026FE4',
  },
  repeatEvery: {
    border: '1px solid #BDBDBD',
    width: '100%',
    height: '40px',
  },
  startEndTimeDiv: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: '10px',
  },
  startEndTimeLabel: {
    left: '10px',
    top: '50%',
    transform: 'translateY(-50%)',
  },
  buttonsDiv: {
    marginTop: '55px',
    display: 'flex',
    justifyContent: 'space-between',
    padding: '0px 0px',
  },
}));

export default useStyles;
