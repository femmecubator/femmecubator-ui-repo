import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    border: 'solid 2px red',
    display: 'flex',
    flexWrap: 'wrap',
    // alignItems: 'row',
    // flexGrow: '3',
    // justifyContent: 'space-around',
  },
  search: {
    border: 'solid 2px blue',
  },
}));

export default useStyles;
