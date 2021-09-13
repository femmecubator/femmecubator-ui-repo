import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  dashboardWrapper: {
    marginTop: '50px',
    '& h1': {
      color: '#4F4F4F',
      marginBottom: '44px',
    },
  },
  timeSlotWrapper: {
    maxWidth: '860px',
    border: '1px solid #BDBDBD',
    borderRadius: '8px',
    marginBottom: '22px',
  },
  meetingWrapper: {
    maxWidth: '860px',
    border: '1px solid #BDBDBD',
    borderRadius: '8px',
    marginBottom: '90px',
  },
}));

export default useStyles;
