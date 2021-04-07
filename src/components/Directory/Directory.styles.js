import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: 'white',
    margin: '0 2rem',
  },
  directoryTab: {
    fontWeight: '600',
    color: '#550CCC',
    fontSize: '20px',
  },
  directoryHeader: {
    color: '#495057',
    margin: '1rem 0 0 5rem',
    fontWeight: '700',
  },
  mentorListContainer: {
    overflow: 'scroll',
    maxHeight: '450px',
    // Card height changes with the css below
    minHeight: '450px',
    marginTop: '3rem',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    backgroundColor: 'white',
  },
  tabs: {
    borderBottom: '1px #BDBDBD solid',
    margin: '1.2rem 2rem 2rem 2rem',
  },
}));

export default useStyles;
