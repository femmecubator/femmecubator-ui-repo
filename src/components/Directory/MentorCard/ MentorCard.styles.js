import { makeStyles } from '@material-ui/core';
const avatarColors = [
  '#FF7452',
  '#FFAB00',
  '#D4EE9C',
  '#00C7E6',
  '#719AF5',
  '#CABEE9',
];

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '30%',
    variant: ({ isMobile }) => (isMobile ? 'none' : 'outlined'),
  },
  avatar: {
    fontSize: '14px',
    backgroundColor: () => {
      return avatarColors[Math.floor(Math.random() * avatarColors.length)];
    },
    color: 'black',
  },
  booking: {
    maxHeight: '30px',
    marginTop: '10%',
    borderColor: '#026FE4',
    color: '#026FE4',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  jobField: {
    color: '#026FE4',
    fontWeight: '550 !important',
  },
  mentorNameField: {
    fontWeight: '550 !important',
  },
  skillList: {
    fontWeight: '600',
  },
  bioSection: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    '-webkitLineClamp': 5,
    '-webkitBoxOrient': 'vertical',
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
}));

export default useStyles;
