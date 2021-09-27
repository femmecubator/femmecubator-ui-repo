import { makeStyles } from '@material-ui/core';
import { font } from '../../utils';

const useStyles = makeStyles(() => ({
  root: {
    ...font,
    width: '100%',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr',
    justifyContent: 'space-evenly',
    color: '#495057',
    paddingBottom: '60px',
    gap: '10px',
    '& *': {
      textAlign: 'center',
    },
  },
  day: {
    fontSize: ({ isMobile }) => (isMobile ? '16px' : '18px'),
    fontWeight: '700',
    marginBottom: 0,
  },
  date: {
    fontSize: ({ isMobile }) => (isMobile ? '16px' : '18px'),
    marginTop: 0,
  },
  slots: {
    display: ({ isMobile }) => (isMobile ? 'flex' : 'block'),
    flexDirection: ({ isMobile }) => (isMobile ? 'column' : 'column'),
    '& > button': {
      marginBottom: '10px',
    },
  },
  availableButton: {
    backgroundColor: '#F2F7FF',
    textTransform: 'lowercase',
    boxShadow: 'none',
    color: '#495057',
    '&:hover': {
      backgroundColor: '#026FE4',
      color: '#fff',
    },
    '& span': {
      display: 'flex',
      flexDirection: 'column',
      '& p': {
        margin: 0,
      },
    },
  },
  unavailableButton: {
    backgroundColor: '#E0E0E0',
    textTransform: 'lowercase',
    '&.Mui-disabled': { backgroundColor: '#E0E0E0' },
  },
  bookedButton: {
    backgroundColor: '#026FE4',
    textTransform: 'lowercase',
    color: '#fff',
    '&.Mui-disabled': { backgroundColor: '#026FE4', color: '#fff' },
  },
}));

export default useStyles;
