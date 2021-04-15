/* eslint-disable prettier/prettier */
import { makeStyles } from '@material-ui/core';
const avatarColors = [
  '#FF7452',
  '#FFAB00',
  '#D4EE9C',
  '#00C7E6',
  '#719AF5',
  '#CABEE9',
];

const useStyles = makeStyles(theme => ({
  root: {
    width: '413px',
    variant: ({ isMobile }) => (isMobile ? 'none' : 'outlined'),
    marginBottom: '1rem',
    maxHeight: '258px',
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

}));

export default useStyles;
