import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 360,
    marginLeft: '2rem',
  },
  booking: {
    marginTop: '10%',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  // expandOpen: {
  //   transform: 'rotate(180deg)',
  // },
  avatar: {
    backgroundColor: '#934ed4',
  },
}));

export default useStyles;
