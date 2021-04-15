import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  chipStyle: {
    height: 'auto',
    padding: '8px 12px',
    fontFamily: 'Open Sans, sans-serif',
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: '700',
    color: '#FFF',
    display: 'flex',
    flexDirection: 'row-reverse',
    width: 'auto',
    borderColor: ' #026FE4',
    borderRadius: '30px',
    backgroundColor: '#026FE4',
    '&:hover': {
      backgroundColor: '#026FE4 !important',
      borderColor: ' #026FE4',
    },
    '&:first-child': {
      marginRight: '5px',
    },
    '&:focus': {
      backgroundColor: '#026FE4 !important',
      borderColor: ' #026FE4',
    },
  },
  checkIcon: {
    color: '#FFF',
  },
  chipAlert: {
    display: 'flex',
    color: '#f44336',
    fontFamily: 'Roboto',
    fontSize: '12px',
    marginLeft: '5px',
  },
  chipDivStyle: {
    display: 'flex',
    padding: ' 21px 0px 10px 0px',
    marginLeft: '-5px',
  },
  chipOutline: {
    height: 'auto',
    padding: '8px 12px',
    border: '3px solid #757575',
    borderRadius: '30px',
    color: '#757575',
    fontFamily: 'Open Sans, sans-serif',
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: '700',
    '&:hover': {
      backgroundColor: '#026FE4 !important',
      color: 'white',
      borderColor: ' #026FE4',
    },
    '&:first-child': {
      marginRight: '5px',
    },
    '&:focus': {
      backgroundColor: '#026FE4 !important',
      borderColor: ' #026FE4',
    },
  },
}));

export default useStyles;