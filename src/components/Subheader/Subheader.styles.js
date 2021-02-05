import { makeStyles } from '@material-ui/core';
const subheaderColors = {
  mentors: 'pink',
  threads: 'yellow',
};
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    // flexWrap: 'wrap',
    fontFamily: 'Open Sans, sans-serif',
  },
  subheaderContainer: {
    display: 'flex',
    height: '100px',
    width: '100%',
    // position: 'relative',
    // alignitems: 'center',
    border: 'solid 1px red',
  },
  subheader: {
    display: 'flex',
    flexDirection: 'row',
    flexShrink: '2',
    alignItems: 'center',
    justifyContent: 'space-around',
    border: 'solid 1px blue',
    height: '100px',
    width: '100%',
    backgroundColor: ({ variant }) => subheaderColors[variant],
    top: '64px',
    borderRadius: '0px',
    cursor: 'pointer',
  },
  subheaderIcon: {
    height: '100%',
    width: '7rem',
    border: 'solid 1px blue',
  },
}));

export default useStyles;
