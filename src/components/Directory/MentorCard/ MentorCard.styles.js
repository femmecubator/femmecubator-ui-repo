import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    minHeight: 200,
    marginLeft: '2rem',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
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
