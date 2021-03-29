import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 410,
    marginLeft: '2rem',
    variant: ({ isMobile }) => (isMobile ? 'none' : 'outlined'),
  },
  booking: {
    maxHeight: '30px',
    marginTop: '20%',
    borderColor: '#026FE4',
    color: '#026FE4',
  },
  jobField: {
    color: '#026FE4',
    fontWeight: '550 !important',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  skillList: {
    fontWeight: '600',
  },
  mentorNameField: {
    fontWeight: '550 !important',
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
    fontSize: '14px',
    backgroundColor: '#934ed4',
  },
}));

export default useStyles;
