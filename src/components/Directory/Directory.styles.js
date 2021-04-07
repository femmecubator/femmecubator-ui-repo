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
    margin: '2rem 0 0 7.5rem',
    fontWeight: '700',
  },
  mentorListContainer: {
    marginTop: '1.5rem',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    backgroundColor: 'white',
  },
  tabs: {
    borderBottom: '1px #BDBDBD solid',
    margin: '2rem',
  },
}));

export default useStyles;
