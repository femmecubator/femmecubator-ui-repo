import { makeStyles } from '@material-ui/core';
const avatarColors = [
  '#934ed4',
  '#BB6BD9',
  '#ABF5D1',
  '#e4fbff',
  '#b8b5ff',
  '#93329e',
  '#98acf8',
  '#550CCC',
  '#026FE4',
  '#26A8D1',
  '#6a097d',
  '#026FE4',
];

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 410,
    marginLeft: '2rem',
    variant: ({ isMobile }) => (isMobile ? 'none' : 'outlined'),
  },
  avatar: {
    fontSize: '14px',
    backgroundColor: () => {
      return avatarColors[Math.floor(Math.random() * avatarColors.length)];
    },
  },
  booking: {
    maxHeight: '30px',
    marginTop: '20%',
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
