import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: 'white',
    border: 'solid 2px green',
    margin: '0 4.4rem',
    borderBottom: '4px solid #e8e8e8',
    '&:selected $element': {
      color: '#550CCC !important',
    },
  },
  mentorListContainer: {
    border: 'solid 2px red',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    backgroundColor: 'white',
  },
  search: {
    border: 'solid 2px blue',
  },
}));

export default useStyles;
