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
  directoryHeader: {
    color: '#495057',
    marginLeft: '5rem',
    fontWeight: '700',
  },
  mentorListContainer: {
    marginTop: '1.5rem',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    backgroundColor: 'white',
  },
}));

export default useStyles;
