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
  skillList: {
    fontWeight: '700',
    lineHeight: '35px',
  },
  // expandOpen: {
  //   transform: 'rotate(180deg)',
  //   use the below to convert items verticaly
  //   '@media (max-width: 799px)': {
  //     height: '218px',
  //     flexDirection: 'column',
  //     padding: '10px 10px',
  //   },
  // },
  avatar: {
    //   Background color is dependent on what is passed down
    backgroundColor: '#934ed4',
  },
}));

export default useStyles;
