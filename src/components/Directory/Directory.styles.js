import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: 'white',
    margin: '0 4.4rem',
    borderBottom: '4px solid #e8e8e8',
    '&:selected $element': {
      color: '#550CCC !important',
    },

    display: 'flex',
    flexDirection: 'column',
  },
  mentorListContainer: {
    marginTop: '1.5rem',
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
