/* eslint-disable prettier/prettier */
import { makeStyles } from '@material-ui/core';
import { font } from '../utils';
const avatarColors = [
  '#FF7452',
  '#FFAB00',
  '#D4EE9C',
  '#00C7E6',
  '#719AF5',
  '#CABEE9',
];

const useStyles = makeStyles(() => ({
  root: {
    width: '413px',
    variant: ({ isMobile }) => (isMobile ? 'none' : 'outlined'),
    marginBottom: '1rem',
    maxHeight: '258px',
  },
  avatar: {
    ...font,
    fontSize: '14px',
    backgroundColor: () => {
      return avatarColors[Math.floor(Math.random() * avatarColors.length)];
    },
    fontWeight: '600',
    color: 'black',
  },
  booking: {
    ...font,
    fontWeight: '600',
    maxHeight: '30px',
    marginTop: '10%',
    borderColor: '#026FE4',
    color: '#026FE4',
  },
  jobField: {
    ...font,
    color: '#026FE4',
    fontWeight: '700 !important',
  },
  mentorNameField: {
    ...font,
    fontWeight: '600 !important',
  },
  skillList: {
    ...font,
    fontWeight: '700',
  },
  bioSection: {
    ...font,
    fontWeight: '400',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    '-webkitLineClamp': 5,
    '-webkitBoxOrient': 'vertical',
  },
}));

export default useStyles;
