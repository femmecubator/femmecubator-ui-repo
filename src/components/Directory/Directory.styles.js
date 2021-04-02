import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    margin: '0 4.4rem',
    borderBottom: '3px solid #e8e8e8',
  },
  mentorListContainer: {
    // margin: '0 4rem',
    border: 'solid 2px red',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
  },
  search: {
    border: 'solid 2px blue',
  },
}));

export default useStyles;
